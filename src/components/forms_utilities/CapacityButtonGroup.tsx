import {
  Button,
  ButtonGroup
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const CapacityButtonGroup = () => {
  return (
    <ButtonGroup
      aria-label='Capacity button group'
      variant='text'
      sx={{ width: '100%', justifyContent: 'space-between' }}
    >
      <Button
        aria-label='Decrease capacity'
        sx={{
          backgroundColor: 'error.main',
          color: 'white',
          border: 'none !important',
          '&:hover': {
            backgroundColor: 'error.dark',
          },
        }}
      >
        <RemoveIcon />
      </Button>
      <Button
        fullWidth
        sx={{
          backgroundColor: 'rgba(245, 246, 248, 1)',
          color: 'black',
          border: 'none !important',
          textTransform: 'none',
        }}
      >
        2 persons
      </Button>
      <Button
        aria-label='Decrease capacity'
        sx={{
          backgroundColor: 'success.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'success.dark',
          },
        }}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  )
}

export default CapacityButtonGroup
