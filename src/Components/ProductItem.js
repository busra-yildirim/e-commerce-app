import {
  ProductWrapper,
  ProductImage,
  ProductBrand,
  ProductColor,
  ProductPrice,
  ProductImageWrapper,
} from "./ScProducts";

const ProductItem = ({ products }) => {
  /*
    <div>Product brand solda</div>
  <div>Product renk sağda</div>
  <div>fiyat</div> */
  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={products.imageUrl} />
      </ProductImageWrapper>
      <ProductBrand>{products.brand.title}</ProductBrand>
      <ProductColor>{products.color.title}</ProductColor>
      <ProductPrice>{products.price}</ProductPrice>
    </ProductWrapper>
  );
};

export default ProductItem;
