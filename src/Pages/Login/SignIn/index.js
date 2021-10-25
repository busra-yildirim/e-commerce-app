import {
  Form,
  FormTitle,
  FormInfo,
  FormLabel,
  FormInput,
  FormButton,
  FormFooter,
  FormSpan,
  Error,
} from "../ScLogin";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { setToken, setUserInfo } from "../../../utils";
import errorIcon from "../../../assets/errorIcon.svg";
import { api } from "../../../api";
const SignIn = () => {
  let history = useHistory();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [notifyText, setNotifyText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    api
      .post("/authorization/signin", {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      })
      .then((response) => {
        setToken(response.data.access_token);
        setUserInfo(emailInput.current.value);
        history.push("/");
      })
      .catch((error) => {
        alert(error);
        setIsError(true);
        setNotifyText("Emailinizi veya şifreniz hatalı.");
      });
  };
  return (
    <>
      <Form onSubmit={handleClick}>
        <FormTitle> Giriş Yap </FormTitle>
        <FormInfo>Fırsatlardan yararlanmak için giriş yap!</FormInfo>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          ref={emailInput}
          placeholder="email@example.com"
          required
        />
        <FormLabel>Şifre</FormLabel>
        <FormInput
          type="password"
          ref={passwordInput}
          required
          minLength="8"
          maxLength="20"
        />
        <FormButton type="submit">Giriş</FormButton>
        <FormFooter>
          Hesabın yok mu?
          <FormSpan onClick={() => history.push("/sign-up")}>Üye Ol</FormSpan>
        </FormFooter>
      </Form>
      {isError && (
        <Error>
          <img src={errorIcon} alt="error" />
          <span>{notifyText}</span>
        </Error>
      )}
    </>
  );
};
export default SignIn;
