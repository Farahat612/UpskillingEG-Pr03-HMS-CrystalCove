import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const AddItemsModal = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth='sm'
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography id='dialog-title' variant='h6'>
            {title}
          </Typography>
          <DialogActions>
            <HighlightOffIcon
              onClick={() => setOpen(false)}
              color='error'
              sx={{ cursor: 'pointer' }}
            />
          </DialogActions>
        </DialogTitle>

        <DialogContent id='dialog-description'> {children} </DialogContent>

        <DialogActions sx={{ px: 4, pt: 4, mb: 2 }}>
          <Button
            onClick={() => setOpen(false)}
            color='primary'
            variant='contained'
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddItemsModal
