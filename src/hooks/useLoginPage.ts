import { apiPublic } from '../utils/api'
import { LoginData } from '../types'
import { toast } from 'sonner'
export const Login = async (props: LoginData) => {
  try {
    const res = await apiPublic.post('/admin/users/login', props)
    localStorage.setItem('token', res.data.data.token)
    console.log(res.data.data)
    toast.success(res.data.message)
  } catch (error) {
    console.log(error)
  }
}
