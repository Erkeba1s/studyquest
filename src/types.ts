export type Subject = 'High Performance Computing' | 'Memory and parallel design' | 'MapReduce and distributed storage' | 'GPU and CUDA' | 'Spark' | 'PGAS and UPC' | 'Basic parallel graph algorithms' | 'Practice questions' | 'Other'
export type Mastery = 'New' | 'Learning' | 'Needs Review' | 'Mastered'

export interface Option {
  id: string
  text: string
}

export interface Question {
  id: string
  subject: Subject
  text: string
  options: Option[]
  correctId: string
  explanation: string
  sourceId: string
}

export interface QuestionProgress {
  attempts: number
  wrong: number
  correct: number
  consecutiveCorrect: number
  mastery: Mastery
  lastSeen: number
  lastWrong: boolean
}

export interface QuizResult {
  id: string
  date: number
  mode: 'practice' | 'exam' | 'mistakes'
  subject: string
  correct: number
  total: number
  accuracy: number
}
