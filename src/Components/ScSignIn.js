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
export const LoginPageFormWrapper = Styled.div`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
`;
export const FormTitle = Styled.div`
       
        text-align: center;
        font: normal normal bold 26px/43px Nunito;
        letter-spacing: 0px;
        color: #525252;
`;

export const Form = Styled.form`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 390px;
        height: 380px;
        `;
export const LoginPageContainer = Styled.div`
        height: 100vh;
`;

export const FormInfo = Styled.div`
        font-size: 10px;
        margin: 10px 0 20px 0;
        color: #525252;
`;
export const FormLabel = Styled.label`
        display: inline-block;
        text-align: left;
        font-size:12px;
        width: 260px;
        margin: 10px 0;
`;
export const FormInput = Styled.input`
        background: #F4F4F4 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        border: none;
        width: 260px;
        height: 30px;
        &:focus {
                outline:0;
                background-color: #FFF2F2;
                border: 1px solid #F77474;
        }
        `;
export const FormButton = Styled.button`
       
        background: #4B9CE2 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        width: 260px;
        height: 30px;
        border: none;
        margin: 15px 0;
        color: white;
       
        `;
export const FormFooter = Styled.div`
        text-align: center;
        letter-spacing: 0px;
        opacity: 1;
        color: #525252;
        font-size: 10px;
`;
export const FormSpan = Styled.span`
        text-align: center;
        font: normal normal bold 10px/20px Nunito;
        letter-spacing: 0px;
        color: #4B9CE2;
        padding-left: 5px;
`;
