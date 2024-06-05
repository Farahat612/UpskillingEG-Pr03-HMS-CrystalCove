import Lottie from 'lottie-react'
import Loadingpage from '../../lotties/Loadingpage.json'
import { Box } from '@mui/material'

const LoadingPage = () => {
  return (
    <Box
      height={400}
      width={400}
      margin={'auto'}
      // display={'flex'}
      // justifyContent={'center'}
      // alignItems={'center'}
    >
      <Lottie
        animationData={Loadingpage}
        loop={true}
      />
    </Box>
  )
}

export default LoadingPage
