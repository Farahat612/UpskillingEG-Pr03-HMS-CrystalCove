import { Box, useMediaQuery, useTheme } from '@mui/material'
import { HeroCurvedImage } from '../styled/CurvedImage.styled'

import HeroImg from '../../assets/images/hero.png'

const HeroImage = () => {
  const theme = useTheme()
  const isMedia = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box  maxWidth={'65%'} ml={isMedia ? 'auto' : '0'}>
      <HeroCurvedImage src={HeroImg} alt='Hero Image' />
    </Box>
  )
}

export default HeroImage
