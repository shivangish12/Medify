import React from "react";
import styles from "./Coupons.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import coupon1 from "../assets/Coupon1.svg";
import coupon2 from "../assets/Coupon2.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Coupons = () => {
  return (
    <div className={styles.coupon}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={10}
        slidesPerView={3}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img src={coupon1} alt="Coupon 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coupon2} alt="Coupon 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coupon1} alt="Coupon 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coupon2} alt="Coupon 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Coupons;
