import { Container, Typography, Link, Breadcrumbs, Box } from '@mui/material'

const Header = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }
  return (
    <>
      <Box
        role='presentation'
        onClick={handleClick}
      >
        <Breadcrumbs
          aria-label='breadcrumb'
          sx={{ display: 'flex', alignContent: 'center'}}
        >
          <Link
            underline='hover'
            color='inherit'
            href='/'
          >
            Home
          </Link>
          <Link
            underline='hover'
            color='#0d47a1'
            href='/'
          >
            Room Details
          </Link>
        </Breadcrumbs>
      </Box>
      <Container>
        <Typography
          mt={0}
          variant='h3'
          align='center'
          color={'#0d47a1'}
        >
          Village Angga
        </Typography>

        <Typography
          variant='h6'
          align='center'
          color={'#bdbdbd'}
        >
          Bogor, Indonesia
        </Typography>
      </Container>
    </>
  )
}

export default Header
