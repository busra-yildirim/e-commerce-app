import {
  Header,
  AppImage,
  Button,
  HomeWrapper,
  HomeContainer,
} from "../Components/ScHome";
import { useHistory } from "react-router-dom";

const MainLayout = ({ children }) => {
  let history = useHistory();
  return (
    <>
      <Header>
        <AppImage />
        <Button> + Ürün Ekle </Button>
        <Button onClick={() => history.push("/sign-in")}> Giriş Yap </Button>
      </Header>
      <HomeWrapper>
        <HomeContainer>{children}</HomeContainer>
      </HomeWrapper>
    </>
  );
};
export default MainLayout;
