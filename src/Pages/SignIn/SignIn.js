import {
  Form,
  FormTitle,
  FormInfo,
  FormLabel,
  FormInput,
  FormButton,
  FormFooter,
} from "../../Components/ScSignIn";
import { useRef } from "react";
const SignIn = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    console.log(emailInput.current.value);
    console.log(passwordInput.current.value);
  };
  return (
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
      <FormFooter>Hesabın yok mu? Üye Ol</FormFooter>
    </Form>
  );
};
export default SignIn;
