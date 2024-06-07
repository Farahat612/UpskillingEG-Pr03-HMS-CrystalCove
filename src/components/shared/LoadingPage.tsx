import Lottie from 'lottie-react'
import Loadingpage from '../../lotties/Loadingpage.json'
import { Box, Typography } from '@mui/material'

const LoadingPage = ({ loadingText }: { loadingText?: string }) => {
  return (
    <Box
      height={'100%'}
      width={'100%'}
      margin={'auto'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={0.5}
    >
      <Lottie animationData={Loadingpage} loop={true} />
      {loadingText && <Typography variant={'h6'}>{loadingText}</Typography>}
    </Box>
  )
}

export default LoadingPage
