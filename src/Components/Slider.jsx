import React from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css";

const Slider = () => {
    return (
        <>
      <Swiper navigation={true} pagination={true} autoplay={true} modules={[Navigation,Pagination, Autoplay]}>
        <SwiperSlide>
          <div className="flex flex-col justify-cente items-center">
            <img
              className="w-180 h-100 rounded-xl"
              src="https://i.ibb.co.com/prMSSnqP/pets.jpg"
              alt=""
            />
            <h1 className="font-medium text-2xl">Find Your Furry Friend Today</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-cente items-center">
            <img
              className="w-180 h-100 rounded-xl"
              src="https://i.ibb.co.com/xSWzyDXj/pets2.jpg"
              alt=""
            />
            <h1 className="font-medium text-2xl">Your Pet's Happiness, Our Priority</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-cente items-center">
            <img
              className="w-180 h-100  rounded-lg"
              src="https://i.ibb.co.com/ycDg5hPK/happy-owner.jpg"
              alt=""
            />
            <h1 className="font-medium text-2xl pb-9">Because Every Pet Deserves Love and Care</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-cente items-center">
            <img
              className="w-180 h-100  rounded-lg"
              src="https://i.ibb.co.com/jktQXggt/adoptions.jpg"
              alt=""
            />
            <h1 className="font-medium text-2xl pb-9">Caring for Those Who Love us Most.</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;