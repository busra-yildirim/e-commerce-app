import Styled from "styled-components";

import mainImage from "../../assets/Banner1.png";

export const HeaderWrapper = Styled.div`
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Header = Styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;  
`;

export const HomeWrapper = Styled.div`
    background-color:#F2F2F2;   
    flex:1;
`;
export const Container = Styled.div`
    max-width:1480px;
    margin: 0 auto;
    width: 100%;

`;
export const AppImage = Styled.img`
    
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    margin-bottom: ${(props) => props.marginBottom};
`;
export const ContainerImage = Styled.img`

    background-image: url(${mainImage});
    width: 100%;
    height: 300px;
    border-radius:8px;
    margin-top: 10px;
    
`;
export const Button = Styled.button`

    background: #F0F8FF 0% 0% no-repeat;
    border-radius: 8px;
    text-align: right;
    font: normal normal bold 15px/20px Nunito;
    letter-spacing: 0px;
    color: #4B9CE2;
    border: none;
    font-size: 15px;
    margin-left: 10px;
`;

export const ButtonWrapper = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CategoryTitleWrapper = Styled.div`
   
    display:flex;
    justify-content:space-between;
    display: flex;
    height: 60px;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 20px;
    color: #525252;

`;
export const CategoryTitle = Styled.div`
   
   text-transform: capitalize;
`;
