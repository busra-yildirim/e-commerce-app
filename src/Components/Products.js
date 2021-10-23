import axios from "axios";
import { useState, useEffect } from "react";
import { ProductContainer } from "./ScProducts";
import ProductItem from "./ProductItem";
import { getSessionStorageSelectedCategory } from "../utils/index.js";
import { useDispatch } from "react-redux";
import { products } from "../actions";

const Products = ({ allCategories, selectedCategory }) => {
  const getSelectedCategory = getSessionStorageSelectedCategory();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  console.log("selected", selectedCategory.toLowerCase());
  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => {
        console.log("products-test", response.data);
        setAllProducts(response.data);
        setFilteredProducts(response.data);
        dispatch(products(allProducts));

        if (getSelectedCategory !== "Hepsi") {
          const filteredProducts = allProducts.filter(
            (item) => item.category.title === getSelectedCategory.toLowerCase()
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
