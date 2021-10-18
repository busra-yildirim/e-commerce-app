import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  SelectedProductWrapper,
  ProductProperty,
  DetailButton,
  GivenOffer,
} from "../../Components/ScProductDetailPage";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
      .then((response) => {
        console.log("test", response.data);
        setSelectedProduct(response.data);
      });
  }, []);
  return (
    <SelectedProductWrapper>
      <img
        className="productDetailImage"
        src={selectedProduct.imageUrl}
        alt="product"
      />
      <div className="productPropertyWrapper">
        <div className="title">{selectedProduct.category?.title}</div>
        <ProductProperty>
          <span>Marka:</span>
          <div>{selectedProduct.brand?.title}</div>
        </ProductProperty>
        <ProductProperty>
          <span>Renk:</span>
          <div>{selectedProduct.color?.title}</div>
        </ProductProperty>
        <ProductProperty>
          <span>Kullanım Durumu:</span>
          <div>{selectedProduct.status?.title}</div>
        </ProductProperty>
        <div className="price">{selectedProduct.price} TL</div>
        <GivenOffer>Verilen Teklif:</GivenOffer>
        <div className="detail-button">
          <DetailButton color="#FFFFFF" background="#4B9CE2">
            Satın Al
          </DetailButton>
          <DetailButton color="#4B9CE2" background="#F0F8FF">
            Teklif Geri Çek
          </DetailButton>
        </div>

        <div className="description">
          <span>Açıklama</span>
          {selectedProduct.description}
        </div>
      </div>
    </SelectedProductWrapper>
  );
};

export default ProductDetailPage;
