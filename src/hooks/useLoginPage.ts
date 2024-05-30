import { apiPublic } from '../utils/api'
import { FormData } from '../types'
import { toast } from 'sonner'
export const Login = async (props: FormData) => {
  try {
    const res = await apiPublic.post('/admin/users/login', props)
    localStorage.setItem('token', res.data.data.token)
    console.log(res.data.data)
    toast.success(res.data.message)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any ) {
    console.log(error)
    toast.error(error.response.data.message)
  }
}
