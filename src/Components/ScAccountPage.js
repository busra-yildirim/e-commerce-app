import styled from "styled-components";

export const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Account = styled.div`
  width: 1480px;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  display: flex;

  align-items: center;
  gap: 20px;
  img {
    padding: 0 0 0 30px;
  }
  .userMail {
    width: 157px;
    height: 20px;
    text-align: left;
    font: normal normal bold 15px/20px Nunito;
    letter-spacing: 0px;
    color: #525252;
  }
`;

export const OfferWrapper = styled.div`
  width: 1440px;
  height: 669px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  padding: 20px;

  .offerTabWrapper {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
  }
`;

export const OfferTab = styled.div`
  width: 130px;
  height: 20px;
  text-align: left;
  font: normal normal bold 15px/20px Nunito;
  padding: 10px;
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.borderBottom};
`;
export const ProductCard = styled.div`
  width: 1373px;
  height: 104px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
  padding: 10px;

  .productWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .titleGivenOfferWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .productTitle {
      width: 200px;
      height: 24px;
      text-align: left;
      font: normal normal normal 18px/23px Nunito;
      color: #555555;
      text-transform: capitalize;
    }
  }
`;

export const ProductImage = styled.img`
  width: 78px;
  height: 84px;
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 8px;
`;
export const StatusButton = styled.button`
  width: 86px;
  height: 30px;
  background: ${(props) => props.background};
  border-radius: 8px;
  text-align: center;
  font: normal normal normal 15px/23px Nunito;
  color: ${(props) => props.color};
  border: 0;
  justify-self: flex-end;
`;
