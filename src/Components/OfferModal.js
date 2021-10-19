import { GivenOfferWrapper, ModalWrapper } from "./ScOfferModal";
import closeImage from "../Assets/Group 6618.svg";
//import checkImage from "../Ellipse 1304 - Outline.svg";
const OfferModal = ({ closeModal }) => {
  //<img src={checkImage} alt="" />
  return (
    <ModalWrapper>
      <div className="modal">
        <div className="modalHeader">
          <div className="modalTitle">Teklif Ver</div>
          <img src={closeImage} alt="" onClick={() => closeModal()} />
        </div>

        <form>
          <GivenOfferWrapper>%20’si Kadar Teklif Ver</GivenOfferWrapper>
          <GivenOfferWrapper>%30’u Kadar Teklif Ver</GivenOfferWrapper>
          <GivenOfferWrapper>%40’ı Kadar Teklif Ver</GivenOfferWrapper>
          <GivenOfferWrapper>Teklif Belirle</GivenOfferWrapper>
        </form>
        <button type="submit">Onayla</button>
      </div>
    </ModalWrapper>
  );
};

export default OfferModal;
