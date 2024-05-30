import { Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

type AuthLayoutProps = {
  children: React.ReactNode
  imageSrc: string
}

const AuthLayout = ({ children, imageSrc }: AuthLayoutProps) => {
  return (
    <>
      <Grid component={'section'} container sx={{ height: '100vh', p: 3 }}>
        <Grid item xs={12} md={6} sx={{ height: { xs: '50%', md: '100%' } }}>
          <Box
            height='100%'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          >
            <Link to='/'>
              <img src={Logo} alt='logo' width='150' />
            </Link>

            <Box
              sx={{
                p: 6,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                maxWidth: '100%',
              }}
            >
              {children}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: { xs: '50%', md: '100%' } }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <img
              src={imageSrc}
              alt='image'
              style={{
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                borderRadius: '1rem',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AuthLayout
