import { Container, Typography } from '@mui/material'
import Breadcrumb from './Breadcrumb'
import { styled } from '@mui/system';

const TypographyHeaderName = styled(Typography)({
  ' @media (max-width: 767px)' : {
    fontSize: '2.3rem'
  },
  ' @media (max-width: 400px)' : {
    fontSize: '1.7rem'
  }
})

interface HeaderProps {
  headerName: string; 
  subtitleHeader: string; 
}

const Header: React.FC<HeaderProps> = ({headerName, subtitleHeader}) => {

  return (
    <>
      
      <Breadcrumb />
      <Container>
      <TypographyHeaderName
          mt={2}
          variant='h3'
          align='center'
          color={'#152C5B'}
        >
          {headerName}
        </TypographyHeaderName>

        <Typography
          variant='h6'
          align='center'
          color={'#B0B0B0'}
        >
          {subtitleHeader}
        </Typography>
      </Container>
    </>
  )
}

export default Header
