import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumb from '../shared/Breadcrumb'

type AuthFormProps = {
  children: React.ReactNode
  heading: string
  subtitle?: string
  linkText?: string
  linkDestination?: string
}

const AuthForm = ({
  children,
  heading,
  subtitle,
  linkText,
  linkDestination,
}: AuthFormProps) => {
  return (
    <>
      <Box
        sx={{
          width: 'inherit',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box marginBottom={'auto'}>
          <Breadcrumb />
        </Box>

        <Box
          sx={{
            width: 'inherit',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6' fontSize={25} gutterBottom>
            {heading}
          </Typography>

          <Typography variant='h6' fontSize={15}>
            {subtitle}{' '}
            {linkText && linkDestination && (
              <Link to={linkDestination}>
                <Typography
                  variant='subtitle2'
                  color='error'
                  sx={{
                    display: 'inline',
                  }}
                >
                  {linkText}
                </Typography>
              </Link>
            )}
          </Typography>

          {children}
        </Box>
      </Box>
    </>
  )
}

export default AuthForm
