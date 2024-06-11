/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { apiProtected } from '../../utils/api'

const useFetchAllData = (endpoint: string, responseListName: string) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiProtected.get(endpoint, {
          params: { page: 1, size: 1000 },
        })
        setData(response.data.data[responseListName])
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, responseListName])
  return { data, loading }
}

export default useFetchAllData
