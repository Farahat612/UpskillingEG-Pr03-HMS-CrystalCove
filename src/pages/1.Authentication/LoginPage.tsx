import { AuthLayout } from '../../layouts'
import SigninImage from '../../assets/forms/sign-in.png'
import { AuthForm } from '../../components/forms'

const LoginPage = () => {
  return (
    <AuthLayout
      imageSrc={SigninImage}
      imgTitle='Sign In to CrystalCove'
      slogan='Homes as unique as you.'
    >
      <AuthForm
        heading='Login'
        subtitle={`If you don't have an account, You can`}
        linkText='Register here!'
        linkDestination='/register'
      >
        <h3>Login</h3>
      </AuthForm>
    </AuthLayout>
  )
}

export default LoginPage
