import styled from "styled-components";

export const AddProductWrapper = styled.div`
  width: 1480px;
  height: 812px;
  background: #ffffff 0% 0% no-repeat;
  border-radius: 8px;
  display: flex;
  padding: 30px;
`;

export const Product = styled.div`
  flex: ${(props) => props.flex};
  width: 167px;
  height: 34px;
  text-align: left;
  font: normal normal bold 25px/23px Nunito;
  color: #525252;

  div:first-child {
    margin-bottom: 20px;
  }
  .Select {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 30px;
    .priceAndOfferWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  .SelectWrapper {
    display: flex;
    flex-direction: column;
  }

  .uploadFile {
    width: 595px;
    height: 164px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px dashed #b1b1b1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    span {
      color: #525252;
      text-align: center;
      font: normal normal 600 14px/15px Nunito;
    }
    .selectImage {
      width: 122px;
      height: 30px;
      background: #f4f4f4 0% 0% no-repeat padding-box;
      border-radius: 15px;

      text-align: center;
      font: normal normal normal 15px/23px Nunito;
      color: #b1b1b1;
    }
  }
  .imageWrapper {
    position: relative;
    width: 113px;
    height: 113px;
    .uploadedImage {
      width: 113px;
      height: 113px;
      background: transparent 0% 0% no-repeat padding-box;
      border-radius: 8px;
    }
    .remove {
      position: absolute;
      top: -13px;
      right: -30px;
      width: 40px;
      height: 40px;

      border-radius: 8px;
    }
  }
`;
export const ProductLabel = styled.div`
  width: 116px;
  height: 20px;
  text-align: left;
  font: normal normal normal 15px/20px Nunito;
  color: #525252;
`;
export const ProductInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: 0;
  margin-bottom: 20px;
  &::placeholder {
    color: #99a0a7;
    text-align: left;
    font: normal normal normal 16px/22px Nunito;
    width: 186px;
    height: 22px;
  }
  &:focus {
    outline: 0;
    background: #f0f8ff 0% 0% no-repeat padding-box;
    border: 1px solid #4b9ce2;
    border-radius: 8px;
  }
`;

export const SelectProduct = styled.select`
  width: 353px;
  height: 45px;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: none;
  text-transform: capitalize;
  font: normal normal normal 16px/22px Nunito;
  color: #b1b1b1;
  &:focus {
    outline: 0;
  }
`;

export const OptionProduct = styled.option`
  width: 353px;
  height: 228px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 12px #1e36482e;
  border-radius: 8px;
  font: normal normal normal 16px/22px Nunito;
  color: #3e3e3e;
  text-transform: capitalize;
  font: normal normal normal 16px/22px Nunito;
  color: #b1b1b1;

  &:hover {
    font: normal normal normal 16px/22px Nunito;
    color: #4b9ce2;
    background: #f2f2f2 0% 0% no-repeat padding-box;
    border-radius: 10px;
  }
`;
export const FormProduct = styled.div`
  display: flex;
  width: 1480px;
  height: 812px;
  position: relative;
  .saveButton {
    width: 315px;
    height: 45px;
    background: #4b9ce2 0% 0% no-repeat padding-box;
    border-radius: 8px;
    text-align: center;
    font: normal normal bold 18px/24px Nunito;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
  }
`;
