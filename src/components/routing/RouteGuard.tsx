import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'

const RouteGuard = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { auth } = useAuthContext()
  const { isAuthenticated, role } = auth
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  } else if (!allowedRoles.includes(role as string)) {
    return <Navigate to='/unauthorized' state={{ from: location }} replace />
  } else {
    return <Outlet />
  }
}

export default RouteGuard
