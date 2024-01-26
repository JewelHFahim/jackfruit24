import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { ImEye } from "react-icons/im";
import { CgShoppingCart } from "react-icons/cg";
import "./NewProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const NewProducts = () => {
  const catStyle =
    "hover:text-red-700 hover:underline transition-all duration-200";

  return (
    <div className="lg:w-[1150px] mx-auto my-10">

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="text-[28px] font-bold uppercase">New Products</h1>

        <div>
          <ul className="flex items-center gap-4 text-slate-700 font-medium">
            <li>
              <a href="" className={catStyle}>
                Latops
              </a>
            </li>
            <li>
              <a href="" className={catStyle}>
                SmartPhones
              </a>
            </li>
            <li>
              <a href="" className={catStyle}>
                Cameras
              </a>
            </li>
            <li>
              <a href="" className={catStyle}>
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-5 bg-gradient-to-b from-slate-100 to-[#cbd7fe] rounded-xl lg:px-5 shadow-xl shadow-gray-400 z-[0]">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
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
          className="newProductSlider pt-8 pb-10 lg:pt-[50px] lg:pb-[70px]"
         
        >
          {Array.from({ length: 9 }).map((item, i) => (
            <SwiperSlide key={i}>
              <div>
                <NewPCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default NewProducts;

const NewPCard = () => {
  const actionBtnStyle = "w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-red-600 transition-all duration-200";

  return (
    <div className="w-[260px] h-[380px] bg-white flex flex-col productcard hover:border-[3px] border-transparent hover:border-red-600 shadow-md">
      <div className="h-1/2">
        <img
          src="https://onion24.com/product_images/1702208108_1.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="h-1/2 w-full flex flex-col justify-center items-center bg-white z-[99]">
        <p className="uppercase font-thin text-sm">Ladies Wears</p>
        <p className="uppercase font-medium mt-1">Formal Looks</p>
        <p className="text-[20px] font-bold text-red-700 mt-1">
          99
          <span className="text-[16px] font-normal text-slate-700 line-through">
            $110.00
          </span>
        </p>

        <div className="mt-2 flex items-center">
          <div className="w-[60px] h-[1px] bg-slate-400" />
          <div className="flex items-center text-sm text-slate-500">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div className="w-[60px] h-[1px] bg-slate-400" />
        </div>

        <div className="flex items-center gap-x-5 mt-5">
          <div className={`${actionBtnStyle} heartConta`}>
            <FaRegHeart />
            <div className="heartBtn">
              <p className="text-white flex justify-center items-center text-sm bg-black w-[140px] h-[30px]">
                Add To WishList
              </p>
            </div>
          </div>

          <div className={`${actionBtnStyle} heartConta`}>
            <FaArrowRightArrowLeft />
            <div className="heartBtn">
              <p className="text-white flex justify-center items-center text-sm bg-black w-[140px] h-[30px]">
                Add To Compare
              </p>
            </div>
          </div>

          <div className={`${actionBtnStyle} heartConta`}>
            <ImEye />
            <div className="heartBtn">
              <p className="text-white flex justify-center items-center text-sm bg-black w-[140px] h-[30px]">
                Quick View
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="addTocartBtn flex justify-center items-center">
        <button className="text-white px-7 py-[7px] rounded-[30px] bg-red-700 uppercase font-medium flex justify-center items-center gap-2 hover:bg-white hover:border-red-600 border-2 border-transparent hover:text-red-600 transition-all duration-200">
          <div className="cartIcon"> <CgShoppingCart /> </div>
          <p>Add To Cart</p>
        </button>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="w-[50px] border-2 border-red-600 flex justify-center items-center text-xs text-red-600 font-semibold">
          -30%
        </div>
        <div className="w-[50px] border-2 border-red-600 flex justify-center items-center bg-red-600 text-white uppercase text-xs">
          New
        </div>
      </div>
    </div>
  );
};
