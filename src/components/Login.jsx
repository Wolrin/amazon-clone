import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../config/firebase";
import React, { useState } from "react";
import Tilt from "react-tilt";
import "../styles/Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        db.collection("infos").doc(email).set({
          email: email,
          password: password,
        });
      })
      .catch((err) => alert("Sorry we didn't find your account"));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
          db.collection("infos").doc(email).set({
            email: email,
            password: password,
          });
        }
      })
      .catch((err) => alert("Sorry your account is already created"));
  };

  return (
    <div className="login">
      <Link to="/">
        <Tilt
          className="Tilt"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner">
            <img
              className="login_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt=""
            />
          </div>
        </Tilt>
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
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
          By signing-in you agree to Amazon Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
