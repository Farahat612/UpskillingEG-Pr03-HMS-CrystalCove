import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import {
  createTheme,
  ThemeProvider,
  colors,
  CssBaseline,
  Box,
} from '@mui/material'
import { Toaster } from 'sonner'

import {
  LoginPage,
  RegisterPage,
  ResetPassPage,
  ForgotPassPage,
} from './pages/Authentication'
import {
  Dashboard,
  Rooms,
  AddRoom,
  Ads,
  Users,
  Bookings,
  Facilities,
} from './pages/Admin'
import { Favorites } from './pages/User'
import { Home, Explore, Components, RoomDetails } from './pages/Public'
import { RouteGuard, NotFound, UnAuthorized } from './components/routing'
import { LoadingPage } from './components/shared'
import { useAuthContext } from './contexts/global/AuthContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#203FC7',
    },
    secondary: {
      main: colors.orange[500],
    },
    textDark: {
      main: colors.grey[900],
    },
    textLight: {
      main: colors.grey[400],
    },
    pink: {
      main: colors.pink[500],
    },
    teal: {
      main: colors.teal[500],
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 5,
          fontSize: '0.9rem',
        },
      },
    },
  },
})

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements([
      <Route>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='explore' element={<Explore />} />
        <Route path='room-details/:id' element={<RoomDetails />} />
        <Route path='components' element={<Components />} />

        {/* Admin's Routes */}
        <Route path='admin' element={<RouteGuard allowedRoles={['admin']} />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='rooms' element={<Rooms />} />
          <Route path='ads' element={<Ads />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='facilities' element={<Facilities />} />
          <Route path='add-room' element={<AddRoom />} />
        </Route>

        {/* User's Routes */}
        <Route path='user' element={<RouteGuard allowedRoles={['user']} />}>
          <Route path='favorites' element={<Favorites />} />
        </Route>

        {/* Authentication Routes */}
        <Route path='login' element={<LoginPage mode='portal' />} />
        <Route path='register' element={<RegisterPage mode='portal' />} />
        <Route
          path='reset-password'
          element={<ResetPassPage mode='portal' />}
        />
        <Route
          path='forgot-password'
          element={<ForgotPassPage mode='portal' />}
        />
        <Route path='admin/login' element={<LoginPage mode='admin' />} />
        <Route path='admin/create' element={<RegisterPage mode='admin' />} />
        <Route
          path='admin/reset-password'
          element={<ResetPassPage mode='admin' />}
        />
        <Route
          path='admin/forgot-password'
          element={<ForgotPassPage mode='admin' />}
        />

        {/* Errors */}
        <Route path='unauthorized' element={<UnAuthorized />} />
        <Route path='*' element={<NotFound />} />
      </Route>,
    ])
  )

  const { loading } = useAuthContext()
  if (loading)
    return (
      <>
        <Box height={'100vh'} >
          <LoadingPage />
        </Box>
      </>
    )
  return (
    <>
      <Toaster richColors />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={route} />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
