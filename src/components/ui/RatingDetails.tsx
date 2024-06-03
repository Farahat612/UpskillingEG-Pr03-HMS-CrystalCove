import {
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'


const RatingDetails = () => {
  // For star rating
  const [value, setValue] = React.useState<number | null>(2)
  // for mobile media
  const theme = useTheme()
  const inMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box mt={10}>
      <Paper
        elevation={2}
        sx={{ borderRadius: 3 }}
      >
        <Grid
          container
          spacing={2}
          direction={inMobile ? 'column' : 'row'}
          p={4}
        >
          <Grid
            item
            xs={12}
            md={6}
            // border between rate in pc media or border bottom in mobile media 
            sx={
              inMobile
                ? {
                    borderBottom: '1px solid',
                    borderColor: 'primary.main',
                    pb: 4,
                    mb: 2,
                  }
                : {
                    borderRight: '1px solid',
                    borderColor: 'primary.main',
                    pr: 5,
                  }
            }
          >
            <Typography
              variant='h6'
              color='primary.dark'
              pl={1}
            >
              Rate
            </Typography>
            <Typography mt={1}>
              <Rating
                name='simple-controlled'
                value={value}
                onChange={(_event, newValue) => {
                  setValue(newValue)
                }}
              />
            </Typography>
            <Typography
              pb={2}
              pl={1}
              color='primary.dark'
            >
              Message
            </Typography>
            <TextField
              multiline
              variant='outlined'
              rows={8}
              sx={{ width: '100%' }}
            />
            <Button
              variant='contained'
              color='primary'
              sx={{ width: '100%', mt: 2 }}
            >
              Rate
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box sx={inMobile ? { pl: 0 } : { pl: 2 }}>
              <Typography
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
              />
              <Button
                variant='contained'
                color='primary'
                sx={{ width: '100%', mt: 2 }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default RatingDetails
