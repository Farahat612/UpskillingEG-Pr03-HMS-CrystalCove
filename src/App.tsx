import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import {
  LoginPage,
  RegisterPage,
  ResetPassPage,
  ForgotPassPage,
} from './pages/1.Authentication'
import { Home, Rooms, AddRoom, Ads, Users, Bookings, Components } from './pages'
import { NotFound, RouteGuard } from './components/shared'
import { Toaster } from 'sonner'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<RouteGuard />} errorElement={<NotFound />}>
        <Route path='login' element={<LoginPage userType='portal' />} />
        <Route path='register' element={<RegisterPage userType='portal' />} />
        <Route
          path='reset-password'
          element={<ResetPassPage userType='portal' />}
        />
        <Route
          path='forgot-password'
          element={<ForgotPassPage userType='portal' />}
        />
        <Route path='admin/login' element={<LoginPage userType='admin' />} />
        <Route
          path='admin/create'
          element={<RegisterPage userType='admin' />}
        />
        <Route
          path='admin/reset-password'
          element={<ResetPassPage userType='admin' />}
        />
        <Route
          path='admin/forgot-password'
          element={<ForgotPassPage userType='admin' />}
        />
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path='add-room' element={<AddRoom />} />
        <Route path='ads' element={<Ads />} />
        <Route path='bookings' element={<Bookings />} />
        <Route index element={<Components />} />
      </Route>,
    ])
  )
  return (
    <>
      <Toaster />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={route} />
      </LocalizationProvider>
    </>
  )
}

export default App
