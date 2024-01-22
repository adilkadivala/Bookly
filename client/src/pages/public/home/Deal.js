import React, { useState } from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../store/authToken";

const Deal = () => {
  const [contect, setContect] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContect({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContect({
      ...contect,
      [name]: value,
    });
  };

  const handleContect = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contect),
      });

      if (response.ok) {
        setContect({
          username: user.username,
          email: user.email,
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="deal">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          <NavLink to="" className="btn">
            shop now
          </NavLink>
        </div>

        <div className="image">
          <img
            src={require("../../../assets/images/public/deal-img.jpg")}
            alt=""
          />
        </div>
      </section>

      {/* <!-- newsletter section starts --> */}

      <section className="newsletter">
        <form onSubmit={handleContect} method="POST">
          <h3>Hi {user.username}</h3>
          <h3>subscribe for latest updates</h3>
          <input
            type="text"
            name="username"
            value={contect.username}
            onChange={handleChange}
            placeholder="enter your Name"
            className="box"
          />
          <input
            type="email"
            name="email"
            value={contect.email}
            onChange={handleChange}
            placeholder="enter your email"
            className="box"
          />
          <textarea
            type="text"
            name="message"
            value={contect.message}
            onChange={handleChange}
            placeholder="enter your email"
            className="box"
          />

          <input type="submit" value="subscribe" className="btn" />
        </form>
      </section>

      {/* <!-- newsletter section ends --> */}
    </>
  );
};

export default Deal;
