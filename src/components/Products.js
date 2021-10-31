import { useEffect, useState } from "react";
import { ProductContainer } from "./ScProducts";
import ProductItem from "./ProductItem";
import { getSessionStorageSelectedCategory } from "../utils/index.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, filterProducts } from "../actions";
import Loading from "./Loading";

const Products = ({ selectedCategory }) => {
  const getSelectedCategory = getSessionStorageSelectedCategory(); // selected category by user
  const products = useSelector((state) => state.products);
  const filteredToProducts = useSelector((state) => state.filteredProducts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (products.length === 0) {
      setLoading(true);
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
    setLoading(false);
  }, [getSelectedCategory, selectedCategory, products, dispatch]);
  return (
    <>
      {loading && <Loading />}
      <ProductContainer>
        {filteredToProducts.map((item) => (
          <ProductItem key={item.id} products={item} />
        ))}
      </ProductContainer>
    </>
  );
};
export default Products;
