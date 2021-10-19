import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  SelectedProductWrapper,
  ProductProperty,
  DetailButton,
  GivenOffer,
} from "../../Components/ScProductDetailPage";

import OfferModal from "../../Components/OfferModal";
import BuyProduct from "../../Components/BuyProduct";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBuyingModal, setIsOpenBuyingModal] = useState(false);
  useEffect(() => {
    axios
      .get(`http://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
      .then((response) => {
        console.log("test", response.data);
        setSelectedProduct(response.data);
      });
  }, []);

  const handleGivenOffer = () => {
    console.log("test");
  };
  const openModal = (event) => {
    setIsOpen(true);
    console.log("tıklandı");
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openBuyingModal = (event) => {
    setIsOpenBuyingModal(true);
    console.log("tıklandı");
  };
  const closeBuyingModal = () => {
    setIsOpenBuyingModal(false);
  };

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
        {selectedProduct.isSold && (
          <DetailButton
            color="#FAAD60"
            background="#FFF0E2"
            onClick={openModal}
            margin="30px 0"
          >
            Bu Ürün Satışta Değil
          </DetailButton>
        )}
        {!selectedProduct.isSold && selectedProduct.isOfferable ? (
          <GivenOffer>Verilen Teklif:</GivenOffer>
        ) : (
          ""
        )}
        <div className="detail-button">
          <DetailButton
            color="#FFFFFF"
            background="#4B9CE2"
            onClick={openBuyingModal}
          >
            Satın Al
          </DetailButton>
          <DetailButton
            color="#4B9CE2"
            background="#F0F8FF"
            onClick={openModal}
          >
            Teklif Geri Çek
          </DetailButton>
        </div>

        <div className="description">
          <span>Açıklama</span>
          {selectedProduct.description}
        </div>
      </div>
      {isOpenBuyingModal && <BuyProduct closeBuyingModal={closeBuyingModal} />}
      {isOpen && <OfferModal closeModal={closeModal} />}
    </SelectedProductWrapper>
  );
};

export default ProductDetailPage;
