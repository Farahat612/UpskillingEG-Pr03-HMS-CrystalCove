import {
  Badge,
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import { Testmonial } from '../../components/combined'
import { StartBookingForm } from '../../components/forms'
import { AddItemsModal } from '../../components/modals'
import { Footer, Header, Navbar } from '../../components/shared'
import {
  DetailsHero,
  HeroImage,
  TestmonialsData,
  TestmonialsImage,
} from '../../components/ui'
import ADSRoom from '../../components/ui/ADSRoomCard'
import LargeRoom from '../../components/ui/LargeRoom'
import { ForgotPassPage } from './../Authentication'

const Components = () => {
  return (
    <>
      <Stack sx={{ p: 2 }}>
        {/* Individual Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={'saje - farahat'}
            color='success'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Typography variant='h4' gutterBottom>
              Individual Elements
            </Typography>
          </Badge>
          <Stack direction='row' spacing={8} sx={{ pt: 2, mt: 5 }}>
            <HeroImage />
            <TestmonialsImage />
            <StartBookingForm />
            <TestmonialsData />
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Badge
            badgeContent={'sherif'}
            color='success'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Typography variant='h4' gutterBottom>
              Modals
            </Typography>
          </Badge>
          <Stack direction='row' spacing={8} sx={{ mt: 5 }}>
            <AddItemsModal title='Add Items'>
              <Typography variant='body1' gutterBottom>
                Add your items here
              </Typography>
            </AddItemsModal>
          </Stack>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Combined Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={'farahat'}
            color='success'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Typography variant='h4' gutterBottom>
              Combined Elements
            </Typography>
          </Badge>

          <Stack direction={'column'}>
            {/* Testmonail */}
            <Stack direction='row' spacing={8} sx={{ p: 2, mt: 5 }}>
              <Badge
                badgeContent='Tetmonial'
                color='secondary'
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Paper elevation={3} sx={{ p: 5 }}>
                  <Testmonial />
                </Paper>
              </Badge>
            </Stack>
          </Stack>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Authentication Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={'Forgor-Password - asmaa'}
            color='success'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Typography variant='h4' gutterBottom>
              Authentication Layout Example
            </Typography>
          </Badge>

          <Box>
            <ForgotPassPage mode='portal' />
          </Box>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Details Page Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={'abdalrahman'}
            color='success'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Typography variant='h4' gutterBottom>
              Details Page Elements
            </Typography>
          </Badge>

          <Stack direction='column' spacing={0} sx={{ pt: 2 }}>
            <Container maxWidth='xl' sx={{ margin: 'auto' }}>
              <Navbar />

              <Header
                headerName={'Village Angga'}
                subtitleHeader={'Bogor, Indonesia'}
              />
              <DetailsHero />
            </Container>
            <Footer />
          </Stack>
        </Paper>

        {/* ADS Room Card and Large Room */}
        <Paper elevation={3}>
          <Container maxWidth='xl'>
            <Stack direction='column' spacing={2} sx={{ p: 2 }}>
              <ADSRoom />
              <LargeRoom />
            </Stack>
          </Container>
        </Paper>
      </Stack>
    </>
  )
}

export default Components
