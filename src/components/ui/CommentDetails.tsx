import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import useAddComments from '../../hooks/portal/useAddComments'
import { LoadindButton } from '../shared'
import { useParams } from 'react-router-dom'

const CommentDetails = () => {
  const { id } = useParams()
  const theme = useTheme()
  const inMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useAddComments(id, 'comments')

  return (
    <Box sx={inMobile ? { pl: 0 } : { pl: 5 }}>
      <Stack
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          component={'h6'}
          variant='h6'
          color='primary.dark'
          pl={1}
        >
          Add Your Comment
        </Typography>

        <TextField
          multiline
          variant='outlined'
          rows={8}
          sx={{ width: '100%', mt: inMobile ? 2 : '12%' }}
          {...register('comment', { required: 'Add comment' })}
          error={!!errors.comment}
          helperText={errors.comment ? errors.comment.message : ''}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ width: '100%', mt: 2 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadindButton LoadingText='Adding...' /> : 'Add'}
        </Button>
      </Stack>
    </Box>
  )
}

export default CommentDetails
