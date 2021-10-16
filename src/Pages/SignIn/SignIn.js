import {
  Form,
  FormTitle,
  FormInfo,
  FormLabel,
  FormInput,
  FormButton,
  FormFooter,
  FormSpan,
} from "../../Components/ScSignIn";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
const SignIn = () => {
  let history = useHistory();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <Form className="ercü" onSubmit={handleClick}>
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
  );
};
export default SignIn;
