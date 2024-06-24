import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Gauge, gaugeClasses } from '@mui/x-charts'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import { DataType } from '../../pages/Admin/Dashboard'

const size = {
  width: 400,
  height: 200,
}
const platter = ['#526BE8', '#A05ACE', '#FFA93A', '#FF2C38']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Charts = ({ chartsData }: DataType | any) => {
  const data = [
    { value: chartsData.bookings?.pending || 0, label: 'Pending' },
    { value: chartsData.bookings?.completed || 0, label: 'Completed' },
  ]

  const adminValue = chartsData?.users?.admin
  const userValue = chartsData?.users?.user

  const gaugeValue = (typeof userValue === 'number' && typeof adminValue === 'number') ? userValue - adminValue : 0
  
  const theme = useTheme()
  const inMobile = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Stack
      component={'div'}
      mt={10}
      direction={inMobile ? 'row' : 'column'}
      justifyContent={'space-around'}
      spacing={12}
    >
      <Box component={'div'}>
        <PieChart
          component={'PieChart'}
          colors={platter}
          series={[
            {
              arcLabel: (item) => `(${item.value})`,
              arcLabelMinAngle: 400,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
              borderRadius: 100,
            },
          }}
          {...(inMobile ? { ...size } : { width: 300, height: 150 })}
        />
      </Box>
      <Box
        width={inMobile ? 400 : '100%'}
        component={'div'}
      >
        <Paper
          elevation={1}
          component={'div'}
        >
          <Box
            component={'div'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Gauge
              component={'Gauge'}
              sx={{
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: 'primary.main',
                },
              }}
              width={200}
              height={150}
              value={gaugeValue}
              outerRadius='90%'
              text={'Users'}
            />
          </Box>
          <Box
            component={'div'}
            p={2}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Typography
              component={'span'}
              display={'flex'}
              alignItems={'center'}
            >
              <Typography
                component={'span'}
                sx={{
                  borderRadius: '100%',
                  bgcolor: 'primary.main',
                  width: 10,
                  height: 10,
                  mr: 2,
                }}
              ></Typography>
              User
            </Typography>
            <Typography component={'span'}>
              {userValue || 0}
            </Typography>
          </Box>
          <Box
            component={'div'}
            p={2}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Typography
              component={'span'}
              display={'flex'}
              alignItems={'center'}
            >
              <Typography
                component={'span'}
                sx={{
                  borderRadius: '100%',
                  bgcolor: 'primary.main',
                  width: 10,
                  height: 10,
                  mr: 2,
                }}
              ></Typography>
              Admin
            </Typography>
            <Typography component={'span'}>
              {adminValue || 0}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Stack>
  )
}
export default Charts
