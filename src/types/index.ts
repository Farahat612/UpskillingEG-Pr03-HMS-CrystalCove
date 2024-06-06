/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormData {
  email: string
  userName: string
  password: string
  oldPassword: string
  newPassword: string
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

export interface CreatedBy {
  _id: string
  userName: string
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
  createdAt: string
  updatedAt: string
}

export interface Room {
  [Key: string]: any
  _id: string
  roomNumber: string
  price: number
  capacity: number
  discount: number
  facilities: RoomFacility[]
  createdBy: CreatedBy
  images: string[]
  createdAt: string
  updatedAt: string
}
export interface RoomFacility {
  _id: string
  name: string
}

export interface Ad {
  [Key: string]: any
  _id: string
  isActive: boolean | string
  room: Room
  roomNumber: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface Facility {
  [Key: string]: any
  _id: string
  name: string
  createdBy: CreatedBy
  owner: string
  createdAt: string
  updatedAt: string
}

export interface Booking {
  [Key: string]: any
  _id: string
  startDate: string
  endDate: string
  totalPrice: number
  user: CreatedBy
  roomNumber: string
  room: BookingRoom
  status: string
  createdAt: string
  updatedAt: string
}

export interface BookingRoom {
  _id: string
  roomNumber: string
}
