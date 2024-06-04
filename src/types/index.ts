/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormData {
  email: string
  userName: string
  password: string
  confirmPassword: string
  phoneNumber: number
  country: string
  seed: string
  profileImage?: File
}

export interface Column {
  id: string
  label: string
  align?: 'right' | 'left' | 'center'
}

export interface User {
  [key: string]: any
  _id: string
  userName: string
  email: string
  phoneNumber: number
  country: string
  role: 'admin' | 'user'
  profileImage?: string
  verified: boolean
  createdAt: Date
  updatedAt: Date
}
