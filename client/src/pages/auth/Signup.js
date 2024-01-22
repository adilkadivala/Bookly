import React, { useState } from "react";
import "../../assets/css/auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authToken";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { storeTokeninLS } = useAuth();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const res_data = await response.json();

        console.log(res_data, "res from server");
        storeTokeninLS(res_data.token);
        console.log(response);

        setNewUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      } else {
        const errorText = await response.text();
        console.error("Error:", errorText);
        const errorData = await response.json();
        console.log("Error:", errorData);
      }
      console.log(response);
    } catch (error) {
      console.log("SignUp", error);
    }
  };

  return (
    <>
      <div id="authContainer" className={!isSignUp ? "right-panel-active" : ""}>
        {/* Sign up Form */}
        <div className="form_container sign_up">
          <form onSubmit={handleSubmit} method="POST">
            <h1 className="grey">Create an Account</h1>
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
            <h6 className="grey">Or enter your personal details</h6>
            <div className="user icon">
              <input
                type="text"
                id="user"
                name="username"
                placeholder="Full Name"
                value={newUser.username}
                onChange={handleInput}
                required
              />
              <i className="fa fa-user fa-sm"></i>
            </div>
            <div className="email icon">
              <input
                type="email"
                id="email_up"
                name="email"
                value={newUser.email}
                onChange={handleInput}
                placeholder="Email address"
                required
              />
              <i className="fa fa-envelope fa-sm"></i>
            </div>
            <div className="phone icon">
              <input
                type="text"
                id="phone"
                name="phone"
                value={newUser.phone}
                onChange={handleInput}
                placeholder="Phone number"
                required
              />
              <i className="fa fa-phone fa-sm"></i>
            </div>
            <div className="password icon">
              <input
                type={showPassword ? "text" : "password"}
                id="password_up"
                name="password"
                onChange={handleInput}
                placeholder="Password"
                value={newUser.password}
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

            <div className="submit">
              <button
                id="btnin"
                name="signup"
                type="submit"
                className="overlay_button"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        {/*  overlay Container  */}

        <div className="overlay_container">
          <div className="overlay">
            <div className="overlay_panel overlay_left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal details</p>
              <NavLink
                to="/login"
                type="button"
                className="overlay_button"
                onClick={togglePanel}
              >
                Log In
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
