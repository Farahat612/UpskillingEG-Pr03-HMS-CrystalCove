import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

type AuthLayoutProps = {
  children: React.ReactNode
  imageSrc: string
  imgTitle?: string
  slogan?: string
}

const AuthLayout = ({
  children,
  imageSrc,
  imgTitle,
  slogan,
}: AuthLayoutProps) => {
  return (
    <>
      <Grid
        component={'section'}
        container
        sx={{
          minHeight: '100vh',
          height: 'auto',
          p: 3,
          border: '2px solid red',
        }}
      >
        <Grid item xs={12} md={6} sx={{ height: { xs: '50%', md: 'inherit' } }}>
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
                p: 4,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                width: '100%',
              }}
            >
              {children}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: { xs: '50%', md: 'inherit' } }}
        >
          <Box
            sx={{
              width: '100%',
              minHeight: '50vh',
              height: '100%',
              borderRadius: '1rem',
              position: 'relative',
            }}
          >
            {/* Image */}
            <img
              src={imageSrc}
              alt='image'
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                borderRadius: 'inherit',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                borderRadius: 'inherit',
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
              }}
            />

            {/* Slogan and Title */}
            {imgTitle && slogan && (
              <Box
                sx={{
                  color: 'white',
                  position: 'absolute',
                  zIndex: 10,
                  bottom: '0',
                  left: '0',
                  padding: '2rem',
                }}
              >
                <Typography variant='h6' fontSize={30}>
                  {imgTitle}
                </Typography>
                <Typography variant='body1' fontSize={20}>
                  {slogan}
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AuthLayout
