import { Container, Typography } from '@mui/material'
import Breadcrumb from './Breadcrumb'

const Header = () => {

  return (
    <>
      
      <Breadcrumb />
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
