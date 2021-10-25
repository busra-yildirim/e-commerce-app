import { useEffect } from "react";
import { ProductContainer } from "./ScProducts";
import ProductItem from "./ProductItem";
import { getSessionStorageSelectedCategory } from "../utils/index.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, filterProducts } from "../actions";

const Products = ({ selectedCategory }) => {
  const getSelectedCategory = getSessionStorageSelectedCategory(); // selected category by user
  const products = useSelector((state) => state.products);
  const filteredToProducts = useSelector((state) => state.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [products.length, dispatch]);

  useEffect(() => {
    if (getSelectedCategory && getSelectedCategory !== "Hepsi") {
      const filteredProducts = products.filter(
        (item) => item.category.title === getSelectedCategory.toLowerCase()
      );
      dispatch(filterProducts(filteredProducts));
    } else {
      dispatch(filterProducts(products));
    }
  }, [getSelectedCategory, selectedCategory, products, dispatch]);
  return (
    <ProductContainer>
      {filteredToProducts.map((item) => (
        <ProductItem key={item.id} products={item} />
      ))}
    </ProductContainer>
  );
};
export default Products;
