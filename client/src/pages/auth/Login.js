import React, { useState } from "react";
import "../../assets/css/auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authToken";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { storeTokeninLS } = useAuth();

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [oldUser, setOldUser] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setOldUser({
      ...oldUser,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(oldUser, 33, "client site");
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oldUser),
      });
      if (response.ok) {
        const res_data = await response.json();
        storeTokeninLS(res_data.token);
        console.log(response);

        setOldUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        const errorData = await response.json();
        console.log("Error: client site", 53, errorData);
      }
      console.log(response);
    } catch (error) {
      console.log("Login", error);
    }
  };

  return (
    <>
      <div id="authContainer" className={isSignUp ? "right-panel-active" : ""}>
        <div className="form_container sign_in">
          <form onSubmit={handleLoginSubmit} method="POST" className="authForm">
            <h1 className="grey">Log in</h1>

            <div className="rs_icons">
              <NavLink to="">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="">
                <i className="fab fa-google"></i>
              </NavLink>
              <NavLink to="">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="">
                <i className="fab fa-github"></i>
              </NavLink>
            </div>
            <h6 className="grey">Or enter your login details</h6>
            <div className="email icon">
              <input
                type="email"
                id="email_in"
                name="email"
                placeholder="Email address"
                value={oldUser.email}
                onChange={handleLoginInput}
                required
              />
              <i className="fa fa-envelope fa-sm"></i>
            </div>
            <div className="password icon">
              <input
                type={showPassword ? "text" : "password"}
                id="password_up"
                name="password"
                value={oldUser.password}
                onChange={handleLoginInput}
                placeholder="Password"
                required
              />
              <i className="fas fa-key"></i>
              <i
                className={`show fas ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <br />

            <br />
            <div className="submit">
              <button
                id="btnin"
                name="signin"
                type="submit"
                className="overlay_button"
              >
                Log In
              </button>
            </div>
            <br />
            <br />
            <br />
            <div className="remember grey">
              <h5>
                Forgot Password !! <NavLink>Click Here</NavLink> To Backup
                Account
              </h5>
            </div>
          </form>
        </div>

        <div className="overlay_container">
          <div className="overlay">
            <div className="overlay_panel overlay_right">
              <h1>Hello dear Friend!</h1>
              <p>Do you want to become part of our community?</p>
              <NavLink
                to="/signup"
                type="button"
                className="overlay_button"
                onClick={togglePanel}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
