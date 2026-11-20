import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as pdfjs from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import {
  ArrowLeft, ArrowRight, BarChart3, Check, ChevronRight, Clock3,
  Flame, Home, Library, RotateCcw, Settings, ShieldCheck,
  Sparkles, Target, Trophy, Upload, X
} from 'lucide-react'
import { questions as bank } from './questions'
import type { Mastery, Question, QuestionProgress, QuizResult, Subject } from './types'

type View = 'dashboard' | 'quiz' | 'results' | 'mistakes' | 'stats'
type Mode = 'practice' | 'exam' | 'mistakes'

interface QuizAnswer { questionId: string; selectedId: string | null; correct: boolean }
interface Persisted {
  progress: Record<string, QuestionProgress>
  results: QuizResult[]
  xp: number
  streak: number
  lastStudyDate: string | null
  mistakes: Record<string, number>
  activeQuiz: null | { questionIds: string[]; answers: (QuizAnswer | null)[]; index: number; mode: Mode; subject: string }
  customQuestions: Question[]
}

interface UploadedQuestion {
  question: string
  subject?: string
  answerOptions: { id: string; text: string }[]
  correctAnswer: string | number
  explanation?: string
}

const todayKey = () => new Date().toISOString().slice(0, 10)
const shuffle = <T,>(items: T[]) => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
const defaultPersisted: Persisted = { progress: {}, results: [], xp: 0, streak: 0, lastStudyDate: null, mistakes: {}, activeQuiz: null, customQuestions: [] }

function loadState(): Persisted {
  try {
    const raw = localStorage.getItem('hpc-final-state')
    return raw ? { ...defaultPersisted, ...JSON.parse(raw) } : defaultPersisted
  } catch { return defaultPersisted }
}

function parseUploadedQuestions(source: string, defaultSubject: Subject): Question[] {
  let drafts: UploadedQuestion[]
  if (source.trim().startsWith('[') || source.trim().startsWith('{')) {
    const parsed: unknown = JSON.parse(source)
    const records = Array.isArray(parsed) ? parsed : [parsed]
    drafts = records.map((value, index) => {
      if (!value || typeof value !== 'object') throw new Error(`Entry ${index + 1} needs manual review.`)
      const item = value as Record<string, unknown>
      if (typeof item.question !== 'string' || !Array.isArray(item.answerOptions)) {
        throw new Error(`Entry ${index + 1} is missing its question or answer options.`)
      }
      const answerOptions = item.answerOptions.map((option: unknown, optionIndex: number) => {
        if (typeof option === 'string') return { id: ['A', 'B', 'C', 'D', 'E'][optionIndex], text: option }
        if (option && typeof option === 'object' && 'text' in option) {
          const record = option as { id?: unknown; text: unknown }
          return { id: String(record.id || ['A', 'B', 'C', 'D', 'E'][optionIndex]), text: String(record.text) }
        }
        throw new Error(`Entry ${index + 1}, option ${optionIndex + 1} needs manual review.`)
      })
      if (typeof item.correctAnswer !== 'string' && typeof item.correctAnswer !== 'number') {
        throw new Error(`Entry ${index + 1} has no verified correct answer and needs manual review.`)
      }
      return {
        question: item.question,
        subject: typeof item.subject === 'string' ? item.subject : defaultSubject,
        answerOptions,
        correctAnswer: item.correctAnswer,
        explanation: typeof item.explanation === 'string' ? item.explanation : undefined,
      }
    })
  } else {
    drafts = []
    let current: UploadedQuestion | null = null
    for (const line of source.split(/\r?\n/)) {
      const questionMatch = line.match(/^\s*(?:\*\*)?\d+\.\*{0,2}\s+(?:\(([^)]+)\)\s*)?(.+?)\s*$/)
      if (questionMatch) {
        if (current) drafts.push(current)
        current = {
          question: questionMatch[2].trim(),
          subject: defaultSubject,
          answerOptions: [],
          correctAnswer: '',
        }
        continue
      }
      if (!current) continue
      const optionMatch = line.match(/^\s*-\s*(✅\s*)?(?:\*\*)?([A-E])[.)]\s*(.*?)\s*(?:\*\*)?\s*$/)
      if (optionMatch) {
        const optionText = optionMatch[3].trim().replace(
          /\s+(?:Memory and parallel design|OpenMP and hybrid programming|MapReduce and distributed storage|GPU and CUDA|Spark|PGAS and UPC|Basic parallel graph algorithms|MPI|HPC and Big Data\s+Practice questions)$/,
          '',
        ).trim()
        current.answerOptions.push({
          id: optionMatch[2],
          text: optionText,
        })
        if (optionMatch[1]) current.correctAnswer = optionMatch[2]
        continue
      }
      const answerMatch = line.match(/^\s*(?:correct answer|answer)\s*[:\-]\s*([A-E])\s*$/i)
      if (answerMatch) current.correctAnswer = answerMatch[1].toUpperCase()
    }
    if (current) drafts.push(current)
  }

  if (!drafts.length) throw new Error('No questions were found. Check the file format.')
  return drafts.map((draft, index) => {
    const label = `Question ${index + 1}`
    if (!draft.question.trim()) throw new Error(`${label} has no question text and needs manual review.`)
    if (draft.answerOptions.length < 2 || draft.answerOptions.length > 5) {
      throw new Error(`${label} has ${draft.answerOptions.length} options; it was not imported and needs manual review.`)
    }
    if (draft.answerOptions.some(option => !option.text.trim()) ||
        new Set(draft.answerOptions.map(option => option.id)).size !== draft.answerOptions.length ||
        new Set(draft.answerOptions.map(option => option.text.trim())).size !== draft.answerOptions.length) {
      throw new Error(`${label} has an empty or duplicate option and needs manual review.`)
    }
    const correctAnswer = draft.correctAnswer
    const correctId = typeof correctAnswer === 'number'
      ? draft.answerOptions[correctAnswer]?.id
      : draft.answerOptions.find(option => option.id === correctAnswer.toUpperCase())?.id
    if (!correctId) throw new Error(`${label} has no matching verified correct answer and needs manual review.`)
    return {
      id: `custom-${crypto.randomUUID()}`,
      sourceId: `custom-${crypto.randomUUID()}`,
      subject: (draft.subject || defaultSubject) as Subject,
      text: draft.question.trim(),
      options: draft.answerOptions.map(option => ({ ...option, text: option.text.trim() })),
      correctId,
      explanation: draft.explanation || `The correct answer is ${correctId}: ${draft.answerOptions.find(option => option.id === correctId)?.text}.`,
    }
  })
}

