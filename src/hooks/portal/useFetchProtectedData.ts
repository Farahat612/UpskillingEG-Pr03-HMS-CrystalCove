/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'

export const useFetchProtectedData = <T>(
  endpoint: string,
  responseListName: string
) => {
  const [data, setData] = useState<T | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiProtected.get(`/portal/${endpoint}`)
        setData(response.data.data[responseListName])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, responseListName])

  return {
    data,
    loading,
  }
}
