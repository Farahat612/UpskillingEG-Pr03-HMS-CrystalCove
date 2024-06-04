import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import {CustomTable} from '../../components/ui'

const Users = () => {
  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Users'
        headerSubtitle='Check Details of All users in the system.'
        buttonText='Add New User'
      />

      <CustomTable />
    </AdminLayout>
  )
}

export default Users
