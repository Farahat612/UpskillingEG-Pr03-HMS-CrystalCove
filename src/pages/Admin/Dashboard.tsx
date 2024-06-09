import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { AdminLayout } from '../../layouts'
import { CardTravel } from '@mui/icons-material'
import { DashboardBoxStyle } from '../../components/styled/Dashboard.styled'
import { Charts } from '../../components/ui'

const Dashboard = () => {
  return (
    <>
      <AdminLayout>
        <Stack component={'div'}>
          <Grid
            component={'div'}
            container
            justifyContent={'center'}
            spacing={4}
          >
            <Grid component={'div'} item md={3.5} sm={6} xs={12}>
              <DashboardBoxStyle>
                <Box component={'div'}>
                  <Typography variant='h4' component={'p'}>
                    100
                  </Typography>
                  <Typography
                    component={'p'}
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
            <Grid component={'div'} item md={3.5} sm={6} xs={12}>
              <DashboardBoxStyle display={'flex'}>
                <Box component={'div'}>
                  <Typography variant='h4' component={'p'}>
                    160
                  </Typography>
                  <Typography
                    component={'p'}
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
            <Grid component={'div'} item md={3.5} sm={12} xs={12}>
              <DashboardBoxStyle display={'flex'}>
                <Box component={'div'}>
                  <Typography variant='h4' component={'p'}>
                    20
                  </Typography>
                  <Typography
                    component={'p'}
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
