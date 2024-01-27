import logo from "../../../assets/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileMenu from "../mobile-menu/MobileMenu";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-red-800 py-2 lg:py-3">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:w-[1170px] mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt=""
            className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]"
          />
          <h3 className=" lg:text-[25px] font-medium text-Primary">
            Jackfruit24.com
          </h3>
        </Link>

        <div className="flex items-center rounded-[20px] bg-blue-500">
          <input
            type="text"
            placeholder="Search Here"
            className="w-[250px] lg:w-[360px] py-2 rounded-s-[20px] focus:outline-none px-4 text-sm lg:text-[16px]"
          />
          <button className=" px-2 text-sm lg:text-[16px] lg:px-4 rounded-e-[20px] text-white bg-blue-500">
            Search
          </button>
        </div>

        <div className="px-5 lg:px-0 w-ful min-w-full lg:min-w-max flex items-center justify-between lg:gap-x-6 mt-3 lg:mt-0">
          <div className="flex flex-col items-center gap-x-1 text-white">
            <div className="relative">
              <FaRegHeart className="text-xl" />
              <div className="w-[15px] h-[15px] bg-red-600 rounded-full absolute top-[-10px] right-[-10px] flex justify-center items-center text-xs shadow-xl shadow-white">
                1
              </div>
            </div>
            <p className="text-sm lg:block hidden">Your Wishlist</p>
          </div>

          <div className="flex flex-col items-center gap-x-1 text-white">
            <div className="relative">
              <MdOutlineShoppingCart className="text-2xl" />
              <div className="w-[15px] h-[15px] bg-red-600 rounded-full absolute top-[-10px] right-[-10px] flex justify-center items-center text-xs shadow-xl shadow-white">
                2
              </div>
            </div>

            <p className="text-sm hidden lg:block ">Your Cart</p>
          </div>

          <div className="block lg:hidden mb-5">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
