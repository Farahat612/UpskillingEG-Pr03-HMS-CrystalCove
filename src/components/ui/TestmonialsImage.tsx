import { Box } from '@mui/material'
import { TestmonialCurvedImage } from '../styled/CurvedImage.styled'

import TestmonialImg from '../../assets/images/testmonial.png'

const TestmonialsImage = () => {
  return (
    <Box width={'100%'}>
      <TestmonialCurvedImage src={TestmonialImg} alt='Testmonial Image' />
    </Box>
  )
}

export default TestmonialsImage
