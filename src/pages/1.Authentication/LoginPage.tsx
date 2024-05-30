import AuthContainer from "../../components/shared/AuthContainer";
import SigninImage from "../../assets/images/Signin.png";
import AuthForm from "../../components/shared/AuthForm";

const LoginPage = () => {
  return (
    <AuthContainer imageSrc={SigninImage}>
      <AuthForm  heading="Login" paragraph="If you already have an account register You can" spanText="Login here !">
        <h3>Login</h3>
     </AuthForm>
    </AuthContainer>
  );
};

export default LoginPage;



