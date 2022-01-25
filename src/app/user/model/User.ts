import {CoachInformation} from "./CoachInformation";

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
