import {
  Header,
  AppImage,
  Button,
  Container,
  ButtonWrapper,
  HeaderWrapper,
} from "../Components/ScHome";
import appImage from "../Assets/Group 6607.svg";
import { useHistory } from "react-router-dom";
import { getToken } from "../services/service";

const HeaderLayout = () => {
  let history = useHistory();
  const token = getToken();
  console.log({ token });
  return (
    <HeaderWrapper>
      <Container>
        <Header>
          <AppImage src={appImage} width="100px" height="50px" />
          {token ? (
            <ButtonWrapper>
              <Button onClick={() => history.push("/add-product")}>
                + Ürün Ekle
              </Button>
              <Button onClick={() => history.push("/account-page")}>
                Hesabım
              </Button>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <Button onClick={() => history.push("/sign-in")}>
                Giriş Yap
              </Button>
            </ButtonWrapper>
          )}
        </Header>
      </Container>
    </HeaderWrapper>
  );
};

export default HeaderLayout;
