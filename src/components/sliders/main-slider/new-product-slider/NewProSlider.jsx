import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CgShoppingCart } from "react-icons/cg";
import { ImEye } from "react-icons/im";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import "./NewProSlider.css";

export default function NewProSlider() {
  const actionBtnStyle =
    "w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-red-600 transition-all duration-200";

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 9 }).map((item, i) => (
          <SwiperSlide key={i}>
         
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
