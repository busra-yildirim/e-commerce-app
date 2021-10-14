import axios from "axios";
import { useState, useEffect } from "react";
import { ProductWrapper } from "./ScProducts";

const Products = ({ allCategories }) => {
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
      .then((response) => {
        setAllBrands(response.data.title);
        console.log({ allBrands });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductWrapper>
      product image
      <div>Product brand solda</div>
      <div>Product renk sağda</div>
      <div>fiyat</div>
    </ProductWrapper>
  );
};
export default Products;
