import { Modal, ConfirmButton } from "./ScBuyProduct";

const BuyProduct = ({ closeBuyingModal }) => {
  return (
    <Modal>
      <div className="wrapper">
        <div className="modalTitle">Satın Al</div>
        <div className="content">Satın Almak istiyor musunuz?</div>
        <div className="buttonWrapper">
          <ConfirmButton
            color="#4B9CE2"
            backgroundColor="#F0F8FF"
            onClick={() => closeBuyingModal(false)}
          >
            Vazgeç
          </ConfirmButton>
          <ConfirmButton
            color="#FFFFFF"
            backgroundColor="#4B9CE2"
            onClick={() => closeBuyingModal(true)}
          >
            Onayla
          </ConfirmButton>
        </div>
      </div>
    </Modal>
  );
};

export default BuyProduct;
