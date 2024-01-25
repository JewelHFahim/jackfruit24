import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";




const InfoNav = () => {
  return (
    <div className="w-full py-3 bg-gradient-to-r from-black to-Primary flex justify-between items-center px-[150px]">


      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-1 text-white text-sm">
          <FaPhoneAlt className="text-Primary"/>
          <p> +880-1711223344</p>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <MdOutlineMail className="text-Primary"/>
          <p> mail@gmail.com</p>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <MdLocationPin className="text-Primary"/>
          <p>USA</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-1 text-white text-sm">
          <BiDollar className="text-Primary"/>
          <p> USD </p>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <MdLockOutline className="text-Primary"/>
          <p> Account </p>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <IoIosInformationCircleOutline className="text-Primary"/>
          <p>About Us</p>
        </div>
      </div>

    </div>
  );
};

export default InfoNav;
