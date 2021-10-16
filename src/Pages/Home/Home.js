import axios from "axios";
import {
  ContainerImage,
  CategoryTitle,
  CategoryTitleWraapper,
} from "../../Components/ScHome";
import { useState, useEffect } from "react";
import Products from "../../Components/Products";

const Home = () => {
  const [allCategories, setAllCategories] = useState([]);

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

  return (
    <>
      <ContainerImage />
      <CategoryTitleWraapper>
        {allCategories.map((item) => (
          <CategoryTitle key={item.id}> {item.title} </CategoryTitle>
        ))}
      </CategoryTitleWraapper>
      <Products allCategories={allCategories} />
    </>
  );
};

export default Home;