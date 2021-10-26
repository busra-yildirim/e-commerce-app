import {
  FormTitle,
  FormInfo,
  FormLabel,
  FormInput,
  FormButton,
  FormFooter,
  FormSpan,
  Form,
} from "../ScLogin";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setToken, setUserInfo } from "../../../utils";
import { api } from "../../../api";
import Loading from "../../../components/Loading";

const SignUp = () => {
  let history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    api
      .post("/authorization/signup", {
        email: email,
        password: password,
      })
      .then((response) => {
        setToken(response.data.access_token);
        setUserInfo(email);
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      {loading && <Loading />}
      <Form onSubmit={handleClick}>
        <FormTitle> Üye ol </FormTitle>
        <FormInfo>Fırsatlardan yararlanmak için üye ol!</FormInfo>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          placeholder="email@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Şifre</FormLabel>
        <FormInput
          type="password"
          required
          minLength="8"
          maxLength="20"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton type="submit">Üye Ol</FormButton>
        <FormFooter>
          Hesabın yok mu?{" "}
          <FormSpan onClick={() => history.push("/sign-in")}>
            Giriş Yap
          </FormSpan>
        </FormFooter>
      </Form>
    </>
  );
};
export default SignUp;
