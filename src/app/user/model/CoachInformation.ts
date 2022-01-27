import {Topic} from "./Topic";

export interface CoachInformation {
  id?: string,
  coachXp?: number,
  introduction?: string,
  availability?: string,
  topics?: Topic[]
}
