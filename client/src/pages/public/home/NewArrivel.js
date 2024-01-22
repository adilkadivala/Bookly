import React from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NewArrivel = () => {
  return (
    <>
      <section className="arrivals" id="arrivals">
        <h1 className="heading">
          <span>new arrivals</span>
        </h1>

        <div className="swiper arrivals-slider">
          <div className="swiper-wrapper first_Row">
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
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-1.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <br />
              <br />
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-2.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>

              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-3.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>

              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-4.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>

              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-5.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>

              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-6.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>

              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-1.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="swiper arrivals-slider">
          <div className="swiper-wrapper second_Row">
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
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-1.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-2.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-3.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-4.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-5.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-6.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-7.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-8.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-9.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="" className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/book-10.png")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>new arrivals</h3>
                    <div className="price">
                      $15.99 <span>$20.99</span>
                    </div>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivel;
