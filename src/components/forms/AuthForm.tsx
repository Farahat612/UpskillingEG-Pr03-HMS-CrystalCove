import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type AuthFormProps = {
  children: React.ReactNode
  heading: string
  subtitle: string
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
      <Box sx={{ width: 'inherit' }}>
        <Typography variant='h6' fontSize={25} gutterBottom>
          {heading}
        </Typography>

        <Typography variant='body1'>
          {subtitle}{' '}
          {linkText && linkDestination && (
            <Link to={linkDestination} style={{ color: 'red' }}>
              {linkText}
            </Link>
          )}
        </Typography>

        {children}
      </Box>
    </>
  )
}

export default AuthForm
