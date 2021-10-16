import axios from "axios";
import { useState, useEffect } from "react";
import { ProductContainer } from "./ScProducts";
import ProductItem from "./ProductItem";

const Products = ({ allCategories }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => {
        setAllProducts(response.data);
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
