import axios from "axios";
import { useState, useEffect } from "react";
import { ProductContainer } from "./ScProducts";
import ProductItem from "./ProductItem";

const Products = ({ allCategories, selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("selected", selectedCategory);
  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => {
        console.log("test", response.data);
        setAllProducts(response.data);

        if (selectedCategory !== "Hepsi") {
          const filteredProducts = allProducts.filter((item) =>
            console.log("1", item.category.title)
          );
          console.log("filteredProducts", filteredProducts);
          setAllProducts(filteredProducts);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductContainer>
      {allProducts.map((item) => (
        <ProductItem key={item.id} products={item} />
      ))}
    </ProductContainer>
  );
};
export default Products;
