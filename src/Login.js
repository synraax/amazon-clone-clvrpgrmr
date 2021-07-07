import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault(); //stop the refresh
    //login logic
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      // logged in, redirect to homepage
      history.push("/");
    })
    .catch((e) => alert(e.message));
  };

  const register = event => {
    event.preventDefault(); //stop the refresh
    //register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // create user and logged in, redirect
      history.push("/");
    })
    .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.techtricksworld.com/wp-content/uploads/2017/02/Amazon-logo.png"
          alt=""
        />
      </Link>

        <div className="login_container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} ype="submit" className="login_signInButton">Sign in</button>
            </form>

            <p>
              By signing-in you agree to Amazon's Conditions of Use & Sale. 
              Please see our Privacy Noticce, our Cookies Notice and our Interest-Based
              Ads Notice.
            </p>
            <button onClick={register} className="login_registerButton">Creatae your Amazon Account</button>
        </div>
    </div>
  );
}

export default Login;
