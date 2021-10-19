import React, { useState } from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const RegisterPage = () => {
  const { user, signUpUsingEmailAndPassword, signInUsingGoogle, isLoading } =
    useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDisplayName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegister = () => {
      signUpUsingEmailAndPassword(email, password)
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
          <form onSubmit={handleRegister}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span style={{ fontSize: "28px", color: "Dodgerblue" }}>
                    <i className="fa fa-user"></i>
                  </span>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onBlur={handleDisplayName}
              />
            </div>

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
                    <i className="fa fa-lock"></i>
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
              Register
            </button>

            <div>
              <Link to="/login">
                <p>Alrwady registered ? Login</p>
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

export default RegisterPage;
