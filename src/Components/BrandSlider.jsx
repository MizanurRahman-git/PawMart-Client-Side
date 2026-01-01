import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BrandSlider = () => {
  const brands = [
    { name: "Zoi Cat", img: "https://i.ibb.co.com/4ZX8qm72/Zoi-Cat.jpg" },
    { name: "Felix", img: "https://i.ibb.co.com/ZR1M4hFk/Felix.webp" },
    { name: "ProDiet", img: "https://i.ibb.co.com/VpjwHvz0/Pro-Diet.png" },
    { name: "Kitchen Flavor", img: "https://i.ibb.co.com/7d1DV1SH/Kitchen-Flavor.png" },
    { name: "Wanpy", img: "https://i.ibb.co.com/vxd2X8cf/Wanpy.webp" },
    { name: "PawPaw", img: "https://i.ibb.co.com/357FNY0F/Paw-Paw.webp" },
    { name: "CIAO", img: "https://i.ibb.co.com/hFXn9vF0/CIAO.png" },
  ];
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Featured <span className="text-purple-600">Brands</span>
      </h2>

      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="flex items-center"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl p-3 flex items-center justify-center hover:scale-105 transition-all duration-300">
              <img
                src={brand.img}
                alt={brand.name}
                className="h-20 w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
