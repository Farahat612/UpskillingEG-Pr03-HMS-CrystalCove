import { Container, Typography } from '@mui/material'
import Breadcrumb from './Breadcrumb'
import { styled } from '@mui/system'

const TypographyHeaderName = styled(Typography)({
  fontSize:
    'clamp(1.7rem, 1.0478260869565217rem + 2.6086956521739126vw, 2.3rem)',
})

interface HeaderProps {
  headerName: string
  subtitleHeader: string
}

const Header: React.FC<HeaderProps> = ({ headerName, subtitleHeader }) => {
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

        <Typography variant='h6' align='center' color={'#B0B0B0'}>
          {subtitleHeader}
        </Typography>
      </Container>
    </>
  )
}

export default Header
