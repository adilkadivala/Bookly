import React from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Featured = () => {
  return (
    <>
      <section className="featured" id="featured">
        <h1 className="heading">
          <span>featured books</span>
        </h1>

        <div className="swiper featured-slider">
          <div className="swiper-wrapper featured_Row">
            <Swiper
              className="swiper-slide"
              spaceBetween={20}
              autoplay={{
                delay: 250000,
              }}
              loop={true}
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
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-1.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-2.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-3.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-4.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-5.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-6.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-7.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-8.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-9.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="icons">
                    <NavLink to="" className="fas fa-search"></NavLink>
                    <NavLink to="" className="fas fa-heart"></NavLink>
                    <NavLink to="" className="fas fa-eye"></NavLink>
                  </div>
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-10.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <NavLink to="" className="btn">
                      add to cart
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
