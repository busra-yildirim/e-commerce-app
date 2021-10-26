import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  SelectedProductWrapper,
  ProductProperty,
  DetailButton,
  GivenOffer,
  SoldNotify,
} from "./ScProductDetailPage";

import OfferModal from "../../components/modals/Offer/OfferModal";
import BuyProduct from "../../components/modals/Buying/BuyProduct";
import checkIcon from "../../assets/Group 6792.svg";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBuyingModal, setIsOpenBuyingModal] = useState(false);
  const [notifyText, setNotifyText] = useState("");
  const [showNotify, setShowNotify] = useState(false);
  const dispatch = useDispatch();
  const [currentOfferID, setCurrentOfferID] = useState(null);
  const offer = useSelector((state) => state.offer);

  useEffect(() => {
    api.get(`/product/${id}`).then((response) => {
      setSelectedProduct(response.data);
    });
  }, [dispatch, id]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (offerID) => {
    if (offerID) {
      setCurrentOfferID(offerID);
    }
    setIsOpen(false);
  };

  const openBuyingModal = () => {
    setIsOpenBuyingModal(true);
  };
  const closeBuyingModal = (isClicked) => {
    setShowNotify(false);
    setIsOpenBuyingModal(false);
    if (isClicked) {
      setIsOpenBuyingModal(false);

      api
        .put(`/product/purchase/${selectedProduct.id}`)
        .then((response) => {
          setNotifyText("Satın Alındı");
          setSelectedProduct((prev) => ({ ...prev, isSold: true }));
          setShowNotify(true);
        })
        .catch((error) => alert("Cannot purchase your own product!"));
    }
  };

  const cancelOffer = () => {
    api
      .delete(`/account/cancel-offer/${currentOfferID}`)
      .then((response) => {
        setSelectedProduct((prev) => ({ ...prev, isOfferable: true }));
      })
      .catch((error) => alert("Offer not found!"));
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
          <DetailButton color="#FAAD60" background="#FFF0E2" margin="30px 0">
            Bu Ürün Satışta Değil
          </DetailButton>
        )}
        {!selectedProduct.isSold ? (
          <GivenOffer>
            <div>Verilen Teklif: </div>
            {!selectedProduct.isOfferable ? (
              <div className="offer">{offer} TL</div>
            ) : (
              ""
            )}
          </GivenOffer>
        ) : (
          ""
        )}
        {!selectedProduct.isSold && (
          <div className="detail-button">
            <DetailButton
              color="#FFFFFF"
              background="#4B9CE2"
              onClick={openBuyingModal}
            >
              Satın Al
            </DetailButton>
            {selectedProduct.isOfferable ? (
              <DetailButton
                color="#4B9CE2"
                background="#F0F8FF"
                onClick={openModal}
              >
                Teklif Ver
              </DetailButton>
            ) : (
              <DetailButton
                color="#4B9CE2"
                background="#F0F8FF"
                onClick={cancelOffer}
              >
                Teklif Geri Çek
              </DetailButton>
            )}
          </div>
        )}
        <div className="description">
          <span>Açıklama</span>
          {selectedProduct.description}
        </div>
      </div>
      {isOpenBuyingModal && <BuyProduct closeBuyingModal={closeBuyingModal} />}
      {isOpen && <OfferModal closeModal={closeModal} />}
      {showNotify && (
        <SoldNotify>
          <img src={checkIcon} alt="checkIcon" />
          <span>{notifyText}</span>
        </SoldNotify>
      )}
    </SelectedProductWrapper>
  );
};

export default ProductDetailPage;
