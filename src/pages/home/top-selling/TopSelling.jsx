import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TopSelling = () => {
  const catStyle =
    "hover:text-red-700 hover:underline transition-all duration-200";
  return (
    <div className="w-[1150px] mx-auto my-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-[28px] font-bold uppercase">Top Selling</h1>

        <div>
          <ul className="flex items-center gap-4 text-slate-700 font-medium">
            <li>
              <a href="" className={catStyle}>
                Formal
              </a>
            </li>
            <li>
              <a href="" className={catStyle}>
                Shirts
              </a>
            </li>
            <li>
              <a href="" className={catStyle}>
                T-Shirts
              </a>
            </li>
            <li>
              <a href="" className={catStyle}>
                Pants
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="mt-12 flex justify-between">

        <div className="w-[350px]">
          <h2 className="uppercase font-bold text-[18px]">Top Selling</h2>
          <div className="mt-4">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              grabCursor={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className=""
            >
              {Array.from({ length: 9 }).map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                  {[1, 2, 3].map((item, i) => (
                    <div key={i} className="flex items-center gap-x-2">
                      <img src="https://onion24.com/img/product01.png" alt="" className="w-[70px] h-70px]" />

                      <div>
                        <p className="uppercase text-xs text-slate-600">Category</p>
                        <p className="uppercase font-medium">Product Name</p>
                        <p className="text-red-700 font-bold"> $999
                          <span className="text-sm font-[400] text-slate-600 line-through"> $1100 </span>
                        </p>
                      </div>
                    </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-[350px]">
          <h2 className="uppercase font-bold text-[18px]">Top Selling</h2>
          <div className="mt-4">
            <Swiper
              slidesPerView={1}
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
              className=""
            >
              {Array.from({ length: 9 }).map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                  {[1, 2, 3].map((item, i) => (
                    <div key={i} className="flex items-center gap-x-2">
                      <img src="https://onion24.com/img/product01.png" alt="" className="w-[70px] h-70px]" />

                      <div>
                        <p className="uppercase text-xs text-slate-600">Category</p>
                        <p className="uppercase font-medium">Product Name</p>
                        <p className="text-red-700 font-bold"> $999
                          <span className="text-sm font-[400] text-slate-600 line-through"> $1100 </span>
                        </p>
                      </div>
                    </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-[350px]">
          <h2 className="uppercase font-bold text-[18px]">Top Selling</h2>
          <div className="mt-4">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className=""
            >
              {Array.from({ length: 9 }).map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                  {[1, 2, 3].map((item, i) => (
                    <div key={i} className="flex items-center gap-x-2">
                      <img src="https://onion24.com/img/product01.png" alt="" className="w-[70px] h-70px]" />

                      <div>
                        <p className="uppercase text-xs text-slate-600">Category</p>
                        <p className="uppercase font-medium">Product Name</p>
                        <p className="text-red-700 font-bold"> $999
                          <span className="text-sm font-[400] text-slate-600 line-through"> $1100 </span>
                        </p>
                      </div>
                    </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopSelling;
