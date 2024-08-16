import { Button, ButtonGroup } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface CapacityButtonGroupProps {
  capacity: number
  setCapacity: (capacity: number) => void
}

const CapacityButtonGroup = ({
  capacity,
  setCapacity,
}: CapacityButtonGroupProps) => {
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
        onClick={() => setCapacity(capacity - 1)}
        disabled={capacity === 1}
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
        {capacity} persons
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
        onClick={() => setCapacity(capacity + 1)}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  )
}

export default CapacityButtonGroup
