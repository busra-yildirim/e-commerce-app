
import { loginPageImage } from '../Styles/ScSignIn';
import { useState } from 'react';
import { loginPageImage } from '../Styles/ScSignIn';

const SignUp = () => {

    return (
        <div>
            <loginPageImage/>
            <img src="../Assets/Group52.png"/>
            <form>
               <h3> Üye ol </h3> 
                <h5>Fırsatlardan yararlanmak için giriş yap!</h5>
                <label>Email</label>
                <input type="email"  placeholder="Email@example.com" />
                <label>Şifre</label>
                <input type="password"/>
                <button>Giriş</button>
                <span>Hesabın yok mu? </span>
                 <h4>Giriş Yap</h4>
            </form>
        </div>
    )
}
export default SignUp;
