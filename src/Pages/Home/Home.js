import axios from "axios";
import {
  Header,
  HomeWrapper,
  HomeContainer,
  Button,
  AppImage,
  ContainerImage,
  CategoryTitle,
  CategoryTitleWraapper,
} from "./ScHome";
import { useState, useEffect } from "react";
import Products from "../../Components/Products";

const Home = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => {
        setAllCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header>
        <AppImage />
        <Button> + Ürün Ekle </Button>
        <Button onClick={() => console.log("tıklandı")}> Giriş Yap </Button>
      </Header>
      <HomeWrapper>
        <HomeContainer>
          <ContainerImage />
          <CategoryTitleWraapper>
            Hepsi
            {allCategories.map((item) => (
              <CategoryTitle> {item.title} </CategoryTitle>
            ))}
          </CategoryTitleWraapper>
          <Products allCategories={allCategories} />
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;
