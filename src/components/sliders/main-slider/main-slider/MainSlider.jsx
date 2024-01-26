import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./MainSlider.css"

export default function MainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="main-slider"
      >
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <SwiperSlide key={i}>
            <img src="https://onion24.com/img/banner3.jpg" alt="" className="w-full h-[150px] object-cover lg:h-full"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
