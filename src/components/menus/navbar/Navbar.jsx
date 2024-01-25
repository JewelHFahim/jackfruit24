import logo from "../../../assets/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[150px] bg-gradient-to-r from-blue-800 to-red-600 py-5">

      <div className="flex items-center">
        <img src={logo} alt="" className="w-[90px] h-[90px]" />
        <h3 className="text-[25px] font-medium text-Primary">
          Jackfruit24.com
        </h3>
      </div>

      <div className="flex items-center rounded-[20px] bg-blue-500">
        <input type="text" placeholder="Search Here" className="w-[360px] py-2 rounded-s-[20px] focus:outline-none px-4"/>
        <button className="px-4 rounded-e-[20px] text-white bg-blue-500">Search</button>
      </div>

      <div className="flex items-center gap-x-6">
        <div className="flex flex-col items-center gap-x-1 text-white">
          <div className="relative">
            <FaRegHeart className="text-xl" />
            <div className="w-[15px] h-[15px] bg-red-600 rounded-full absolute top-[-10px] right-[-10px] flex justify-center items-center text-xs shadow-xl shadow-white">1</div>
          </div>
          <p className="text-sm">Your Wishlist</p>
        </div>

        <div className="flex flex-col items-center gap-x-1 text-white">
          <div className="relative">
            <MdOutlineShoppingCart className="text-2xl" />
            <div className="w-[15px] h-[15px] bg-red-600 rounded-full absolute top-[-10px] right-[-10px] flex justify-center items-center text-xs shadow-xl shadow-white">2</div>
          </div>

          <p className="text-sm">Your Cart</p>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
