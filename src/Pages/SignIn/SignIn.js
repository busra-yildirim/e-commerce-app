import { LoginPageFormWrapper } from "../../Components/ScSignIn";
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
    <LoginPageFormWrapper onSubmit={handleClick}>
      <h3> Giriş Yap </h3>
      <h5>Fırsatlardan yararlanmak için giriş yap!</h5>
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
      <button type="submit">Giriş</button>
      <span>Hesabın yok mu? </span>
      <h4>Üye Ol</h4>
    </LoginPageFormWrapper>
  );
};
export default SignIn;
