import styled from "styled-components";

export const GivenOfferWrapper = styled.div`
  width: 441px;
  height: 45px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: left;
  font: normal normal normal 15px/20px Nunito;
  color: #525252;
  &:last-child {
    background: #f4f4f4 0% 0% no-repeat padding-box;
  }
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.2s ease;
  z-index: 1;

  .modal {
    width: 440px;
    height: 421px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 12px #1e36482e;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    .modalHeader {
      display: flex;
      justify-content: space-between;
      .modalTitle {
        text-align: left;
        font: normal normal bold 25px/23px Nunito;
        letter-spacing: 0px;
        color: #525252;
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      height: 300px;
      justify-content: space-evenly;
    }
    button[type="submit"] {
      width: 315px;
      height: 45px;
      background: #4b9ce2 0% 0% no-repeat padding-box;
      border-radius: 8px;
      color: #ffffff;
      margin: 0 auto;
      text-align: center;
      font: normal normal bold 18px/24px Nunito;
      border: 0;
    }
  }
`;
