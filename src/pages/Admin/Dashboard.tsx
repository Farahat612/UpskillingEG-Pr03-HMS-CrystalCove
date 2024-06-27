import { Box, Button, Grid, Skeleton, Stack, Typography } from '@mui/material'
import { AdminLayout } from '../../layouts'
import { CardTravel } from '@mui/icons-material'
import { DashboardBoxStyle } from '../../components/styled/Dashboard.styled'
import { Charts } from '../../components/ui'
import { useEffect, useState } from 'react'
import { apiProtected } from '../../utils/api'

export interface DataType {
  ads: number
  facilities: number
  rooms: number
  bookings: {
    pending: number
    completed: number
  }
  users: {
    admins: number
    user: number
  }
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<DataType | any>([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiProtected('/admin/dashboard')
        setData(response.data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])
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
            <Grid
              component={'div'}
              item
              md={3.5}
              sm={6}
              xs={12}
            >
              <DashboardBoxStyle>
                <Box component={'div'}>
                  <Typography
                    variant='h4'
                    component={'p'}
                  >
                    {loading ? (
                      <Skeleton
                        variant='text'
                        sx={{ bgcolor: 'grey.900' }}
                      />
                    ) : (
                      data.rooms
                    )}
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
            <Grid
              component={'div'}
              item
              md={3.5}
              sm={6}
              xs={12}
            >
              <DashboardBoxStyle display={'flex'}>
                <Box component={'div'}>
                  <Typography
                    variant='h4'
                    component={'p'}
                  >
                    {loading ? (
                      <Skeleton
                        variant='text'
                        sx={{ bgcolor: 'grey.900' }}
                      />
                    ) : (
                      data.facilities
                    )}
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
            <Grid
              component={'div'}
              item
              md={3.5}
              sm={12}
              xs={12}
            >
              <DashboardBoxStyle display={'flex'}>
                <Box component={'div'}>
                  <Typography
                    variant='h4'
                    component={'p'}
                  >
                    {loading ? (
                      <Skeleton
                        variant='text'
                        sx={{ bgcolor: 'grey.900' }}
                      />
                    ) : (
                      data.ads
                    )}
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
          <Charts chartsData={data} />
        </Stack>
      </AdminLayout>
    </>
  )
}

export default Dashboard
