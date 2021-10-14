import {
  LoginPageContainer,
  LoginPageWrapper,
  LoginPageImage,
  LoginPageFormWrapper,
} from "../Components/ScSignIn";
import { AppImage } from "../Components/ScHome";

const LoginLayout = ({ children }) => {
  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <LoginPageImage />
        <LoginPageFormWrapper>
          <AppImage />
          {children}
        </LoginPageFormWrapper>
      </LoginPageWrapper>
    </LoginPageContainer>
  );
};

export default LoginLayout;
