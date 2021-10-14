import { LoginPageFormWrapper, FormTitle } from "../../Components/ScSignIn";
import axios from "axios";
import { useRef } from "react";

const SignUp = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  axios
    .post("http://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
      email: "yldrm42@gmail.com",
      password: "string122345",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  const handleClick = (event) => {
    event.preventDefault();
    console.log(emailInput.current.value);
    console.log(passwordInput.current.value);
  };
  return (
    <LoginPageFormWrapper onSubmit={handleClick}>
      <FormTitle> Üye ol </FormTitle>
      <h5>Fırsatlardan yararlanmak için üye ol!</h5>
      <label>Email</label>
      <input
        type="email"
        ref={emailInput}
        placeholder="email@example.com"
        required
      />
      <label>Şifre</label>
      <input
        type="password"
        ref={passwordInput}
        required
        minLength="8"
        maxLength="20"
      />
      <button type="submit">Üye Ol</button>
      <span>Hesabın yok mu? </span>
      <h4>Giriş Yap</h4>
    </LoginPageFormWrapper>
  );
};
export default SignUp;
