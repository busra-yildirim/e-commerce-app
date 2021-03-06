import styled from "styled-components";

export const mainImage = styled.img`
  width: 700px;
  height: 737px;
  border-radius: 8px;
`;
export const SelectedProductWrapper = styled.div`
  display: flex;
  gap: 40px;
  background: white;
  .productDetailImage {
    width: 700px;
    height: 737px;
  }
  .productPropertyWrapper {
    padding: 40px 0;

    .title {
      width: 378px;
      height: 46px;
      text-align: left;
      font: normal normal normal 34px/23px Nunito;
      color: #555555;
      text-transform: capitalize;
      margin-bottom: 10px;
    }
  }
  .price {
    width: 117px;
    height: 34px;
    text-align: left;
    font: normal normal bold 25px/23px Nunito;
    color: #525252;
    margin-top: 30px;
  }

  .detail-button {
    display: flex;
    align-items: center;
    margin: 20px 0 40px 0;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 480px;
    height: 66px;
    text-align: left;
    font: normal normal normal 15px/23px Nunito;
    color: #555555;
    span {
      width: 76px;
      height: 24px;
      text-align: left;
      font: normal normal bold 18px/24px Nunito;
      color: #525252;
    }
    div {
      width: 480px;
      height: 66px;
      text-align: left;
      font: normal normal normal 15px/23px Nunito;
      color: #555555;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    .productDetailImage {
      width: 343px;
      height: 362px;
    }
    .productPropertyWrapper {
      margin-left: 30px;
    }
  }
`;

export const GivenOffer = styled.div`
  width: 230px;
  height: 36px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 8px;
  text-align: left;
  font: normal normal normal 15px/20px Nunito;
  color: #b1b1b1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  gap: 5px;
  .offer {
    width: 70px;
    height: 20px;
    font: normal normal bold 15px/20px Nunito;
    color: #525252;
  }
`;
export const ProductProperty = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  span {
    display: inline-block;
    width: 46px;
    height: 20px;
    text-align: left;
    font: normal normal bold 15px/20px Nunito;
    color: #525252;
    flex: 2;
  }
  div {
    width: 67px;
    height: 20px;
    text-align: left;
    font: normal normal normal 15px/20px Nunito;
    color: #525252;
    flex: 4;
    text-transform: capitalize;
  }
`;
export const DetailButton = styled.div`
  width: 235px;
  height: 45px;
  background: ${(props) => props.background} 0% 0% no-repeat padding-box;
  border-radius: 8px;
  text-align: center;
  font: normal normal bold 18px/24px Nunito;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin: ${(props) => props.margin};
`;
export const SoldNotify = styled.div`
  width: 321px;
  height: 60px;
  background: #f1fff0 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 12px #1e36482e;
  border-radius: 8px;
  font: normal normal normal 16px/23px Nunito;
  color: #46af32;
  position: fixed;
  top: 70px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 30px;
`;
