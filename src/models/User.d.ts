export interface User {
  id: string
  firstname: string
  lastname: string
  email: string
  created_at: string
  updated_at: string
  phone: string
}

export type Role = "manager" | "teacher" | "student"