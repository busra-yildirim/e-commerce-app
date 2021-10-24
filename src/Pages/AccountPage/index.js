import {
  AccountPageWrapper,
  Account,
  OfferWrapper,
  ProductCard,
  OfferTab,
  StatusButton,
  ProductImage,
} from "./ScAccountPage";
import { SoldNotify } from "../ProductDetail/ScProductDetailPage";
import accountImage from "../../assets/Group 6876.svg";
import { GivenOffer } from "../ProductDetail/ScProductDetailPage";
import { getUserInfo } from "../../utils";
import BuyProduct from "../../components/modals/Buying/BuyProduct";
import { useState } from "react";
import checkIcon from "../../assets/Group 6792.svg";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const userEmail = getUserInfo();
  const [isOpenBuyingModal, setIsOpenBuyingModal] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [notifyText, setNotifyText] = useState("");
  const selectedProduct = useSelector((state) => state.selectedProducts);
  const giveOffer = useSelector((state) => state.giveOffer);
  const offer = useSelector((state) => state.offer);
  const [isGetOfferTab, setIsGetOfferTab] = useState(true);

  const openBuyingModal = () => {
    setIsOpenBuyingModal(true);
  };
  const closeBuyingModal = (isClicked) => {
    setIsOpenBuyingModal(false);
    setShowNotify(false);
    if (isClicked) {
      setNotifyText("Satın Alındı");
      setShowNotify(true);
    }
  };
  const handleGetAndGiveOffer = (isClicked) => {
    console.log("tıklandı");
    setIsGetOfferTab(isClicked);
  };
  console.log("giveOffer", giveOffer);
  return (
    <AccountPageWrapper>
      <Account>
        <img src={accountImage} alt="" />
        <div className="userMail">{userEmail}</div>
      </Account>
      <OfferWrapper>
        <div className="offerTabWrapper">
          <OfferTab
            color={isGetOfferTab ? "#4B9CE2" : "#B1B1B1"}
            borderBottom={isGetOfferTab ? "1px solid #4B9CE2" : ""}
            onClick={() => handleGetAndGiveOffer(true)}
          >
            Teklif Aldıklarım
          </OfferTab>
          <OfferTab
            color={isGetOfferTab ? "#B1B1B1" : "#4B9CE2"}
            borderBottom={isGetOfferTab ? "" : "1px solid #4B9CE2"}
            onClick={() => handleGetAndGiveOffer(false)}
          >
            Teklif Verdiklerim
          </OfferTab>
        </div>
        {isGetOfferTab ? (
          <ProductCard>
            <div className="productWrapper">
              <ProductImage src={selectedProduct.imageUrl} alt="" />

              <div className="titleGivenOfferWrapper">
                <div className="productTitle">{selectedProduct.title}</div>
                <GivenOffer background="">
                  <div>Verilen Teklif: </div>
                  <div className="offer">{offer} TL</div>
                </GivenOffer>
              </div>
            </div>

            <StatusButton
              background=" #4B9CE2"
              color="#FFFFFF"
              onClick={openBuyingModal}
            >
              Onayla
            </StatusButton>
            {/*<StatusButton background="#F77474" color="#FFFFFF">
    Reddet
  </StatusButton>
  <StatusButton background=" #4B9CE2" color="#FFFFFF">
    Onayla
  </StatusButton>
  <StatusButton background="#FFFFFF" color="#4B9CE2">
    Onaylandı
  </StatusButton>
  <StatusButton background="#FFFFFF" color="#F77474">
    Reddedildi
  </StatusButton>*/}
          </ProductCard>
        ) : (
          <ProductCard>
            <div className="productWrapper">
              <ProductImage src={selectedProduct.imageUrl} alt="" />

              <div className="titleGivenOfferWrapper">
                <div className="productTitle">{selectedProduct.title}</div>
                <GivenOffer background="">
                  <div>Verilen Teklif: </div>
                  <div className="offer">{offer} TL</div>
                </GivenOffer>
              </div>
            </div>

            <StatusButton
              background=" #4B9CE2"
              color="#FFFFFF"
              onClick={openBuyingModal}
            >
              Onayla
            </StatusButton>
            {/*<StatusButton background="#F77474" color="#FFFFFF">
  Reddet
</StatusButton>
<StatusButton background=" #4B9CE2" color="#FFFFFF">
  Onayla
</StatusButton>
<StatusButton background="#FFFFFF" color="#4B9CE2">
  Onaylandı
</StatusButton>
<StatusButton background="#FFFFFF" color="#F77474">
  Reddedildi
</StatusButton>*/}
          </ProductCard>
        )}
      </OfferWrapper>
      {isOpenBuyingModal && <BuyProduct closeBuyingModal={closeBuyingModal} />}
      {showNotify && (
        <SoldNotify>
          <img src={checkIcon} alt="checkIcon" />
          <span>{notifyText}</span>
        </SoldNotify>
      )}
    </AccountPageWrapper>
  );
};

export default AccountPage;
