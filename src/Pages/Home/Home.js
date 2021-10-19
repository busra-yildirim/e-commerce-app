import axios from "axios";
import {
  ContainerImage,
  CategoryTitle,
  CategoryTitleWrapper,
} from "../../Components/ScHome";
import { useState, useEffect } from "react";
import Products from "../../Components/Products";
//import { getToken } from "../../services/service";
const Home = () => {
  //const token = getToken();
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");
  // const config = {
  //       headers: { Authorization: `Bearer ${token}` }
  // };
  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => {
        response.data.unshift({
          title: "Hepsi",
          id: "all",
        });

        setAllCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const filteredToCategory = (event) => {
    setSelectedCategory(event.target.innerText);
  };
  return (
    <>
      <ContainerImage />
      <CategoryTitleWrapper onClick={filteredToCategory}>
        {allCategories.map((item) => (
          <CategoryTitle key={item.id}> {item.title} </CategoryTitle>
        ))}
      </CategoryTitleWrapper>
      <Products
        allCategories={allCategories}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Home;
