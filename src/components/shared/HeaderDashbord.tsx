import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

type HeaderDashboardProps = {
  headerTitle?: string
  headerSubtitle?: string
  children?: React.ReactNode
}
const HeaderDashboard = ({
  headerTitle,
  headerSubtitle,
  children,
}: HeaderDashboardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack spacing={0}>
        <Typography variant='h6' fontSize={25}>
          {headerTitle}
        </Typography>
        <Typography variant='h5' fontSize={15}>
          {headerSubtitle}
        </Typography>
      </Stack>
      {children}
    </Box>
  )
}

export default HeaderDashboard
