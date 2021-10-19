import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./LoginPage.css";

const LoginPage = () => {
  const { user, signInUsingEmailAndPassword, signInUsingGoogle, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    signInUsingEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="header">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span style={{ fontSize: "28px", color: "Dodgerblue" }}>
                    <i className="fa fa-at"></i>
                  </span>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onBlur={handleEmail}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span style={{ fontSize: "28px", color: "Dodgerblue" }}>
                    <i claclassNamess="fa fa-lock"></i>
                  </span>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onBlur={handlePassword}
              />
            </div>

            <button type="submit" className="btn btn-secondary btn-block">
              Login
            </button>

            <div>
              <Link to="/register">
                <p>Don't have an account? Register Now !</p>
              </Link>
            </div>
          </form>
          <div className="social">
            <i className="fab fa-google" onClick={signInUsingGoogle}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
