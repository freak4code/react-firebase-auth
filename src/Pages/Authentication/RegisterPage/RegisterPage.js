import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {

    const handleDisplayName = (e) => {
        console.log(e.target.value);
      };

    const handleEmail = (e) => {
        console.log(e.target.value);
      };
    
      const handlePassword = (e) => {
        console.log(e.target.value);
      };
    
      const handleRegister = () => {};
    
      return (
        <div className="container">
          <div className="form">
            <div className="header">
              <h4 className="text-primary text-center">
                <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
              </h4>
            </div>
            <div>
              <form>
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span style={{ fontSize: "28px", color: "Dodgerblue" }}>
                        <i class="fa fa-user"></i>
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
                        <i class="fa fa-at"></i>
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
                        <i class="fa fa-lock"></i>
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
    
                <button type="button" className="btn btn-secondary btn-block">
                  Register
                </button>
        
                  <div>
                     <Link to="/login"><p>Alrwady registered ? Login</p></Link>
                    
                  </div>
              
              </form>
              <div className="social">
                <i className="fab fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      );
};

export default RegisterPage;
