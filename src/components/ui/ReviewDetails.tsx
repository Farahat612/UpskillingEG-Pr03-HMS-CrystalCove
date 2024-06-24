import { Box, Grid, Paper, useMediaQuery, useTheme } from '@mui/material'
import { CommentDetails } from '.'
import { useAuthContext } from '../../contexts/global/AuthContext'
import RatingDetails from './RatingDetails'

const ReviewDetails = () => {
  // check if user is logged in
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated
  // for mobile media
  const theme = useTheme()
  const inMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {isLogin ? (
        <Box mt={10}>
          <Paper
            elevation={2}
            sx={{ borderRadius: 3 }}
          >
            <Grid
              container
              spacing={2}
              direction={inMobile ? 'row' : 'row'}
              p={4}
            >
              {/* border between rate in pc media or border bottom in mobile media */}
              <RatingDetails />
              <Grid
                item
                xs={12}
                md={6}
              >
                <CommentDetails />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ) : (
        ''
      )}
    </>
  )
}

export default ReviewDetails
