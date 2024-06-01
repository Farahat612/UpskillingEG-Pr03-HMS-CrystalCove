import { Container, Grid, Typography } from '@mui/material'
import  Logo from "../../assets/logo/logo.png" 
import React from 'react'

const Footer = () => {
  return (
    <Typography component={'div'} sx={{borderTop: '1px solid #E5E5E5', mt: 10}}>
     <Container maxWidth={'xl'}  sx={{my: 10 }}>
        <Grid container gap={6}>
          <Grid item md={4} sm={12}>
            <img src={Logo}  alt="logo" style={{maxWidth: '75%', maxHeight: '75%', objectFit: 'cover'}}/>
            <Typography>
              We kaboom your beauty holiday
              instantly and memorable.
            </Typography>
          </Grid>
          <Grid md={2} sm={3}>
          <Typography color={'#0d47a1'} sx={{fontWeight: 'bold'}}>
            For Beginners
            </Typography>
          <Typography color={'#B0B0B0'} mt={3}>
          New Account
            </Typography>
          <Typography color={'#B0B0B0'} mt={1}>
          Start Booking a Room
            </Typography>
          <Typography color={'#B0B0B0'} mt={1}>
          Use Payments
            </Typography>
          </Grid>
          <Grid md={2} sm={3}>
          <Typography color={'#0d47a1'} sx={{fontWeight: 'bold'}}>
          Explore Us
            </Typography>
          <Typography color={'#B0B0B0'} mt={3}>
          Our Careers
            </Typography>
          <Typography color={'#B0B0B0'} mt={1}>
          Privacy
            </Typography>
          <Typography color={'#B0B0B0'} mt={1}>
          Terms & Conditions
            </Typography>
          </Grid>
          <Grid md={2} sm={3}>
          <Typography color={'#0d47a1'} sx={{fontWeight: 'bold'}}>
          Connect Us
            </Typography>
          <Typography color={'#B0B0B0'} mt={3}>
          support@staycation.id
            </Typography>
          <Typography color={'#B0B0B0'} mt={1}>
          021 - 2208 - 1996
            </Typography>
          <Typography color={'#B0B0B0'} mt={1}>
          Staycation, Kemang, Jakarta
            </Typography>
          </Grid>
        </Grid>
        <Typography color={'#B0B0B0'} sx={{mx: 'auto', display: 'block', width: 'fit-content', mt: 10}}>Copyright 2019 • All rights reserved • Staycation</Typography>
     </Container>
    </Typography>
  )
}

export default Footer