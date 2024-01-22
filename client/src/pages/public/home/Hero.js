import React from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import "swiper/css";
import { useAuth } from "../../../store/authToken";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const { user } = useAuth();
  return (
    <>
      {/* <!-- home section starts  --> */}
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h1>Hey {user.username}</h1>
            <h3>Upto 75% off</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid
              ex minima at!
            </p>
            <NavLink to="" className="btn">
              Shop Now
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../../../assets/images/public/book-1.png")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../../../assets/images/public/book-2.png")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../../../assets/images/public/book-3.png")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../../../assets/images/public/book-4.png")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../../../assets/images/public/book-5.png")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="" className="swiper-slide">
                    <img
                      src={require("../../../assets/images/public/book-6.png")}
                      alt=""
                    />
                  </NavLink>
                </SwiperSlide>
              </Swiper>
            </div>
            <img
              src={require("../../../assets/images/public/stand.png")}
              className="stand"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <!-- home section starts  --> */}

      {/* <!-- icons section starts  --> */}

      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast"></i>
          <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-lock"></i>
          <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-redo-alt"></i>
          <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-headset"></i>
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
      </section>

      {/* <!-- icons section ends --> */}
    </>
  );
};

export default Hero;
