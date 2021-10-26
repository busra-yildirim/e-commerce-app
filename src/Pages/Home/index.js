import { ContainerImage, CategoryTitle, CategoryTitleWrapper } from "./ScHome";
import { useState, useEffect } from "react";
import Products from "../../components/Products";

import { setSessionStorageSelectedCategory } from "../../utils/index.js";
import { api } from "../../api";

const Home = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    api
      .get("/detail/category/all")
      .then((response) => {
        response.data.unshift({
          title: "Hepsi",
          id: "all",
        });
        setAllCategories(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  const filteredToCategory = (event) => {
    setSessionStorageSelectedCategory(event.target.innerText);
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
      <Products selectedCategory={selectedCategory} />
    </>
  );
};

export default Home;
