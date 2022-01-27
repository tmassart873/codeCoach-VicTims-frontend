export interface Session {
  id: string,
  coacheeId: string,
  coachId: string,
  subject: string,
  date: string,
  time: string,
  location?: string,
  remarks: string,
  isValid: boolean,
}
