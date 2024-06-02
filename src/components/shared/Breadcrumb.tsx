import { Box, Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
  }
  const Location = useLocation()
  const pathnames = Location.pathname.split('/').filter((x) => x)
  return (
    <Box role='presentation' onClick={handleClick}>
      <Breadcrumbs
        aria-label='breadcrumb'
        sx={{ display: 'flex', alignContent: 'center' }}
      >
        <Link to='/'>
          <Typography
            variant='subtitle2'
            color='black'
            sx={{
              display: 'inline',
            }}
          >
            Home
          </Typography>
        </Link>
        {pathnames.map((name) => {
          return (
            <Link to={''}>
              <Typography
                variant='subtitle2'
                color='primary'
                sx={{
                  display: 'inline',
                }}
              >
                {name}
              </Typography>
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default Breadcrumb
