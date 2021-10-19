import styled from "styled-components";

export const Modal = styled.div`
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

  .wrapper {
    width: 355px;
    height: 171px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 12px #1e36482e;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .modalTitle {
    width: 91px;
    height: 34px;
    text-align: left;
    font: normal normal bold 25px/23px Nunito;
    letter-spacing: 0px;
    color: #525252;
  }
  .content {
    width: 196px;
    height: 20px;
    text-align: center;
    font: normal normal normal 15px/23px Nunito;
    color: #555555;
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
export const ConfirmButton = styled.div`
  width: 150px;
  height: 45px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  text-align: center;
  font: normal normal bold 18px/24px Nunito;
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
