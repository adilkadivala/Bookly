import React from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          <span>our blogs</span>
        </h1>

        <div className="swiper blogs-slider ">
          <div className="swiper-wrapper blog_Row">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
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
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-2.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-3.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-5.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-4.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-3.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-4.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <div className="image">
                    <img
                      src={require("../../../assets/images/public/blog-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3>blog title goes here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, odio.
                    </p>
                    <NavLink to="" className="btn">
                      read more
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

export default Blog;
