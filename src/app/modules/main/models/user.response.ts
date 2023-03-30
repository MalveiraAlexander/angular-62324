export interface UserResponse {
  id: number
  userName: string
  email: string
  phone: string
  characteristics: any[]
  roles: any[]
  devices: Device[]
  person: Person
  createdAt: string
  updatedAt: string
  lastLogin: string
}

export interface Device {
  id: number
  name: string
  isApp: boolean
  publicIp: string
}

export interface Person {
  firstName: string
  lastName: string
  dniCuit: string
  picture: string
  country: string
  state: string
  city: string
  cp: string
  yearOfBirth: string
}
