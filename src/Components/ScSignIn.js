import Styled from "styled-components";
import loginImage from "../Assets/Group52.png";

export const LoginPageWrapper = Styled.div`
        display: flex;
        justify-content: space between;
        align-items: center;
        background:#FBFBFB 0% 0% no-repeat padding-box;
`;
export const LoginPageImage = Styled.img`
        top: 0px;
        left: 0px;
        width: 575px;
        height: 100vh;
        background: transparent url(${loginImage}) 0% 0% no-repeat padding-box;
        opacity: 1; 
        background-position: center center;
        background-size: cover;


`;
export const LoginPageFormWrapper = Styled.form`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 50px;
        h3 {        
                color: #525252;
        }
        h5 {             
                color: #525252;   
        }
`;

export const LoginPageContainer = Styled.div`
        height: 100vh;
`;
