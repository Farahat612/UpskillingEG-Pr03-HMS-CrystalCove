import HighlightOffIcon from '@mui/icons-material/HighlightOff'
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

const AddItemsModal = ({
  children,
  title,
}: AddItemsModalProps) => {

  const {addModalOpened, setAddModalOpened} = useModalsContext()
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
            <HighlightOffIcon
              onClick={() => setAddModalOpened(false)}
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

export default AddItemsModal
