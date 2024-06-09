import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { AdminLayout } from '../../layouts'
import { CardTravel } from '@mui/icons-material'
import { DashboardBoxStyle } from '../../components/styled/Dashboard.styled'
import { Charts } from '../../components/ui'

const Dashboard = () => {
  return (
    <>
      <AdminLayout>
        <Stack>
          <Grid
            container
            justifyContent={'center'}
            spacing={4}
          >
            <Grid
              item
              md={3.5}
              sm={6}
              xs={12}
            >
              <DashboardBoxStyle>
                <Box>
                  <Typography variant='h4'>100</Typography>
                  <Typography
                    variant='h5'
                    color={'textLight.main'}
                  >
                    Rooms
                  </Typography>
                </Box>
                <Button>
                  <CardTravel fontSize={'large'} />
                </Button>
              </DashboardBoxStyle>
            </Grid>
            <Grid
              item
              md={3.5}
              sm={6}
              xs={12}
            >
              <DashboardBoxStyle display={'flex'}>
                <Box>
                  <Typography variant='h4'>160</Typography>
                  <Typography
                    variant='h5'
                    color={'textLight.main'}
                  >
                    Facilities
                  </Typography>
                </Box>
                <Button>
                  <CardTravel fontSize={'large'} />
                </Button>
              </DashboardBoxStyle>
            </Grid>
            <Grid
              item
              md={3.5}
              sm={12}
              xs={12}
            >
              <DashboardBoxStyle display={'flex'}>
                <Box>
                  <Typography variant='h4'>20</Typography>
                  <Typography
                    variant='h5'
                    color={'textLight.main'}
                  >
                    Ads
                  </Typography>
                </Box>
                <Button>
                  <CardTravel fontSize={'large'} />
                </Button>
              </DashboardBoxStyle>
            </Grid>
          </Grid>
          {/* Charts */}
          <Charts />
        </Stack>
      </AdminLayout>
    </>
  )
}

export default Dashboard
