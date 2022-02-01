export interface User{
  id: string,
  firstName: string,
  lastName: string,
  password?: string,
  email: string,
  company: string,
  userRole?: string
  coachInformation?: CoachInformation | null
}

export interface CoachInformation {
  id?: string,
  coachXp?: number,
  introduction?: string,
  availability?: string,
  topics?: Topic[]
}

export interface  Topic {
  id: string,
  name: string
}
