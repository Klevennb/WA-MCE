import { Entry } from "./types"

export type RootState = {
    entry: Entry[]
    user: User
}

export type EntryState = {
    name: string
}

export type User = {
      id: string
      username: string
      currentStreak: number // not used currently
      wordGoal: number,
      streakGoal: string,
      bio: string,
      createdAt: string
}