import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { createTheme, ThemeProvider, colors, CssBaseline } from '@mui/material'

import {
  LoginPage,
  RegisterPage,
  ResetPassPage,
  ForgotPassPage,
} from './pages/1.Authentication'
import { Home, Rooms, AddRoom, Ads, Users, Bookings, Components, Details } from './pages'
import { NotFound, RouteGuard } from './components/shared'
import { Toaster } from 'sonner'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.indigo[800],
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
      <Route path='/' element={<RouteGuard />} errorElement={<NotFound />}>
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
        <Route
          path='admin/create'
          element={<RegisterPage mode='admin' />}
        />
        <Route
          path='admin/reset-password'
          element={<ResetPassPage mode='admin' />}
        />
        <Route
          path='admin/forgot-password'
          element={<ForgotPassPage mode='admin' />}
        />
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path='add-room' element={<AddRoom />} />
        <Route path='ads' element={<Ads />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='details' element={<Details />} />
        <Route index element={<Components />} />
      </Route>,
    ])
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