function App() {
  const [state, setState] = useState<Persisted>(loadState)
  const [view, setView] = useState<View>('dashboard')
  const [mode, setMode] = useState<Mode>('practice')
  const [subject, setSubject] = useState('All subjects')
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<(QuizAnswer | null)[]>([])
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [lastResult, setLastResult] = useState<QuizResult | null>(null)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [toast, setToast] = useState('')

  const allQuestions = useMemo(() => [...bank, ...state.customQuestions], [state.customQuestions])
  const subjects = useMemo(() => ['All subjects', ...Array.from(new Set(allQuestions.map(q => q.subject)))], [allQuestions])

  useEffect(() => {
    localStorage.setItem('hpc-final-state', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(''), 2400)
    return () => window.clearTimeout(timer)
  }, [toast])

  const showToast = (message: string) => setToast(message)

  const selectQuizQuestions = (quizMode: Mode, chosenSubject: string, mistakeOnly = false) => {
    const pool = allQuestions.filter(q => chosenSubject === 'All subjects' || q.subject === chosenSubject)
    if (pool.length === 0) return []
    if (mistakeOnly) {
      const mistakeIds = Object.keys(state.mistakes)
      return shuffle(pool.filter(q => mistakeIds.includes(q.id)).sort((a, b) =>
        (state.mistakes[b.id] || 0) - (state.mistakes[a.id] || 0)
      )).slice(0, 20)
    }
    const unseen = pool.filter(q => !state.progress[q.id])
    const seen = pool.filter(q => state.progress[q.id])
    const rankedSeen = seen.sort((a, b) => {
      const pa = state.progress[a.id], pb = state.progress[b.id]
      const masteryRank = (p: QuestionProgress) => p.mastery === 'Needs Review' ? 0 : p.mastery === 'Learning' ? 1 : p.mastery === 'Mastered' ? 3 : 2
      const wa = state.mistakes[a.id] || 0, wb = state.mistakes[b.id] || 0
      return (masteryRank(pa) - masteryRank(pb)) || (wb - wa)
    })
    const unseenCount = Math.min(14, unseen.length)
    const selectedCount = Math.min(20, pool.length)
    const chosen = shuffle(unseen).slice(0, unseenCount)
    const needed = selectedCount - chosen.length
    for (const q of rankedSeen) {
      if (chosen.length >= selectedCount) break
      if (!chosen.some(c => c.id === q.id)) chosen.push(q)
      if (chosen.length >= selectedCount) break
    }
    if (needed > rankedSeen.length) {
      // No duplicate questions; pool size controls the quiz length.
    }
    return shuffle(chosen).slice(0, selectedCount)
  }

  const startQuiz = (quizMode: Mode = mode, mistakeOnly = false) => {
    const selectedQuestions = selectQuizQuestions(quizMode, subject, mistakeOnly)
    if (selectedQuestions.length === 0) {
      showToast('No questions are available for this subject.')
      return
    }
    if (selectedQuestions.length < 20) showToast(`This bank has ${selectedQuestions.length} unique questions, so this shorter quiz is used.`)
    const prepared = selectedQuestions.map(q => ({ ...q, options: shuffle(q.options) }))
    setQuizQuestions(prepared)
    setAnswers(Array(prepared.length).fill(null))
    setQuizIndex(0)
    setSelected(null)
    setSubmitted(false)
    setMode(quizMode)
    setView('quiz')
    setState(s => ({
      ...s,
      activeQuiz: {
        questionIds: prepared.map(q => q.id),
        answers: Array(prepared.length).fill(null),
        index: 0,
        mode: quizMode,
        subject
      }
    }))
  }

  const saveActive = (nextIndex: number, nextAnswers: (QuizAnswer | null)[]) => {
    setState(s => ({
      ...s,
      activeQuiz: quizQuestions.length ? {
        questionIds: quizQuestions.map(q => q.id),
        answers: nextAnswers,
        index: nextIndex,
        mode,
        subject
      } : s.activeQuiz
    }))
  }

  const submitAnswer = () => {
    if (!selected || submitted) return
    const q = quizQuestions[quizIndex]
    const correct = selected === q.correctId
    const answer: QuizAnswer = { questionId: q.id, selectedId: selected, correct }
    const nextAnswers = [...answers]
    nextAnswers[quizIndex] = answer
    setAnswers(nextAnswers)

    setState(s => {
      const old = s.progress[q.id] || { attempts: 0, wrong: 0, correct: 0, consecutiveCorrect: 0, mastery: 'New' as Mastery, lastSeen: 0, lastWrong: false }
      const consecutive = correct ? old.consecutiveCorrect + 1 : 0
      const mastery: Mastery = correct ? (consecutive >= 3 ? 'Mastered' : old.mastery === 'Needs Review' ? 'Learning' : 'Learning') : 'Needs Review'
      const mistakes = correct ? s.mistakes : { ...s.mistakes, [q.id]: (s.mistakes[q.id] || 0) + 1 }
      const today = todayKey()
      let streak = s.streak
      if (s.lastStudyDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
        streak = s.lastStudyDate === yesterday ? s.streak + 1 : 1
      }
      return {
        ...s,
        xp: s.xp + (correct ? 10 : 0),
        streak,
        lastStudyDate: today,
        mistakes,
        activeQuiz: s.activeQuiz ? { ...s.activeQuiz, answers: nextAnswers, index: quizIndex } : s.activeQuiz,
        progress: {
          ...s.progress,
          [q.id]: {
            attempts: old.attempts + 1,
            wrong: old.wrong + (correct ? 0 : 1),
            correct: old.correct + (correct ? 1 : 0),
            consecutiveCorrect: consecutive,
            mastery,
            lastSeen: Date.now(),
            lastWrong: !correct
          }
        }
      }
    })
    setSubmitted(true)
  }

  const nextQuestion = () => {
    if (quizIndex + 1 >= quizQuestions.length) {
      finishQuiz()
      return
    }
    const next = quizIndex + 1
    setQuizIndex(next)
    setSelected(answers[next]?.selectedId || null)
    setSubmitted(mode === 'practice' ? !!answers[next] : false)
    saveActive(next, answers)
  }

  const finishExamAnswer = (qIndex = quizIndex) => {
    // Exam selections are stored only when explicitly selected.
    return answers[qIndex]
  }

  const finishQuiz = () => {
    const finalAnswers = mode === 'practice'
      ? answers.map((a, i) => a || { questionId: quizQuestions[i].id, selectedId: null, correct: false })
      : answers
    const correctCount = finalAnswers.filter(a => a?.correct).length
    const total = quizQuestions.length
    const accuracy = total ? Math.round(correctCount / total * 100) : 0
    const result: QuizResult = { id: crypto.randomUUID(), date: Date.now(), mode, subject, correct: correctCount, total, accuracy }
    setLastResult(result)
    setState(s => {
      let nextProgress = { ...s.progress }
      let nextMistakes = { ...s.mistakes }
      let streak = s.streak
      const today = todayKey()
      if (s.lastStudyDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
        streak = s.lastStudyDate === yesterday ? s.streak + 1 : 1
      }
      if (mode === 'exam') {
        quizQuestions.forEach((q,i) => {
          const answer = finalAnswers[i]
          const correct = !!answer?.correct
          const old = nextProgress[q.id] || { attempts: 0, wrong: 0, correct: 0, consecutiveCorrect: 0, mastery: 'New' as Mastery, lastSeen: 0, lastWrong: false }
          const consecutive = correct ? old.consecutiveCorrect + 1 : 0
          nextProgress[q.id] = {
            attempts: old.attempts + 1,
            wrong: old.wrong + (correct ? 0 : 1),
            correct: old.correct + (correct ? 1 : 0),
            consecutiveCorrect: consecutive,
            mastery: correct ? (consecutive >= 3 ? 'Mastered' : 'Learning') : 'Needs Review',
            lastSeen: Date.now(),
            lastWrong: !correct
          }
          if (!correct) nextMistakes[q.id] = (nextMistakes[q.id] || 0) + 1
        })
      }
      const xp = s.xp + 30 + (accuracy === 100 ? 100 : 0)
      return { ...s, xp, streak, lastStudyDate: today, progress: nextProgress, mistakes: nextMistakes, results: [result, ...s.results].slice(0, 30), activeQuiz: null }
    })
    setView('results')
  }

  const examChoose = (id: string) => {
    if (submitted) return
    setSelected(id)
    const next = [...answers]
    next[quizIndex] = { questionId: quizQuestions[quizIndex].id, selectedId: id, correct: id === quizQuestions[quizIndex].correctId }
    setAnswers(next)
    setState(s => ({ ...s, activeQuiz: s.activeQuiz ? { ...s.activeQuiz, answers: next, index: quizIndex } : s.activeQuiz }))
  }

  const chooseAnswer = (id: string) => {
    if (mode === 'exam') examChoose(id)
    else if (!submitted) setSelected(id)
  }

  const resumeQuiz = () => {
    const active = state.activeQuiz
    if (!active) return
    const activeQuestions = active.questionIds.map(id => allQuestions.find(q => q.id === id)).filter((q): q is Question => !!q)
    if (!activeQuestions.length) return
    setQuizQuestions(activeQuestions)
    setAnswers(active.answers)
    setQuizIndex(active.index)
    setMode(active.mode)
    setSubject(active.subject)
    setSelected(active.answers[active.index]?.selectedId || null)
    setSubmitted(active.mode === 'practice' ? !!active.answers[active.index] : false)
    setView('quiz')
  }

  const masteredCount = Object.values(state.progress).filter(p => p.mastery === 'Mastered').length
  const reviewCount = Object.keys(state.mistakes).filter(id => (state.progress[id]?.mastery !== 'Mastered') || state.mistakes[id]).length
  const practiced = Object.values(state.progress).reduce((sum, p) => sum + p.attempts, 0)
  const correctAnswers = Object.values(state.progress).reduce((sum, p) => sum + p.correct, 0)
  const accuracy = practiced ? Math.round(correctAnswers / practiced * 100) : 0
  const bankProgress = allQuestions.length ? Math.round(Object.keys(state.progress).length / allQuestions.length * 100) : 0
  const level = state.xp >= 1000 ? 5 : state.xp >= 600 ? 4 : state.xp >= 300 ? 3 : state.xp >= 100 ? 2 : 1
  const levelNames = ['', 'Beginner', 'Explorer', 'Challenger', 'Expert', 'Master']

  const masteryBar = allQuestions.length ? Math.round(masteredCount / allQuestions.length * 100) : 0
  const previous = state.results[1]

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <AnimatePresence>{toast && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm text-white shadow-xl">
          {toast}
        </motion.div>
      )}</AnimatePresence>

      {view !== 'quiz' && (
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <button onClick={() => setView('dashboard')} className="flex items-center gap-3" aria-label="HPC Final dashboard">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sage text-white shadow-sm"><ShieldCheck size={20}/></div>
            <span className="text-lg font-bold tracking-tight">HPC Final</span>
          </button>
          <nav className="hidden items-center gap-1 rounded-full border border-black/[0.05] bg-white p-1.5 shadow-sm md:flex">
            <NavButton active={view === 'dashboard'} icon={<Home size={17}/>} label="Today" onClick={() => setView('dashboard')}/>
            <NavButton active={view === 'mistakes'} icon={<Target size={17}/>} label="Mistake Vault" onClick={() => setView('mistakes')}/>
            <NavButton active={view === 'stats'} icon={<BarChart3 size={17}/>} label="Progress" onClick={() => setView('stats')}/>
          </nav>
          <button onClick={() => setUploadOpen(true)} className="grid h-10 w-10 place-items-center rounded-full border border-black/[0.07] bg-white shadow-sm" aria-label="Question bank">
            <Upload size={18}/>
          </button>
        </header>
      )}

      <main>
        {view === 'dashboard' && (
          <Dashboard
            state={state} allQuestions={allQuestions} subjects={subjects} subject={subject} setSubject={setSubject}
            mode={mode} setMode={setMode} startQuiz={startQuiz} resumeQuiz={resumeQuiz}
            setView={setView} accuracy={accuracy} practiced={practiced} bankProgress={bankProgress}
            masteredCount={masteredCount} reviewCount={reviewCount} level={level} levelNames={levelNames}
            masteryBar={masteryBar}
          />
        )}
        {view === 'quiz' && (
          <QuizView
            question={quizQuestions[quizIndex]} index={quizIndex} total={quizQuestions.length}
            selected={selected} submitted={submitted} mode={mode} answers={answers}
            chooseAnswer={chooseAnswer} submitAnswer={submitAnswer} nextQuestion={nextQuestion}
            prevQuestion={() => {
              if (quizIndex === 0) return
              const next = quizIndex - 1
              setQuizIndex(next)
              setSelected(answers[next]?.selectedId || null)
              setSubmitted(false)
              saveActive(next, answers)
            }}
            finishQuiz={finishQuiz} setView={setView} setSubmitted={setSubmitted}
          />
        )}
        {view === 'results' && lastResult && (
          <ResultsView result={lastResult} previous={previous} questions={quizQuestions} answers={answers}
            startQuiz={() => startQuiz(mode)} setView={setView} mistakes={() => setView('mistakes')}/>
        )}
        {view === 'mistakes' && (
          <MistakesView state={state} allQuestions={allQuestions} startMistakes={() => { setSubject('All subjects'); startQuiz('mistakes', true) }} setView={setView}/>
        )}
        {view === 'stats' && (
          <StatsView state={state} allQuestions={allQuestions} accuracy={accuracy} practiced={practiced}/>
        )}
      </main>

      {uploadOpen && <QuestionBankModal questions={allQuestions} close={() => setUploadOpen(false)} onAdd={(q) => {
        const added = Array.isArray(q) ? q : [q]
        setState(s => ({ ...s, customQuestions: [...s.customQuestions, ...added] }))
        setUploadOpen(false)
        showToast(`${added.length} question${added.length === 1 ? '' : 's'} added to your bank.`)
      }}/>}
    </div>
  )
}

