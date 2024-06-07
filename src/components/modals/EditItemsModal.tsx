import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { useModalsContext } from '../../contexts/global/ModalsContext'

interface EditItemsModalProps {
  children: React.ReactNode
  title: string
}

const EditItemsModal = ({ children, title }: EditItemsModalProps) => {
  const { editModalOpened, setEditModalOpened } = useModalsContext()
  return (
    <>
      <Dialog
        open={editModalOpened}
        onClose={() => setEditModalOpened(false)}
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
            <HighlightOffIcon
              onClick={() => setEditModalOpened(false)}
              color='error'
              sx={{ cursor: 'pointer' }}
            />
          </DialogActions>
        </DialogTitle>

        <DialogContent id='dialog-description'> {children} </DialogContent>
      </Dialog>
    </>
  )
}

export default EditItemsModal
