/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { apiProtected } from '../../utils/api'
import { useRefetchContext } from '../../contexts/global/RefetchContext'

export const useFetchPaginatedData = (
  endpoint: string,
  responseListName: string
) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10) - 1
  const size = parseInt(searchParams.get('size') || '10', 10)

  const {refetchCount} = useRefetchContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiProtected.get(endpoint, {
          params: { page: page + 1, size }, // API is 1 indexed and MUI Table Pagination is 0 indexed
        })
        setData(response.data.data[responseListName])
        setTotalCount(response.data.data.totalCount)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, page, responseListName, size, refetchCount])

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setSearchParams({ page: (newPage + 1).toString(), size: size.toString() })
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newSize = parseInt(event.target.value, 10)
    setSearchParams({ page: '1', size: newSize.toString() })
  }

  return {
    data,
    loading,
    totalCount,
    page,
    size,
    handleChangePage,
    handleChangeRowsPerPage,
  }
}
