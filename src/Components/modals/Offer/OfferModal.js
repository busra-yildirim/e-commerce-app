import { GivenOfferWrapper, ModalWrapper } from "./ScOfferModal";
import closeImage from "../../../assets/Group 6618.svg";
import checkedIcon from "../../../assets/checkedIcon.svg";
import ellipse from "../../../assets/ellipse.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../../api";

const OfferModal = ({ closeModal }) => {
  const [isClick, setIsClicked] = useState(false);
  const selectedProduct = useSelector((state) => state.selectedProducts);
  const [offer, setOffer] = useState(selectedProduct.price);

  const calculateOffer = (percent) => {
    setIsClicked(true);
    const currentPrice = selectedProduct.price;
    const calculateOfferPrice = currentPrice + currentPrice * (percent / 100);
    setOffer(calculateOfferPrice);
  };
  const handleOffer = () => {
    selectedProduct.isOfferable = false;
    api
      .post(`/product/offer/${selectedProduct.id}`, {
        offeredPrice: offer,
      })
      .then((response) => {
        closeModal(response.data.id);
      })
      .catch((error) => alert("You have an offer for this product already!"));
  };
  return (
    <ModalWrapper>
      <div className="modal">
        <div className="modalHeader">
          <div className="modalTitle">Teklif Ver</div>
          <img src={closeImage} alt="" onClick={() => closeModal()} />
        </div>
        <form>
          <GivenOfferWrapper>
            <img src={selectedProduct.imageUrl} alt="" />
            <div className="titleAndPriceWrapper">
              <div className="title">{selectedProduct.title}</div>
              <div className="price">{selectedProduct.price} TL</div>
            </div>
          </GivenOfferWrapper>
          <GivenOfferWrapper onClick={() => calculateOffer(20)}>
            {isClick ? (
              <img src={ellipse} alt="" />
            ) : (
              <img src={checkedIcon} alt="" />
            )}
            <div>%20’si Kadar Teklif Ver</div>
          </GivenOfferWrapper>
          <GivenOfferWrapper onClick={() => calculateOffer(30)}>
            {isClick ? (
              <img src={ellipse} alt="" />
            ) : (
              <img src={checkedIcon} alt="" />
            )}
            <div>%30’u Kadar Teklif Ver</div>
          </GivenOfferWrapper>
          <GivenOfferWrapper onClick={() => calculateOffer(40)}>
            {isClick ? (
              <img src={ellipse} alt="" />
            ) : (
              <img src={checkedIcon} alt="" />
            )}
            <div>%40’ı Kadar Teklif Ver</div>
          </GivenOfferWrapper>
          <GivenOfferWrapper>
            {offer ? <div>{offer}</div> : <div>Teklif Belirle</div>}
            <div>TL</div>
          </GivenOfferWrapper>
        </form>
        <button type="submit" onClick={handleOffer}>
          Onayla
        </button>
      </div>
    </ModalWrapper>
  );
};

export default OfferModal;