function NavButton({active, icon, label, onClick}: {active: boolean; icon: React.ReactNode; label: string; onClick: () => void}) {
  return <button onClick={onClick} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${active ? 'bg-[#eef3ef] text-[#587965]' : 'text-[#777d7a] hover:bg-[#f7f7f5]'}`}>{icon}{label}</button>
}

function Dashboard(props: {
  state: Persisted; allQuestions: Question[]; subjects: string[]; subject: string; setSubject: (v: string) => void
  mode: Mode; setMode: (v: Mode) => void; startQuiz: (mode: Mode, mistakes?: boolean) => void; resumeQuiz: () => void
  setView: (v: View) => void; accuracy: number; practiced: number; bankProgress: number
  masteredCount: number; reviewCount: number; level: number; levelNames: string[]; masteryBar: number
}) {
  const { state } = props
  const xpInLevel = state.xp % 300
  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
      <section className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="relative overflow-hidden rounded-[32px] bg-[#dde9df] p-7 md:p-9">
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full border-[28px] border-white/25"/>
          <div className="relative max-w-xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#668174]">Today’s path</p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">Ready for another quest?</h1>
            <p className="mt-3 max-w-md text-[#647168]">A few focused questions are enough to keep your knowledge growing.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => props.startQuiz(props.mode)} className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 font-bold text-white shadow-lg shadow-ink/10 transition hover:-translate-y-0.5">
                Start Quiz <ArrowRight size={18}/>
              </button>
              {state.activeQuiz && <button onClick={props.resumeQuiz} className="rounded-2xl border border-ink/10 bg-white/70 px-5 py-3.5 font-bold">Resume quiz</button>}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard icon={<Flame size={20}/>} label="Study streak" value={`${state.streak} days`} tone="bg-[#f8e6da]"/>
          <StatCard icon={<Trophy size={20}/>} label="Level" value={`${props.level} · ${props.levelNames[props.level]}`} tone="bg-[#ebe6f5]"/>
          <StatCard icon={<Target size={20}/>} label="Accuracy" value={`${props.accuracy}%`} tone="bg-[#e5eee8]"/>
          <StatCard icon={<Sparkles size={20}/>} label="XP" value={state.xp.toLocaleString()} tone="bg-[#f3ead9]"/>
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
        <div className="rounded-[28px] border border-black/[0.05] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#858b87]">Question mastery</p>
              <p className="mt-1 text-2xl font-bold">{props.masteredCount} <span className="text-sm font-medium text-[#858b87]">of {props.allQuestions.length}</span></p>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#eef3ef] text-sage"><Check size={22}/></div>
          </div>
          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#edf0ed]">
            <motion.div initial={{width:0}} animate={{width:`${props.masteryBar}%`}} className="h-full rounded-full bg-sage"/>
          </div>
          <p className="mt-3 text-sm text-[#858b87]">{props.masteryBar}% mastered</p>
        </div>

        <div className="rounded-[28px] border border-black/[0.05] bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#858b87]">Choose your quest</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(['practice','exam'] as Mode[]).map(m => (
                  <button key={m} onClick={() => props.setMode(m)} className={`rounded-xl px-4 py-2 text-sm font-bold capitalize ${props.mode === m ? 'bg-ink text-white' : 'bg-[#f3f4f1] text-[#777d79]'}`}>{m} mode</button>
                ))}
              </div>
            </div>
            <select value={props.subject} onChange={e => props.setSubject(e.target.value)} className="min-w-48 rounded-xl border border-black/[0.08] bg-white px-4 py-2.5 text-sm font-semibold outline-none">
              {props.subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <button onClick={() => props.startQuiz(props.mode)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-sage px-5 py-3.5 font-bold text-white transition hover:bg-[#7da18d]">
            Begin 20-question quest <ChevronRight size={18}/>
          </button>
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[28px] border border-black/[0.05] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between"><p className="font-bold">Practice bank</p><span className="text-sm text-[#858b87]">{props.bankProgress}%</span></div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#edf0ed]"><div className="h-full rounded-full bg-lavender" style={{width:`${props.bankProgress}%`}}/></div>
          <p className="mt-4 text-sm text-[#858b87]">{props.practiced} questions answered across {state.results.length} quizzes.</p>
        </div>
        <button onClick={() => props.startQuiz('mistakes', true)} className="rounded-[28px] border border-[#e9d7c9] bg-[#f9efe7] p-6 text-left shadow-sm transition hover:-translate-y-0.5">
          <div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#efcfb9] text-[#805f49]"><RotateCcw size={20}/></div><span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold">{props.reviewCount} items</span></div>
          <p className="mt-5 font-bold">Practice My Mistakes</p>
          <p className="mt-1 text-sm text-[#7d756f]">Return to the questions that need another look.</p>
        </button>
        <div className="rounded-[28px] border border-black/[0.05] bg-white p-6 shadow-sm">
          <p className="font-bold">Your learning journey</p>
          <p className="mt-3 text-sm leading-6 text-[#777d79]">
            {props.accuracy >= 70 ? 'Your accuracy is strong. Keep revisiting lower-mastery questions.' : 'Every attempt builds memory. Start with Mistake Vault.'}
          </p>
          <button onClick={() => props.setView('stats')} className="mt-4 flex items-center gap-1 text-sm font-bold text-[#668174]">View insights <ChevronRight size={16}/></button>
        </div>
      </section>

      {state.results.length > 0 && (
        <section className="mt-8">
          <div className="mb-3 flex items-end justify-between"><h2 className="text-xl font-bold">Recent quests</h2><button onClick={() => props.setView('stats')} className="text-sm font-bold text-[#668174]">See all</button></div>
          <div className="grid gap-3 md:grid-cols-3">
            {state.results.slice(0,3).map(r => (
              <div key={r.id} className="rounded-2xl border border-black/[0.05] bg-white p-4">
                <div className="flex items-center justify-between"><span className="text-sm font-bold">{r.accuracy}%</span><span className="text-xs text-[#929794]">{new Date(r.date).toLocaleDateString()}</span></div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#edf0ed]"><div className="h-full rounded-full bg-sage" style={{width:`${r.accuracy}%`}}/></div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function StatCard({icon,label,value,tone}:{icon:React.ReactNode;label:string;value:string|number;tone:string}) {
  return <div className={`rounded-[24px] ${tone} p-5`}>
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/70">{icon}</div>
    <p className="mt-5 text-xs font-semibold text-[#777d79]">{label}</p>
    <p className="mt-1 text-xl font-bold">{value}</p>
  </div>
}

function QuizView(props: {
  question: Question; index: number; total: number; selected: string | null; submitted: boolean
  mode: Mode; answers: (QuizAnswer | null)[]; chooseAnswer: (id: string) => void
  submitAnswer: () => void; nextQuestion: () => void; finishQuiz: () => void
  prevQuestion: () => void; setView: (v: View) => void; setSubmitted: (v: boolean) => void
}) {
  const { question, index, total, mode } = props
  const correct = props.selected === question.correctId
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key >= '1' && event.key <= '4') {
        const option = question.options[Number(event.key) - 1]
        if (option) props.chooseAnswer(option.id)
      }
      if (event.key === 'Enter') {
        if (isExam) {
          if (index === total - 1) props.finishQuiz()
          else props.nextQuestion()
        } else if (props.submitted) props.nextQuestion()
        else props.submitAnswer()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  if (!question) return null
  const isExam = mode === 'exam'

  return (
    <div className="min-h-screen px-4 py-4 md:px-8 md:py-6">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <button onClick={() => props.setView('dashboard')} className="grid h-11 w-11 place-items-center rounded-full border border-black/[0.06] bg-white shadow-sm" aria-label="Exit quiz"><X size={19}/></button>
        <div className="flex items-center gap-3">
          {isExam && <span className="flex items-center gap-2 rounded-full bg-[#f5eee6] px-3 py-2 text-xs font-bold text-[#806d5c]"><Clock3 size={14}/> Exam mode</span>}
          <span className="text-sm font-bold">{index + 1} / {total}</span>
        </div>
      </header>
      <div className="mx-auto mt-4 h-1.5 max-w-5xl overflow-hidden rounded-full bg-[#eaece8]">
        <motion.div initial={{width:0}} animate={{width:`${((index + 1) / total) * 100}%`}} className="h-full rounded-full bg-sage"/>
      </div>

      <motion.div key={question.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mx-auto mt-8 max-w-3xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-full bg-[#ebe6f5] px-3 py-1.5 text-xs font-bold text-[#736892]">{question.subject}</span>
          <span className="text-xs font-semibold text-[#9ba09d]">Question {index + 1}</span>
        </div>
        <div className="rounded-[32px] border border-black/[0.05] bg-white p-6 shadow-[0_16px_45px_rgba(55,62,58,.07)] md:p-9">
          <h1 className="text-xl font-bold leading-relaxed md:text-2xl">{question.text}</h1>
          <div className="mt-7 space-y-3">
            {question.options.map((option, i) => {
              let classes = 'border-[#e7e9e5] bg-white hover:border-sage hover:bg-[#f7faf8]'
              if (props.submitted) {
                if (option.id === question.correctId) classes = 'border-[#90b49e] bg-[#edf5ef] text-[#466452]'
                if (props.selected === option.id && option.id !== question.correctId) classes = 'border-[#dfaaa0] bg-[#f9ece8] text-[#835b54]'
              } else if (props.selected === option.id) {
                classes = 'border-sage bg-[#edf4ef] shadow-[0_0_0_3px_rgba(139,175,154,.12)]'
              }
              return (
                <button key={option.id} onClick={() => props.chooseAnswer(option.id)}
                  className={`flex w-full items-center gap-4 rounded-2xl border-2 px-4 py-4 text-left font-semibold transition ${classes}`}>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#f1f2ef] text-sm">{i + 1}</span>
                  <span className="flex-1">{option.text}</span>
                  {props.submitted && option.id === question.correctId && <Check size={19}/>}
                </button>
              )
            })}
          </div>

          {props.submitted && !isExam && (
            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className={`mt-5 rounded-2xl p-4 ${correct ? 'bg-[#edf5ef]' : 'bg-[#f9ece8]'}`}>
              <p className="font-bold">{correct ? 'Correct! ✨' : 'Not quite! Let’s learn this.'}</p>
              <p className="mt-1 text-sm leading-6 text-[#68716d]">{question.explanation}</p>
            </motion.div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-[#969b98]">
              {props.answers.filter(a => a?.correct).length} correct · {props.answers.filter(a => a && !a.correct).length} incorrect
            </div>
            {isExam ? (
              <div className="flex gap-2">
                {index > 0 && <button onClick={props.prevQuestion} className="rounded-xl border px-4 py-3 font-bold" aria-label="Previous question"><ArrowLeft size={18}/></button>}
                {index < total - 1 ? (
                  <button onClick={props.nextQuestion} className="flex items-center gap-2 rounded-xl bg-ink px-5 py-3 font-bold text-white">Next <ArrowRight size={18}/></button>
                ) : (
                  <button onClick={props.finishQuiz} className="rounded-xl bg-ink px-5 py-3 font-bold text-white">Submit quiz</button>
                )}
              </div>
            ) : props.submitted ? (
              <button onClick={props.nextQuestion} className="flex items-center gap-2 rounded-xl bg-ink px-5 py-3 font-bold text-white">
                {index === total - 1 ? 'See results' : 'Next'} <ArrowRight size={18}/>
              </button>
            ) : (
              <button onClick={props.submitAnswer} disabled={!props.selected} className="rounded-xl bg-ink px-5 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">Submit answer</button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function ResultsView({ result, previous, questions, answers, startQuiz, setView, mistakes }: {
  result: QuizResult; previous?: QuizResult; questions: Question[]; answers: (QuizAnswer | null)[]
  startQuiz: () => void; setView: (v: View) => void; mistakes: () => void
}) {
  const message = result.accuracy >= 90 ? 'Excellent! You’ve mastered this quest!'
    : result.accuracy >= 70 ? 'Great progress! Keep going!'
    : result.accuracy >= 50 ? 'You’re improving! Practice makes progress.'
    : 'Every mistake is a chance to learn!'
  const comparison = previous ? result.accuracy - previous.accuracy : null
  return (
    <div className="mx-auto max-w-5xl px-5 pb-16 md:px-8">
      <motion.section initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="rounded-[32px] bg-[#dde9df] px-6 py-9 text-center md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#668174]">Quest completed</p>
        <div className="mx-auto mt-5 grid h-36 w-36 place-items-center rounded-full border-[10px] border-white/70 bg-white shadow-lg">
          <div><p className="text-4xl font-bold">{result.accuracy}%</p><p className="mt-1 text-xs font-bold text-[#858b87]">{result.correct}/{result.total}</p></div>
        </div>
        <h1 className="mt-5 text-2xl font-bold md:text-3xl">{message}</h1>
        {comparison !== null && <p className="mt-2 text-sm text-[#68766f]">{comparison >= 0 ? '+' : ''}{comparison}% compared with your previous quiz</p>}
      </motion.section>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <button onClick={mistakes} className="flex items-center justify-between rounded-2xl border border-[#e9d7c9] bg-[#f9efe7] px-5 py-4 text-left font-bold">
          Review mistakes <ChevronRight size={18}/>
        </button>
        <button onClick={startQuiz} className="flex items-center justify-between rounded-2xl bg-ink px-5 py-4 text-left font-bold text-white">
          Start new quiz <ChevronRight size={18}/>
        </button>
      </div>
      <button onClick={() => setView('dashboard')} className="mx-auto mt-5 flex items-center gap-2 text-sm font-bold text-[#668174]"><ArrowLeft size={16}/> Back to dashboard</button>

      {questions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">Answer review</h2>
          <div className="mt-4 space-y-3">
            {questions.map((q,index) => {
              const answer = answers[index]
              const selectedOption = q.options.find(o => o.id === answer?.selectedId)
              const correctOption = q.options.find(o => o.id === q.correctId)
              return (
                <div key={q.id} className="rounded-2xl border border-black/[0.05] bg-white p-5">
                  <p className="font-bold leading-6">{q.text}</p>
                  <div className="mt-4 space-y-2">
                    {q.options.map(option => {
                      const isCorrect = option.id === q.correctId
                      const isWrongSelection = option.id === answer?.selectedId && !answer?.correct
                      return <div key={option.id} className={`rounded-xl border px-3 py-2.5 text-sm ${isCorrect ? 'border-[#90b49e] bg-[#edf5ef] text-[#466452]' : isWrongSelection ? 'border-[#dfaaa0] bg-[#f9ece8] text-[#835b54]' : 'border-[#e7e9e5] bg-white'}`}>
                        <span className="mr-2 font-bold">{option.id}.</span>{option.text}
                      </div>
                    })}
                  </div>
                  <p className="mt-3 text-sm text-[#7b817e]">Your answer: <span className="font-bold">{selectedOption?.text || 'Not answered'}</span></p>
                  <p className="mt-1 text-sm text-[#587965]">Correct answer: <span className="font-bold">{correctOption?.text}</span></p>
                  <p className="mt-2 text-sm leading-6 text-[#68716d]">{q.explanation}</p>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

function MistakesView({ state, allQuestions, startMistakes, setView }: {
  state: Persisted; allQuestions: Question[]; startMistakes: () => void; setView: (v: View) => void
}) {
  const items = Object.entries(state.mistakes)
    .sort((a,b) => b[1]-a[1])
    .map(([id,count]) => ({question: allQuestions.find(q => q.id === id), count}))
    .filter((item): item is {question: Question; count: number} => !!item.question)
  return (
    <div className="mx-auto max-w-5xl px-5 pb-16 md:px-8">
      <div className="flex items-end justify-between">
        <div><p className="text-sm font-bold text-[#8b8178]">Smart revision</p><h1 className="mt-1 text-3xl font-bold">Mistake Vault</h1></div>
        <button onClick={startMistakes} disabled={!items.length} className="rounded-xl bg-ink px-5 py-3 font-bold text-white disabled:opacity-40">Practice mistakes</button>
      </div>
      {items.length === 0 ? (
        <div className="mt-8 rounded-[28px] border border-dashed border-[#d8ded9] bg-white py-16 text-center">
          <Target className="mx-auto text-sage" size={32}/>
          <h2 className="mt-4 text-xl font-bold">Your vault is clear</h2>
          <p className="mt-2 text-sm text-[#858b87]">Complete a quiz and missed questions will appear here.</p>
          <button onClick={() => setView('dashboard')} className="mt-5 rounded-xl bg-sage px-5 py-3 font-bold text-white">Start studying</button>
        </div>
      ) : (
        <div className="mt-7 space-y-3">
          {items.map(({question,count}) => {
            const progress = state.progress[question.id]
            const correct = question.options.find(o => o.id === question.correctId)
            return (
              <div key={question.id} className="rounded-[24px] border border-black/[0.05] bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-bold leading-6">{question.text}</p>
                  <span className="shrink-0 rounded-full bg-[#f8e6da] px-3 py-1 text-xs font-bold text-[#806d5c]">{count} missed</span>
                </div>
                <p className="mt-3 text-sm text-[#587965]">Correct: {correct?.text}</p>
                <p className="mt-2 text-sm leading-6 text-[#68716d]">{question.explanation}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${progress?.mastery === 'Mastered' ? 'bg-[#edf5ef] text-[#587965]' : 'bg-[#f5efdf] text-[#817450]'}`}>{progress?.mastery || 'Learning'}</span>
                  {progress?.mastery === 'Mastered' && <span className="text-xs font-bold text-sage">Mastered</span>}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function StatsView({ state, allQuestions, accuracy, practiced }: {
  state: Persisted; allQuestions: Question[]; accuracy: number; practiced: number
}) {
  const subjectStats = allQuestions.reduce<Record<string,{attempted:number;correct:number}>>((acc,q) => {
    const p = state.progress[q.id]
    if (!p) return acc
    acc[q.subject] ||= {attempted:0,correct:0}
    acc[q.subject].attempted += p.attempts
    acc[q.subject].correct += p.correct
    return acc
  }, {})
  const mastered = Object.values(state.progress).filter(p => p.mastery === 'Mastered').length
  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
      <h1 className="text-3xl font-bold">Learning insights</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<Target size={20}/>} label="Questions answered" value={practiced} tone="bg-[#e5eee8]"/>
        <StatCard icon={<BarChart3 size={20}/>} label="Overall accuracy" value={`${accuracy}%`} tone="bg-[#ebe6f5]"/>
        <StatCard icon={<ShieldCheck size={20}/>} label="Mastered" value={mastered} tone="bg-[#edf5ef]"/>
        <StatCard icon={<Flame size={20}/>} label="Study streak" value={`${state.streak} days`} tone="bg-[#f8e6da]"/>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_.7fr]">
        <div className="rounded-[28px] border border-black/[0.05] bg-white p-6">
          <h2 className="font-bold">Accuracy by subject</h2>
          <div className="mt-5 space-y-4">
            {Object.entries(subjectStats).map(([name,stat]) => {
              const pct = stat.attempted ? Math.round(stat.correct/stat.attempted*100) : 0
              return <div key={name}>
                <div className="flex justify-between text-sm"><span className="font-semibold">{name}</span><span className="text-[#858b87]">{pct}%</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf0ed]"><motion.div initial={{width:0}} animate={{width:`${pct}%`}} className="h-full rounded-full bg-sage"/></div>
              </div>
            })}
            {!Object.keys(subjectStats).length && <p className="text-sm text-[#858b87]">Complete a quiz to see subject insights.</p>}
          </div>
        </div>
        <div className="rounded-[28px] border border-black/[0.05] bg-white p-6">
          <h2 className="font-bold">Quiz history</h2>
          <div className="mt-4 space-y-3">
            {state.results.slice(0,8).map(r => (
              <div key={r.id} className="flex items-center justify-between border-b border-black/[0.05] pb-3 last:border-0">
                <div><p className="text-sm font-bold">{r.correct}/{r.total} correct</p><p className="text-xs text-[#969b98]">{new Date(r.date).toLocaleDateString()} · {r.mode}</p></div>
                <span className="rounded-full bg-[#edf5ef] px-3 py-1 text-sm font-bold text-[#587965]">{r.accuracy}%</span>
              </div>
            ))}
            {!state.results.length && <p className="text-sm text-[#858b87]">No completed quizzes yet.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

function QuestionBankModal({ questions, close, onAdd }: { questions: Question[]; close: () => void; onAdd: (q: Question | Question[]) => void }) {
  const [tab, setTab] = useState<'json'|'manual'>('manual')
  const [text,setText]=useState('')
  const [subject,setSubject]=useState<Subject>('High Performance Computing')
  const [options,setOptions]=useState(['','','',''])
  const [correct,setCorrect]=useState('A')
  const [explanation,setExplanation]=useState('')
  pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl
  const importFile = async (file: File) => {
    try {
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        const buffer = await file.arrayBuffer()
        const pdf = await pdfjs.getDocument({ data: buffer }).promise
        let extracted = ''
        for (let page = 1; page <= pdf.numPages; page++) {
          const content = await (await pdf.getPage(page)).getTextContent()
          extracted += content.items.map((item: any) => item.str).join(' ') + '\n'
        }
        setText(extracted)
        setTab('json')
        return
      }
      const extracted = await file.text()
      setText(extracted)
    } catch {
      alert('This file could not be read. Try JSON or TXT instead.')
    }
  }
  const parseJson = () => {
    try {
      onAdd(parseUploadedQuestions(text, subject))
    } catch (error) {
      alert(error instanceof Error ? error.message : 'The question file could not be verified and needs manual review.')
    }
  }
  const addManual = () => {
    if(!text.trim()||options.some(o=>!o.trim())) return
    onAdd({
      id:`custom-${Date.now()}`,sourceId:`custom-${Date.now()}`,subject,text:text.trim(),
      options:['A','B','C','D','E'].slice(0,options.length).map((id,i)=>({id,text:options[i].trim()})),
      correctId:correct,explanation:explanation.trim()||'Review the correct option and remember the key concept in this question.'
    })
  }
  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-ink/20 p-4 backdrop-blur-sm" onMouseDown={e=>e.target===e.currentTarget&&close()}>
      <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-[#858b87]">Question bank</p><h2 className="mt-1 text-xl font-bold">{questions.length} unique questions</h2></div><button onClick={close} className="grid h-9 w-9 place-items-center rounded-full bg-[#f2f3f0]"><X size={17}/></button></div>
        <div className="mt-5 flex gap-2">
          <button onClick={()=>setTab('manual')} className={`rounded-xl px-4 py-2 text-sm font-bold ${tab==='manual'?'bg-ink text-white':'bg-[#f3f4f1]'}`}>Manual entry</button>
          <button onClick={()=>setTab('json')} className={`rounded-xl px-4 py-2 text-sm font-bold ${tab==='json'?'bg-ink text-white':'bg-[#f3f4f1]'}`}>JSON / TXT</button>
        </div>
        {tab==='manual'?(
          <div className="mt-5 space-y-3">
            <select value={subject} onChange={e=>setSubject(e.target.value as Subject)} className="w-full rounded-xl border px-4 py-3 text-sm">
              {['High Performance Computing','Memory and parallel design','MapReduce and distributed storage','GPU and CUDA','Spark','PGAS and UPC','Basic parallel graph algorithms','Practice questions','Other'].map(s=><option key={s}>{s}</option>)}
            </select>
            <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Question text" className="min-h-24 w-full rounded-xl border px-4 py-3 text-sm outline-none"/>
            {options.map((o,i)=><div key={i} className="flex items-center gap-2"><button onClick={()=>setCorrect(['A','B','C','D','E'][i])} className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-bold ${correct===['A','B','C','D','E'][i]?'bg-sage text-white':'bg-[#f1f2ef]'}`}>{['A','B','C','D','E'][i]}</button><input value={o} onChange={e=>setOptions(v=>v.map((x,j)=>j===i?e.target.value:x))} placeholder={`Answer ${i+1}`} className="w-full rounded-xl border px-4 py-3 text-sm"/></div>)}
            <textarea value={explanation} onChange={e=>setExplanation(e.target.value)} placeholder="Short explanation" className="w-full rounded-xl border px-4 py-3 text-sm"/>
            <button onClick={addManual} disabled={!text.trim()||options.some(o=>!o.trim())} className="w-full rounded-xl bg-sage py-3 font-bold text-white disabled:opacity-40">Add question</button>
          </div>
        ):(
          <div className="mt-5">
            <label className="mb-3 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#cfd5d0] px-4 py-3 text-sm font-bold text-[#68716d]">
              <Upload size={17}/> Import PDF, TXT, or JSON
              <input type="file" accept=".pdf,.txt,.json,application/pdf,text/plain,application/json" className="hidden" onChange={e => e.target.files?.[0] && importFile(e.target.files[0])}/>
            </label>
            <p className="mb-3 text-sm text-[#858b87]">Or paste JSON/TXT content. JSON needs question, answerOptions, and correctAnswer.</p>
            <textarea value={text} onChange={e=>setText(e.target.value)} placeholder={'[{\"question\":\"...\",\"answerOptions\":[\"A\",\"B\"],\"correctAnswer\":0}]'} className="min-h-48 w-full rounded-xl border px-4 py-3 font-mono text-sm"/>
            <button onClick={parseJson} className="mt-3 w-full rounded-xl bg-sage py-3 font-bold text-white">Import questions</button>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default App
