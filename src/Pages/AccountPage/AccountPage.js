import {
  AccountPageWrapper,
  Account,
  OfferWrapper,
  ProductCard,
  OfferTab,
  StatusButton,
  ProductImage,
} from "../../Components/ScAccountPage";
import accountImage from "../../Assets/Group 6876.svg";
import { GivenOffer } from "../../Components/ScProductDetailPage";
const AccountPage = () => {
  return (
    <AccountPageWrapper>
      <Account>
        <img src={accountImage} alt="" />
        Hello
      </Account>
      <OfferWrapper>
        <div className="offerTabWrapper">
          <OfferTab color="#4B9CE2" borderBottom="1px solid #4B9CE2">
            Teklif Aldıklarım
          </OfferTab>
          <OfferTab color=" #B1B1B1">Teklif Verdiklerim</OfferTab>
        </div>

        <ProductCard>
          <ProductImage
            src="https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D"
            alt=""
          />
          <div className="titleGivenOfferWrapper">
            <div className="productTitle">Title</div>
            <GivenOffer background="">Alınan Teklif: </GivenOffer>
          </div>

          <StatusButton background=" #4B9CE2" color="#FFFFFF">
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
        <ProductCard>
          <ProductImage
            src="https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D"
            alt=""
          />
          <div className="titleGivenOfferWrapper">
            <div className="productTitle">Title</div>
            <GivenOffer background="">Alınan Teklif: </GivenOffer>
          </div>

          <StatusButton background=" #4B9CE2" color="#FFFFFF">
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
        <ProductCard>
          <ProductImage
            src="https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image4.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=vSUy2YjmwdDWBYViPsGQTj800uY0VKS2lNPUy5LfSPvPVJvoiGv9fACw65qLqSLGgXzt%2BgiMqIoFqMZPnihKWs3y6SMHKa%2Fdf196uBcpsG%2BX4NopQ4SbTSX2BWDejtDCoO7EFfBsNRK%2BGzZpHBSAbAmImDUkcUC5ztwIN6sVBTZF7IiqmLb574iraG1YjPlMTVEsaxddPXcsyDQd3XdPJ3M7VC5zAMHY%2FKZdi6lCKi%2B1ysWr8A54BcSk6PNK4S2PjMwAg8z%2FOyUXPg18dAjuZ2Xw0A3KjMU24aqB%2FDGRd3OoQxs4HeIvbYm7thQuhCvCXqO7MPNNWgfhHEKj9ULktA%3D%3D"
            alt=""
          />
          <div className="titleGivenOfferWrapper">
            <div className="productTitle">Title</div>
            <GivenOffer background="">Alınan Teklif: </GivenOffer>
          </div>

          <StatusButton background=" #4B9CE2" color="#FFFFFF">
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
      </OfferWrapper>
    </AccountPageWrapper>
  );
};

export default AccountPage;
