import { Box, Stack } from '@mui/material'
import { TestmonialsData, TestmonialsImage } from '../ui'

const Testmonial = () => {
  return (
    <>
      <Stack direction={'row'} spacing={5}>
        <TestmonialsImage />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TestmonialsData />
        </Box>
      </Stack>
    </>
  )
}

export default Testmonial
