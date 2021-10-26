import {
  LoginPageContainer,
  LoginPageWrapper,
  LoginPageImage,
  LoginPageFormWrapper,
} from "../Pages/Login/ScLogin";
import { AppImage } from "../Pages/Home/ScHome";
import { ReactComponent as appImage } from "../assets/Group_6607.svg";

const LoginLayout = ({ children }) => {
  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <LoginPageImage />
        <LoginPageFormWrapper>
          <AppImage
            src={appImage}
            width="200px"
            height="60px"
            marginBottom="30px"
          />
          {children}
        </LoginPageFormWrapper>
      </LoginPageWrapper>
    </LoginPageContainer>
  );
};

export default LoginLayout;
