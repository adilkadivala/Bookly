import React from "react";
import "../../../assets/css/public/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientsReview = () => {
  return (
    <>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span>client's reviews</span>
        </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper reviews_Row">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
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
                  <img
                    src={require("../../../assets/images/public/pic-1.png")}
                    alt=""
                  />
                  <h3>john deo</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                    similique facere hic.
                  </p>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <img
                    src={require("../../../assets/images/public/pic-2.png")}
                    alt=""
                  />
                  <h3>john deo</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                    similique facere hic.
                  </p>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <img
                    src={require("../../../assets/images/public/pic-3.png")}
                    alt=""
                  />
                  <h3>john deo</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                    similique facere hic.
                  </p>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <img
                    src={require("../../../assets/images/public/pic-4.png")}
                    alt=""
                  />
                  <h3>john deo</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                    similique facere hic.
                  </p>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <img
                    src={require("../../../assets/images/public/pic-5.png")}
                    alt=""
                  />
                  <h3>john deo</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                    similique facere hic.
                  </p>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide box">
                  <img
                    src={require("../../../assets/images/public/pic-6.png")}
                    alt=""
                  />
                  <h3>john deo</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex
                    similique facere hic.
                  </p>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
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

export default ClientsReview;
