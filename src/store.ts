import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type LearningMode = 'visual' | 'focus' | 'audio' | 'simple' | 'high-contrast'
export type TextSize = 'normal' | 'large' | 'extra-large'

export interface LessonProgress {
  completed: boolean
  bookmarked: boolean
  lastAccessed?: number
}

interface AppState {
  learningMode: LearningMode
  textSize: TextSize
  spacingRelaxed: boolean
  audioEnabled: boolean
  userName: string
  onboardingComplete: boolean
  lessonProgress: Record<string, LessonProgress>

  setLearningMode: (mode: LearningMode) => void
  setTextSize: (size: TextSize) => void
  setSpacingRelaxed: (v: boolean) => void
  setAudioEnabled: (v: boolean) => void
  setUserName: (name: string) => void
  setOnboardingComplete: (v: boolean) => void
  toggleLessonComplete: (id: string) => void
  toggleBookmark: (id: string) => void
  accessLesson: (id: string) => void
  resetPreferences: () => void
}

const defaultState = {
  learningMode: 'visual' as LearningMode,
  textSize: 'normal' as TextSize,
  spacingRelaxed: false,
  audioEnabled: false,
  userName: '',
  onboardingComplete: false,
  lessonProgress: {} as Record<string, LessonProgress>,
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      ...defaultState,

      setLearningMode: (mode) => set({ learningMode: mode }),
      setTextSize: (size) => set({ textSize: size }),
      setSpacingRelaxed: (v) => set({ spacingRelaxed: v }),
      setAudioEnabled: (v) => set({ audioEnabled: v }),
      setUserName: (name) => set({ userName: name }),
      setOnboardingComplete: (v) => set({ onboardingComplete: v }),

      toggleLessonComplete: (id) =>
        set((s) => ({
          lessonProgress: {
            ...s.lessonProgress,
            [id]: {
              ...s.lessonProgress[id],
              completed: !s.lessonProgress[id]?.completed,
              lastAccessed: Date.now(),
            },
          },
        })),

      toggleBookmark: (id) =>
        set((s) => ({
          lessonProgress: {
            ...s.lessonProgress,
            [id]: {
              ...s.lessonProgress[id],
              bookmarked: !s.lessonProgress[id]?.bookmarked,
            },
          },
        })),

      accessLesson: (id) =>
        set((s) => ({
          lessonProgress: {
            ...s.lessonProgress,
            [id]: {
              ...s.lessonProgress[id],
              completed: s.lessonProgress[id]?.completed ?? false,
              bookmarked: s.lessonProgress[id]?.bookmarked ?? false,
              lastAccessed: Date.now(),
            },
          },
        })),

      resetPreferences: () =>
        set({
          learningMode: defaultState.learningMode,
          textSize: defaultState.textSize,
          spacingRelaxed: defaultState.spacingRelaxed,
          audioEnabled: defaultState.audioEnabled,
        }),
    }),
    { name: 'temanakses-storage' }
  )
)
