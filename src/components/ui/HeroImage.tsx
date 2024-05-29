import { Box } from '@mui/material'
import { HeroCurvedImage } from '../styled/CurvedImage.styled'

import HeroImg from '../../assets/images/hero.png'

const HeroImage = () => {
  return (
    <Box width={200} >
      <HeroCurvedImage src={HeroImg} alt='Hero Image' />
    </Box>
  )
}

export default HeroImage
