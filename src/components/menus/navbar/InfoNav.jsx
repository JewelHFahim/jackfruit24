import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import "./InfoNav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const InfoNav = () => {
  const [account, setAccount] = useState(false);
  console.log(account);
  const handleOpenAccount = () => {
    setAccount(!account);
  };

  return (
    <div className="py-3 bg-gradient-to-r from-black to-red-800">
      <div className="flex flex-col lg:flex-row gap-y-1 justify-between items-center w-full lg:w-[1170px] mx-auto px-5 lg:px-0">

        <div className="w-full lg:w-[350px] flex justify-between items-center">

          <div className="flex items-center gap-1 text-white text-xs lg:text-sm min-w-[120px] lg:min-w-max">
            <FaPhoneAlt className="text-Primary" />
            <p className="hover:text-Primary"> +880-1711223344 </p>
          </div>

          <div className="flex items-center gap-1 text-white text-xs lg:text-sm">
            <MdOutlineMail className="text-Primary" />
            <p className="hover:text-Primary"> mail@gmail.com</p>
          </div>

          <div className="flex items-center gap-1 text-white text-xs lg:text-sm">
            <MdLocationPin className="text-Primary" />
            <p className="hover:text-Primary">USA</p>
          </div>

        </div>
 
        <div className="w-full lg:w-[350px] flex justify-between items-center">
          <div className="flex items-center gap-1 text-white text-sm cursor-pointer min-w-[120px] lg:min-w-max">
            <BiDollar className="text-Primary" />
            <p className="hover:text-Primary"> USD </p>
          </div>

          <button
            onClick={() => handleOpenAccount()}
            className="flex items-center gap-1 text-white text-sm relative accountSetting cursor-pointer"
          >
            <MdLockOutline className="text-Primary" />
            <p className="hover:text-Primary"> Account </p>

            {account && (
              <div className="w-[150px] h-[130px] bg-black absolute top-6 left-[-40px] z-[99] flex items-center p-4 accountCont">
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a
                      href=""
                      className="flex items-center gap-x-1 hover:text-Primary cursor-pointer"
                    >
                      <FaUser className="text-xs text-Primary" /> Aamin
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center gap-x-1 hover:text-Primary cursor-pointer"
                    >
                      <RiLoginCircleLine className="text-xs text-Primary" />{" "}
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center gap-x-1 hover:text-Primary cursor-pointer"
                    >
                      <IoMdPersonAdd className="text-xs text-Primary" /> Aamin
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </button>

          <Link
            to="/about-us"
            className="flex items-center gap-1 text-white text-sm cursor-pointer"
          >
            <IoIosInformationCircleOutline className="text-Primary" />
            <p className="hover:text-Primary">About Us</p>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default InfoNav;
