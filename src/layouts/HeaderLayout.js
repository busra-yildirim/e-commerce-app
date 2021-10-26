import {
  Header,
  AppImage,
  Button,
  Container,
  ButtonWrapper,
  HeaderWrapper,
} from "../Pages/Home/ScHome";
import { ReactComponent as appImage } from "../assets/Group_6607.svg";
import { useHistory } from "react-router-dom";
import { getToken } from "../utils";

const HeaderLayout = () => {
  let history = useHistory();
  const token = getToken();

  return (
    <HeaderWrapper>
      <Container>
        <Header>
          <AppImage
            src={appImage}
            width="100px"
            height="50px"
            onClick={() => history.push("/")}
          />
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
