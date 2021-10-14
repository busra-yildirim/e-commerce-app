import Styled from "styled-components";
import appImage from "../Assets/Group 6607.svg";

export const Header = Styled.div`

    height: 10vh;
    background-color: white;
    
`;

export const HomeWrapper = Styled.div`

    height: 90vh;
    background-color: #F2F2F2;
    
`;
export const HomeContainer = Styled.div`

    width:1200px;
    height: 90vh;
    margin: 0 auto;
  
`;
export const AppImage = Styled.image`

    background: transparent url('${appImage}') no-repeat padding-box;
    width: 200px;
    height: 60px;
    background-size:contain;

    margin-bottom: 30px;

`;
export const ContainerImage = Styled.image`

    background-image: url("../Assets/Banner1.png");
    
`;
export const Button = Styled.button`
    background: var(--unnamed-color-f0f8ff) 0% 0% no-repeat padding-box;
    background: #F0F8FF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    color: var(--unnamed-color-4b9ce2);
    text-align: right;
    font: normal normal bold 15px/20px Nunito;
    letter-spacing: 0px;
    color: #4B9CE2;
    border: none;
`;
export const CategoryTitleWraapper = Styled.div`
   
    display:flex;
    justify-content:space-between;

`;
export const CategoryTitle = Styled.div`
   
    
`;
