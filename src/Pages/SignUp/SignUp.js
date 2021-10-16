import {
  FormTitle,
  FormInfo,
  FormLabel,
  FormInput,
  FormButton,
  FormFooter,
  FormSpan,
  Form,
} from "../../Components/ScSignIn";
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  axios
    .post("http://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
      email: "yldrm42@gmail.com",
      password: "string122345",
    })
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={handleClick}>
      <FormTitle> Üye ol </FormTitle>
      <FormInfo>Fırsatlardan yararlanmak için üye ol!</FormInfo>
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
      <FormButton type="submit">Üye Ol</FormButton>
      <FormFooter>
        Hesabın yok mu?{" "}
        <FormSpan onClick={() => history.push("/sign-in")}>Giriş Yap</FormSpan>
      </FormFooter>
    </Form>
  );
};
export default SignUp;
