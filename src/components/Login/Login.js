import React from 'react';
import './Login.scss'
import Button from "@material-ui/core/Button";
import {auth, provider} from "../../firebase";

const Login = () => {
  const signin =() => {
    auth.signInWithPopup(provider)
      .catch(error => alert(error.message))
  }
  return (
    <div className={'login'}>
      <div className="login__logo">
        <img src="https://www.jiogaming.com/wp-content/uploads/2020/05/C8460E12-7F22-421B-A490-4737AF712037.png" alt=""/>
      </div>

      <Button onClick={signin}> Sign in</Button>
    </div>
  );
};

export default Login;
