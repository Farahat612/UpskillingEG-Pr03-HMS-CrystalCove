import { Button, Typography, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

type HeaderDashboardProps = {
  headerTitle?: string
  headerSubtitle?: string
  buttonText?: string
  buttonDestination?: string
}
const HeaderDashboard = ({
  headerTitle,
  headerSubtitle,
  buttonText,
  buttonDestination,
}: HeaderDashboardProps) => {
  const navigate = useNavigate()
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
      {buttonText && buttonDestination && (
        <Button
          sx={{ py: 1.2, px: 5, borderRadius: 3 }}
          variant='contained'
          color='primary'
          onClick={() => navigate(buttonDestination)}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  )
}

export default HeaderDashboard
