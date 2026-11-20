import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = path.join(root, 'question-bank/new_questions.md')
const outputPath = path.join(root, 'src/questions.ts')
const checkOnly = process.argv.includes('--check')

const categorySuffixes = [
  /(?:\s+)Memory and parallel design$/,
  /(?:\s+)OpenMP and hybrid programming$/,
  /(?:\s+)MapReduce and distributed storage$/,
  /(?:\s+)MPI$/,
  /(?:\s+)GPU and CUDA$/,
  /(?:\s+)Spark$/,
  /(?:\s+)PGAS and UPC$/,
  /(?:\s+)Basic parallel graph algorithms$/,
  /\s+HPC and Big Data\s+Practice questions$/,
]

function stripSourceFormatting(value) {
  let text = value.trim().replace(/\*\*$/, '').trim()
  for (const suffix of categorySuffixes) text = text.replace(suffix, '').trim()
  return text
}

function subjectFor(text) {
  const lower = text.toLowerCase()
  if (/cuda|warp|kernel|gpu/.test(lower)) return 'GPU and CUDA'
  if (/spark|rdd|accumulator|broadcast/.test(lower)) return 'Spark'
  if (/upc|thread.{0,30}shared/.test(lower)) return 'PGAS and UPC'
  if (/mapreduce|mapper|reducer|hdfs|namenode|datanode/.test(lower)) return 'MapReduce and distributed storage'
  if (/graph|vertex|dijkstra|spanning|floyd|shortest/.test(lower)) return 'Basic parallel graph algorithms'
  if (/cache|memory|decomposition|mpi|openmp|parallel/.test(lower)) return 'Memory and parallel design'
  return 'High Performance Computing'
}

function parseQuestionBank(markdown) {
  const questions = []
  let current
  for (const line of markdown.split(/\r?\n/)) {
    const questionMatch = line.match(/^\*\*(\d+)\.\*\*\s+\(([^)]+)\)\s+(.*)$/)
    if (questionMatch) {
      if (current) questions.push(current)
      current = {
        id: questionMatch[2],
        sourceId: questionMatch[2],
        text: questionMatch[3].trim(),
        options: [],
        correctId: '',
        correctMarkers: 0,
      }
      continue
    }

    if (!current) continue
    const optionMatch = line.match(/^\s*-\s*(✅\s*)?(?:\*\*)?([A-E])[.)]\s*(.*?)\s*$/)
    if (!optionMatch) continue

    const option = {
      id: optionMatch[2],
      text: stripSourceFormatting(optionMatch[3]),
    }
    current.options.push(option)
    if (optionMatch[1]) {
      current.correctId = option.id
      current.correctMarkers++
    }
  }
  if (current) questions.push(current)

  for (const question of questions) {
    const labels = question.options.map(option => option.id)
    const duplicateOptions = new Set(question.options.map(option => option.text)).size !== question.options.length
    if (question.options.length < 2 || labels.join(',') !== 'A,B,C,D,E' || question.correctMarkers !== 1 || duplicateOptions || question.options.some(option => !option.text)) {
      throw new Error(`${question.id} needs manual review: ${question.options.length} options; correct answer marker ${question.correctId || 'missing'}.`)
    }
  }
  if (new Set(questions.map(question => question.id)).size !== questions.length) {
    throw new Error('Question IDs are duplicated in the source file.')
  }
  return questions.map(question => {
    const answer = question.options.find(option => option.id === question.correctId)
    const { correctMarkers, ...data } = question
    return {
      ...data,
      explanation: `The correct answer is ${answer.id}: ${answer.text}. This choice matches the key concept described in the question.`,
      subject: subjectFor(question.text),
    }
  })
}

const source = await readFile(sourcePath, 'utf8')
const questions = parseQuestionBank(source)
const output = `import type { Question } from './types'\n\nexport const questions: Question[] = ${JSON.stringify(questions, null, 2)}\n`

if (checkOnly) {
  const generated = await readFile(outputPath, 'utf8')
  if (generated !== output) throw new Error('src/questions.ts differs from the original question source; run npm run questions:import.')
  console.log(`Validated ${questions.length} questions: all have the five original A–E options and one marked correct answer.`)
} else {
  await writeFile(outputPath, output)
  console.log(`Imported ${questions.length} questions from ${path.relative(root, sourcePath)}.`)
}
