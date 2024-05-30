import { toast } from "sonner"
import { FormData } from "../types"
import { apiPublic } from "../utils/api"



export const ResetPass = async(props: FormData, callback:(nav: boolean) => void) => {
  let nav = false
  try {
    const res = await apiPublic.post('/admin/users/reset-password', props)
    toast.success(res.data.message)
    nav = true
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast.success(error.response.data.message)
    nav = false
  }
  callback(nav)
}