import React from "react";
import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuth } from "../../../store/authToken";

const History = () => {
  const { booksData } = useAuth();

  return (
    <>
      <section className="arrivals" id="arrivals" style={{ padding: "10px" }}>
        <h1 className="heading" style={{ padding: "20px" }}>
          <span>History Books</span>
        </h1>

        <div className="swiper arrivals-slider">
          <div className="swiper-wrapper second_Row">
            <Swiper
              spaceBetween={20}
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
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {booksData &&
                booksData.map((book, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <NavLink to="" className="swiper-slide box">
                          <div className="image">
                            <img
                              src={require("../../../assets/images/public/book-1.png")}
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h3>{book.book_title}</h3>
                            <h3>{book.book_description}</h3>
                            <div className="price">
                              {book.price} <span>$20.99</span>
                            </div>
                            <div className="stars">
                              <button className="btn-card">Read More</button>
                            </div>
                          </div>
                        </NavLink>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        </div>

        <div className="swiper arrivals-slider">
          <div className="swiper-wrapper second_Row">
            <Swiper
              spaceBetween={20}
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
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {booksData &&
                booksData.map((book, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <NavLink to="" className="swiper-slide box">
                          <div className="image">
                            <img
                              src={require("../../../assets/images/public/book-1.png")}
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h3>{book.book_title}</h3>
                            <p>{book.book_description}</p>
                            <div className="price">
                              {book.price} <span>$20.99</span>
                            </div>
                            <div className="stars">
                              <button className="btn-card">Read More</button>
                            </div>
                          </div>
                        </NavLink>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        </div>

        <h1 className="heading" style={{ marginTop: "7vh" }}>
          <NavLink className="btn">Show All</NavLink>
        </h1>
      </section>
    </>
  );
};

export default History;
