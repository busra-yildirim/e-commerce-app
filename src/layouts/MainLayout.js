import { HomeWrapper, Container } from "../Components/ScHome";
import HeaderLayout from "./HeaderLayout";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <HomeWrapper>
        <Container>{children}</Container>
      </HomeWrapper>
    </>
  );
};
export default MainLayout;
