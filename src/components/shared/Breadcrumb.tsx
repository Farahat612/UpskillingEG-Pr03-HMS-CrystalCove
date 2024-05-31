import { Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
  }
  const Location = useLocation()
  const pathnames = Location.pathname.split('/').filter((x) => x)
  console.log(pathnames)
  return (
    <Box
      role='presentation'
      onClick={handleClick}
    >
      <Breadcrumbs
        aria-label='breadcrumb'
        sx={{ display: 'flex', alignContent: 'center' }}
      >
        <Link
          underline='hover'
          color='inherit'
          href='/'
        >
          Home
        </Link>
        {pathnames.map((name) => {
          return (
            <Link
              underline='hover'
              color='#0d47a1'
              href='/'
            >
              {name}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default Breadcrumb
