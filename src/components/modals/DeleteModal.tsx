import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material'
import deleteDataImg from '../../assets/images/delete-data.png'
import { useDeleteItem } from '../../hooks/admin'
import { LoadindButton } from '../shared'

interface DeleteModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  itemId: string
  endpoint: string
}

const DeleteModal = ({ open, setOpen, itemId, endpoint }: DeleteModalProps) => {
  const { deleteItem, loading } = useDeleteItem({ itemId, endpoint })

  const handleDeleteClick = async () => {
    await deleteItem()
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='sm'
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogActions>
          <HighlightOffIcon
            onClick={() => setOpen(false)}
            color='error'
            sx={{ cursor: 'pointer' }}
          />
        </DialogActions>

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <img src={deleteDataImg} alt='delete data' />
          <Typography id={'dialog-title'} variant='h6' fontSize={15}>
            Delete this data?
          </Typography>
          <Typography
            id={'dialog-description'}
            variant='caption'
            align='center'
          >
            Are you sure you want to delete this data? This action cannot be
            undone. if yes, click the delete button.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleDeleteClick}
            color='error'
            variant='contained'
            disabled={loading}
          >
            {loading ? <LoadindButton LoadingText='deleting' /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteModal
