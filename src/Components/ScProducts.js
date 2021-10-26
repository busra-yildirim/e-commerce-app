import Styled from "styled-components";

export const ProductWrapper = Styled.div`
   width: 280px;
    height: 392px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


 
`;

export const ProductImage = Styled.img`
    width: 100%;
    height: 100%;
`;

export const ProductContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px 20px;
    width: 100%;
`;
export const ProductBrand = Styled.div`
    display: flex;
    font: normal normal bold 15px/22px Nunito;
    color: #4B9CE2;
    text-transform: capitalize;
    width: 39px;
    height: 20px; 
`;

export const ProductColor = Styled.div`
    display: flex;
    text-transform:capitalize;
    width: 83px;
    height: 18px;
    color: #3E3E3E;
    font: normal normal normal 13px/22px Nunito;
    span {
        font: normal normal bold 13px/22px Nunito;
        color: #3E3E3E;
    }
`;

export const ProductPrice = Styled.div`
        width: 100px;
        height: 24px;
        text-align: left;
        font: normal normal bold 18px/22px Nunito;
        color: #3E3E3E;
        display: flex;
        align-self: flex-start;
        padding-left: 10px;
        margin-top: 20px;
`;
export const ProductImageWrapper = Styled.div`
    width: 260px;
    height: 297px;
    border-radius: 8px;
`;
export const BrandAndColorWrapper = Styled.div`
    display: flex;
    gap: 134px;

`;
