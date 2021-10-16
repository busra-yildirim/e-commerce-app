import {
  AccountPageWrapper,
  Account,
  OfferWrapper,
  ProductCard,
} from "../../Components/ScAccountPage";
import accountImage from "../../Assets/Group 6876.svg";
const AccountPage = () => {
  return (
    <AccountPageWrapper>
      <Account>
        <img src={accountImage} alt="" />
        Hello
      </Account>
      <OfferWrapper>
        <span>Teklif Aldıklarım</span>
        <span>Teklif Verdiklerim</span>
        <ProductCard>
          <img src="" alt="" />
          <div>detayı</div>
          <div>Alınan Teklif: </div>
          <div>Onay/Red</div>
        </ProductCard>
      </OfferWrapper>
    </AccountPageWrapper>
  );
};

export default AccountPage;
