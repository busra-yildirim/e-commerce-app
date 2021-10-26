import {
  ProductWrapper,
  ProductImage,
  ProductBrand,
  ProductColor,
  ProductPrice,
  ProductImageWrapper,
  BrandAndColorWrapper,
} from "./ScProducts";
import { useHistory } from "react-router-dom";
const ProductItem = ({ products }) => {
  let history = useHistory();
  const handleClickedProduct = () => {
    history.push("/ItemDetailPage/" + products.id);
  };
  return (
    <ProductWrapper onClick={handleClickedProduct}>
      <ProductImageWrapper>
        <ProductImage src={products.imageUrl} />
      </ProductImageWrapper>
      <BrandAndColorWrapper>
        <ProductBrand>{products.brand.title}</ProductBrand>
        <ProductColor>
          <span>Renk:</span>
          {products.color.title}
        </ProductColor>
      </BrandAndColorWrapper>
      <ProductPrice>{products.price} TL</ProductPrice>
    </ProductWrapper>
  );
};

export default ProductItem;
