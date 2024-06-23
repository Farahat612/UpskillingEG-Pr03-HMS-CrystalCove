import { apiPublic } from '../../utils/api'
import { useEffect, useState } from 'react'
import { Room } from '../../types'

const useFetchDetails = (endpoint: string, responseListName: string) => {
  const [data, setData] = useState<Room>([])
  console.log(data)
  const [loadingDone, setLoadingDone] = useState<boolean>(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiPublic.get(`/portal/${endpoint}`)
        setData(response.data.data[responseListName])

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error.response)
      } finally {
        setLoadingDone(false)
      }
    }
    getData()
  }, [endpoint, responseListName])
  return {
    data,
    loadingDone,
  }
}

export default useFetchDetails
