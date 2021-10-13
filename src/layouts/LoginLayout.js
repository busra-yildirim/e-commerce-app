import {
  LoginPageContainer,
  LoginPageWrapper,
  LoginPageImage,
} from "../Components/ScSignIn";

const LoginLayout = ({ children }) => {
  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <LoginPageImage />
        {children}
      </LoginPageWrapper>
    </LoginPageContainer>
  );
};

export default LoginLayout;
