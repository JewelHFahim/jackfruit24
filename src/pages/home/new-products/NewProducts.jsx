import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewProSlider from "../../../components/sliders/main-slider/new-product-slider/NewProSlider";

const NewProducts = () => {
  const catStyle =
    "hover:text-red-700 hover:underline transition-all duration-200";

  return (
    <div className="lg:w-[1150px] mx-auto my-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="text-[28px] font-bold uppercase">New Products</h1>

        <div>
          <ul className="flex items-center gap-x-2 lg:gap-x-4 text-slate-700 font-medium">
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
        <NewProSlider/>
      </div>
    </div>
  );
};

export default NewProducts;
