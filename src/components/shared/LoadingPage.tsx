import { Box, Skeleton } from '@mui/material'

const LoadingPage = () => {
  return (
    <Box width={'100'}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  )
}

export default LoadingPage
