import { Container, Typography, Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

type AuthLayoutProps = {
  children: React.ReactNode
  imageSrc: string
}

const AuthLayout = ({ children, imageSrc }: AuthLayoutProps) => {
  return (
    <>
      <Box component='section' sx={{ bgcolor: '#f5f5f5' }}>
        <Container
          className='AuthContainer'
          sx={{ py: 3, height: '100vh', bgcolor: '#fff' }}
          maxWidth='lg'
        >
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={12} md={6} sx={{ height: '100%' }}>
              <Box height='100%'>
                <Typography variant='h5'>
                  <Link to='/'>
                    <img src={Logo} alt='logo' width='100' />
                  </Link>
                </Typography>
                <Box sx={{ m: 5 }}>{children}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ height: '100%' }}>
              <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <img
                  src={imageSrc}
                  alt='image'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default AuthLayout
