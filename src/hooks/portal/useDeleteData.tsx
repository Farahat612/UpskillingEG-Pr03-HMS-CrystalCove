import { useState } from 'react'
import { apiProtected } from '../../utils/api'
import { toast } from 'sonner'

const useDeleteData = ({
  endpoint,
  successMSG,
}: {
  endpoint: string
  successMSG: string
}) => {
  const [refetch, setRefetch] =useState(0)
  const deleteData = async (item: { roomId: string }) => {
    try {
      await apiProtected.delete(`/portal/${endpoint}/${item.roomId}`, {
        data: item,
      })
      setRefetch(refetch + 1) 
      toast.success(successMSG || `Item added to ${endpoint} successfully`)
    } catch (error) {
      toast.error('Error remove item - Try again')
      console.error(error)
    }
    console.log(refetch)
  }

  return {
    deleteData,
    refetch
  }
}

export default useDeleteData
