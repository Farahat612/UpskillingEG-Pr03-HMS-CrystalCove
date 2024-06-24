import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { IconButton } from '@mui/material'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { useModalsContext } from '../../contexts/global/ModalsContext'

interface AddItemsModalProps {
  children: React.ReactNode
  title: string
}

const AddItemsModal = ({ children, title }: AddItemsModalProps) => {
  const { addModalOpened, setAddModalOpened } = useModalsContext()
  return (
    <>
      <Dialog
        open={addModalOpened}
        onClose={() => setAddModalOpened(false)}
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
          <Typography id='dialog-title' variant='h6' component={'div'}>
            {title}
          </Typography>
          <DialogActions>
            <IconButton aria-label='Close Dialog' color='error'  onClick={() => setAddModalOpened(false)}>
              <HighlightOffIcon />
            </IconButton>
          </DialogActions>
        </DialogTitle>

        <DialogContent id='dialog-description'> {children} </DialogContent>
      </Dialog>
    </>
  )
}

export default AddItemsModal
