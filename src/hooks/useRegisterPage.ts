import {  toast } from "sonner"
import { FormData } from "../types"
import { apiPublic } from "../utils/api"

export const Register = async(props: FormData) => {
  try {
    const res = await apiPublic.post('/admin/users', props)
    toast.success(res.data.message)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast.error(error.response.data.message)
  }
}