/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import usePostData from '../../hooks/portal/usePostData'

const strapi = loadStripe(
  'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
)

const Payment = () => {
  return (
    <Elements stripe={strapi}>
      <CheckoutForm />
    </Elements>
  )
}

const CheckoutForm = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const isMedia = useMediaQuery(theme.breakpoints.up('md'))
  const location = useLocation()
  const bookingId = location.state
  const { addData } = usePostData({
    endpoint: `booking/${bookingId}/pay`,
    successMSG: 'Booking Paid successfully',
  })

  const elements = useElements()
  const stripe = useStripe()
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    if (!elements || !strapi) return
    const cardElement = elements.getElement(CardElement)
    if (!cardElement) return
    const { error, token } = await stripe!.createToken(cardElement)

    if (error) {
      toast.error(error.message)
    } else {
      try {
        await addData({ token: token.id })
        navigate('/')
      } catch (error: any) {
        toast.error(error.message)
      }
    }
  }
  return (
    <Box>
      <Container maxWidth='lg'>
        <Typography
          color={'primary.main'}
          fontSize={40}
          textAlign={'center'}
          mt={10}
          variant='h2'
          fontWeight={600}
        >
          Payment
        </Typography>
        <Typography
          color={'textLight.main'}
          fontSize={18}
          textAlign={'center'}
          variant='h3'
          mt={4}
        >
          Kindly fill in your card details to pay for your booking
        </Typography>
        <Paper
          sx={{
            mt: 10,
            p: 3,
            borderRadius: 2,
            mx: 'auto',
            width: isMedia ? '50%' : '80%',
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          }}
        >
          <Stack
            component={'form'}
            onSubmit={submitHandler}
            spacing={4}
            sx={{ mt: 4, padding: '20px', borderRadius: 2, mx: 'auto' }}
            width={isMedia ? '50%' : '80%'}
          >
            <CardElement />
            <Button type='submit' variant='contained' size={'medium'}>
              Pay booking
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
export default Payment
