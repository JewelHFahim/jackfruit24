import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./NewProSlider.css";
import NewPCard from "./NewPCard";
import { useProductListQuery } from "../../../../redux/features/products/productApi";
import { Link } from "react-router-dom";

export default function NewProSlider() {
  const { data: products } = useProductListQuery();


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
          {products?.slice(0,9)?.map((product, i) => (
            <SwiperSlide key={i}>
              <Link to={`/products/${product?.id}`}>
                <NewPCard product={product}/>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}
