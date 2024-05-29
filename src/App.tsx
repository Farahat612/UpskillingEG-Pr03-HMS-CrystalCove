import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from '../node_modules/react-router-dom/dist/index'

import {
  LoginPage,
  RegisterPage,
  ResetPassPage,
  ForgotPassPage,
} from './pages/1.Authentication'
import { Home, Rooms, AddRoom, Ads, Users, Bookings } from './pages'
import { CalledComponents, NotFound, RouteGuard } from './components/shared'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<RouteGuard />} errorElement={<NotFound />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='reset-password' element={<ResetPassPage />} />
        <Route path='forgot-password' element={<ForgotPassPage />} />
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path='add-room' element={<AddRoom />} />
        <Route path='ads' element={<Ads />} />
        <Route path='bookings' element={<Bookings />} />
        <Route index element={<CalledComponents />} />
      </Route>,
    ])
  )
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
