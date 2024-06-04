import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

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
        }}
      >
        <Typography variant='h6' fontSize={25} gutterBottom>
          {heading}
        </Typography>

        {linkText && linkDestination &&  (
          <Typography variant='h6' fontSize={15} marginBottom={8}>
            {subtitle}{' '}
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
          </Typography>
        )}

        {children}
      </Box>
    </>
  )
}

export default AuthForm
