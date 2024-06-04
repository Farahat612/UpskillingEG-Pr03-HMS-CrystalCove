import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Logo from '../../assets/logo/logo.png'

const Footer = () => {
  return (
    <Box>
      <Divider sx={{ my: 5 }} />
      <Container maxWidth={'xl'}>
        <Grid
          container
          gap={6}
        >
          <Grid
            item
            md={4}
            sm={12}
          >
            <img
              src={Logo}
              alt='logo'
              style={{ maxWidth: '75%', maxHeight: '75%', objectFit: 'cover' }}
            />
            <Typography>
              We kaboom your beauty holiday instantly and memorable.
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            sm={3}
            color={'GrayText'}
          >
            <Typography
              color={'primary.main'}
              sx={{ fontWeight: 'bold' }}
            >
              For Beginners
            </Typography>
            <Typography mt={3}>New Account</Typography>
            <Typography mt={1}>Start Booking a Room</Typography>
            <Typography mt={1}>Use Payments</Typography>
          </Grid>
          <Grid
            item
            md={2}
            sm={3}
            color={'GrayText'}
          >
            <Typography
              color={'primary.main'}
              sx={{ fontWeight: 'bold' }}
            >
              Explore Us
            </Typography>
            <Typography mt={3}>Our Careers</Typography>
            <Typography mt={1}>Privacy</Typography>
            <Typography mt={1}>Terms & Conditions</Typography>
          </Grid>
          <Grid
            item
            md={2}
            sm={3}
            color={'GrayText'}
          >
            <Typography
              color={'primary.main'}
              sx={{ fontWeight: 'bold' }}
            >
              Connect Us
            </Typography>
            <Typography mt={3}>support@CrystalCove.id</Typography>
            <Typography mt={1}>021 - 2208 - 1996</Typography>
            <Typography mt={1}>CrystalCove, Kemang, Jakarta</Typography>
          </Grid>
        </Grid>

       
        <Typography
          color={'GrayText'}
          sx={{ mx: 'auto', display: 'block', width: 'fit-content', my: 5 }}
        >
          All rights reserved &copy; 2024 CrystalCove
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
