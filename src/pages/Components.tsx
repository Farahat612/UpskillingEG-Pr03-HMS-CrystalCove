import { Stack, Divider, Typography, Paper, Container } from '@mui/material'

import { HeroImage, TestmonialsData, TestmonialsImage } from '../components/ui'
import { StartBookingForm } from '../components/forms'
import { DeleteModal, AddItemsModal } from '../components/modals'

import Header from '../components/shared/Header'
import Hero from '../components/ui/DetailsPageHero'
import Navbar from '../components/shared/Navbar'

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



        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Typography variant='h4' gutterBottom>
            Details Page Elements
          </Typography>
          <Stack direction='column' spacing={4} sx={{ pt: 2 }}>
          <Container maxWidth="xl" sx={{margin: 'auto',}}>

            <Navbar />
            <Header />
            <Hero />
            </Container>
          </Stack>
        </Paper>
      </Stack>
    </>
  )
}

export default Components
