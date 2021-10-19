import axios from "axios";
import { useState, useEffect } from "react";
import { ProductContainer } from "./ScProducts";
import ProductItem from "./ProductItem";

const Products = ({ allCategories, selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log("selected", selectedCategory.toLowerCase());
  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => {
        console.log("test", response.data);
        setAllProducts(response.data);
        setFilteredProducts(response.data);

        if (selectedCategory !== "Hepsi") {
          const filteredProducts = allProducts.filter(
            (item) => item.category.title === selectedCategory.toLowerCase()
          );
          setFilteredProducts(filteredProducts);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedCategory]);
  console.log("filteredProducts", filteredProducts);
  return (
    <ProductContainer>
      {filteredProducts.map((item) => (
        <ProductItem key={item.id} products={item} />
      ))}
    </ProductContainer>
  );
};
export default Products;
