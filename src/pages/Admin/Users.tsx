import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'

import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'
import { User } from '../../types'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProtected.get('/admin/users', {
          params: { page: 1, size: 10 },
        })

        setUsers(response.data.data.users)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const columns = [
    { id: 'userName', label: 'UserName' },
    { id: 'email', label: 'Email' },
    { id: 'phoneNumber', label: 'Phone Number' },
    { id: 'country', label: 'Country' },
    { id: 'role', label: 'Role' },
  ]

  let rows: User[] = []
  if (!loading && users) {
    rows = users.map((user: User) => ({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      country: user.country,
      role: user.role,
      verified: user.verified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }))
  }

  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Users'
        headerSubtitle='Check Details of All users in the system.'
        buttonText='Add New User'
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <CustomTable columns={columns} rows={rows} />
      )}
    </AdminLayout>
  )
}

export default Users
