import React from "react";
import "../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import "swiper/css";
import Navbar from "./public/layouts/Navbar";
import Footer from "./public/layouts/Footer";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h1 style={{ fontSize: "150px", color: "red" }}>404</h1>
            <p style={{ fontSize: "50px", color: "red" }}>
              Path Didn't Matched.
            </p>
            <NavLink to="/" className="btn">
              Back To Home
            </NavLink>
          </div>
          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  425: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../assets/images/pagenotfound1.jpg")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../assets/images/pagenotfound2.jpg")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../assets/images/pagenotfound3.jpg")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../assets/images/pagenotfound2.jpg")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../assets/images/pagenotfound1.jpg")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../assets/images/pagenotfound3.jpg")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
              </Swiper>
            </div>
            <img
              src={require("../assets/images/public/stand.png")}
              className="stand"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error404;
