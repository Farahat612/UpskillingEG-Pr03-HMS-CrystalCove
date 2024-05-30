import { Stack, Divider, Typography, Paper } from '@mui/material'

import { HeroImage, TestmonialsData, TestmonialsImage } from '../components/ui'
import { StartBookingForm } from '../components/forms'
import { DeleteModal, AddItemsModal } from '../components/modals'

const Components = () => {
  return (
    <>
      <Stack>
        <Divider />
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Typography variant='h4' gutterBottom>
            Individual Elements
          </Typography>
          <Stack direction='row' spacing={8} sx={{ pt: 2 }}>
            <HeroImage />
            <TestmonialsImage />
            <StartBookingForm />
            <TestmonialsData />
          </Stack>

          <Divider sx={{ pt: 4 }} />
          <Typography variant='h4' gutterBottom sx={{ pt: 4 }}>
            Modals
          </Typography>
          <Stack direction='row' spacing={8} sx={{ pt: 2 }}>
            <DeleteModal />
            <AddItemsModal title='Add Items'>
              <Typography variant='body1' gutterBottom>
                Add your items here
              </Typography>
            </AddItemsModal>
          </Stack>

          <Typography variant='h4' gutterBottom sx={{ pt: 6 }}>
            Combined Elements
          </Typography>
        </Paper>
        <Divider />

        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Typography variant='h4' gutterBottom>
            Authentication Elements
          </Typography>
        </Paper>
      </Stack>
    </>
  )
}

export default Components
