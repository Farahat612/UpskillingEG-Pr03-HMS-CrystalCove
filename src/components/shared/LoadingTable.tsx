import { Skeleton, Box } from '@mui/material'


const LoadingTable = () => {
  const skeletons: JSX.Element[] = []
  for (let i = 0; i <= 10; i++) {
    skeletons.push(
      <Skeleton
        animation='wave'
        height={50}
        key={i}
      />
    )
  }
  return (
    <Box>
      <Skeleton
        animation='wave'
        height={80}
        variant='rounded'
      />
      {skeletons}
    </Box>
  )
}

export default LoadingTable
