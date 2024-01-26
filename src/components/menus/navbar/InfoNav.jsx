import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import "./InfoNav.css"







const InfoNav = () => {
  return (
    <div className="w-full py-3 bg-gradient-to-r from-black to-red-800 flex justify-between items-center px-[150px]">


      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-1 text-white text-sm">
          <FaPhoneAlt className="text-Primary"/>
          <p className="hover:text-Primary"> +880-1711223344</p>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <MdOutlineMail className="text-Primary"/>
          <p className="hover:text-Primary"> mail@gmail.com</p>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <MdLocationPin className="text-Primary"/>
          <p className="hover:text-Primary">USA</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-1 text-white text-sm cursor-pointer">
          <BiDollar className="text-Primary"/>
          <p className="hover:text-Primary"> USD </p>
        </div>

        <div className="flex items-center gap-1 text-white text-sm relative accountSetting cursor-pointer">
          <MdLockOutline className="text-Primary"/>
          <p className="hover:text-Primary"> Account </p>

          <div className="w-[150px] h-[130px] bg-black absolute top-7 left-[-40px] z-[99] flex items-center p-4 accountCont">
            <ul className="flex flex-col gap-y-3">
              <li><a href="" className="flex items-center gap-x-1 hover:text-Primary cursor-pointer"> <FaUser className="text-xs text-Primary"/> Aamin</a></li>
              <li><a href="" className="flex items-center gap-x-1 hover:text-Primary cursor-pointer"> <RiLoginCircleLine className="text-xs text-Primary"/> Login</a></li>
              <li><a href="" className="flex items-center gap-x-1 hover:text-Primary cursor-pointer"> <IoMdPersonAdd className="text-xs text-Primary"/> Aamin</a></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-1 text-white text-sm cursor-pointer">
          <IoIosInformationCircleOutline className="text-Primary"/>
          <p className="hover:text-Primary">About Us</p>
        </div>

      </div>

    </div>
  );
};

export default InfoNav;
