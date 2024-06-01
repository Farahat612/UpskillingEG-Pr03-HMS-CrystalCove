import { Box, Breadcrumbs } from '@mui/material'
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
        <Link style={{ color: 'inherit' }} to='/'>
          Home
        </Link>
        {pathnames.map((name) => {
          return (
            <Link style={{ color: '#0d47a1' }} to={''}>
              {name}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default Breadcrumb
