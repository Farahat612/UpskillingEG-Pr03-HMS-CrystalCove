import { AuthLayout } from '../../layouts'
import SigninImage from '../../assets/images/Signin.png'
import { AuthForm } from '../../components/forms'

const LoginPage = () => {
  return (
    <AuthLayout imageSrc={SigninImage}>
      <AuthForm
        heading='Login'
        paragraph='If you already have an account register You can'
        spanText='Login here !'
      >
        <h3>Login</h3>
      </AuthForm>
    </AuthLayout>
  )
}

export default LoginPage
