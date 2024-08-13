import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
import usePostData from '../../hooks/portal/usePostData'
import { toast } from 'sonner'

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
  const theme = useTheme()
  const isMedia = useMediaQuery(theme.breakpoints.up('md'))
  const location = useLocation()
  const bookingId = location.state
  const { addData } = usePostData({
    endpoint: `booking/${bookingId}/pay`,
    successMSG: 'Booking payed successfully',
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
      console.error('Error:', error)
      toast.error(error.message)
    } else {
      await addData({
        token: token.id,
      })
      console.log('Success! We saved your card!', token.id)
    }
  }
  return (
    <Box>
      <Typography
        variant='h1'
        sx={{ display: 'flex', justifyContent: 'center' }}
        borderBottom={1}
        borderColor={'textLight.main'}
        paddingBlock={2}
      >
        <img
          src={Logo}
          alt='logo'
          width={170}
        />
      </Typography>
      <Container maxWidth='lg'>
        <Typography
          color={'primary.main'}
          fontSize={40}
          textAlign={'center'}
          mt={10}
          variant='h2'
        >
          Payment
        </Typography>
        <Typography
          color={'textLight.main'}
          fontSize={18}
          textAlign={'center'}
          variant='h3'
        >
          Kindly follow the instructions below
        </Typography>
        <Stack
          component={'form'}
          onSubmit={submitHandler}
          spacing={4}
          sx={{ mt: 4, bgcolor: 'textLight.main', padding: '20px' , borderRadius: 2, mx: 'auto'}}
          width={isMedia ? '50%' : '80%'}
        >
          <CardElement />
          <Button
          type='submit'
            variant='contained'
            size={'medium'}
          >
            Pay booking
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
export default Payment
