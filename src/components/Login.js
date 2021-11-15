import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles/Login.css";
import { auth } from "../config/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>

        <form action="">
          <h5>Email </h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's FAKE PAGE{" "}
          <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.
        </p>

        {/* <li>
          <label>Need Help?</label>
          <ul className="interior">
            <li>
              <a href="#r">Forgot your password?</a>
            </li>
            <li>
              <a href="#r">Other issues with Sign-In</a>
            </li>
          </ul>
        </li> */}
      </div>

      <div className="login__newAccount">
        <h6>New to Amazon?</h6>
        <button onClick={register} className="login_registerButton">
          Create your Amazon account
        </button>

        <div className="login__end">
          <a href="/">Conditions of Use </a>
          <a href="/">Privacy Notice </a>
          <a href="/">Help </a>
        </div>
      </div>
      <h3>© 1996-2021, AmazonFAKE.com, Inc. or its affiliates</h3>
    </div>
  );
}

export default Login;
