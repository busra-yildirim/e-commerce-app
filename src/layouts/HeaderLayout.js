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

const HeaderLayout = () => {
  let history = useHistory();
  return (
    <HeaderWrapper>
      <Container>
        <Header>
          <AppImage src={appImage} width="100px" height="50px" />
          <ButtonWrapper>
            <Button onClick={() => history.push("/add-product")}>
              + Ürün Ekle
            </Button>
            <Button onClick={() => history.push("/sign-in")}>Giriş Yap</Button>
          </ButtonWrapper>
        </Header>
      </Container>
    </HeaderWrapper>
  );
};

export default HeaderLayout;
