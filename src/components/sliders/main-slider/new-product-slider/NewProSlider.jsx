import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./NewProSlider.css";
import NewPCard from "./NewPCard";

export default function NewProSlider() {


  return (
    <>
     <Swiper
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="newProductSlider pt-8 pb-16 lg:pt-[50px] lg:pb-[70px] pl-8 lg:pl-0"
        >
          {Array.from({ length: 9 }).map((item, i) => (
            <SwiperSlide key={i}>
              <div>
                <NewPCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}
