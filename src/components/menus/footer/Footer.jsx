import { FaLocationDot } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";






const Footer = () => {
  return (
    <div className="pl-[150px] pr-[280px] py-[40px] bg-gradient-to-r from-blue-400 to-red-300">
      <div className="flex items-center justify-between">
        <div className="w-[300px]">
          <h1 className="text-[22px] font-medium text-white uppercase">
            About Us
          </h1>
          <div className="mt-2 flex flex-col gap-y-3 text-slate-700">
            <p>
              {" "}
              We are a creative team in the world. Our main goal is customer
              satisfaction.{" "}
            </p>
            <div className="flex items-center gap-x-1 text-sm font-medium">
              {" "}
              <FaLocationDot className="text-red-600" /> <p>USA</p>{" "}
            </div>
            <div className="flex items-center gap-x-1 text-sm font-medium">
              {" "}
              <FaLocationDot className="text-red-600" /> <p>+880 1911209322</p>{" "}
            </div>
            <div className="flex items-center gap-x-1 text-sm font-medium">
              {" "}
              <FaLocationDot className="text-red-600" /> <p>info@gmail.com</p>{" "}
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <div className="flex justify-center items-center gap-x-2">
            <FaCcVisa  className="text-[40px]"/>
            <FaRegCreditCard  className="text-[40px]"/>
            <FaCcPaypal  className="text-[40px]"/>
            <FaCcMastercard  className="text-[40px]"/>
            <FaCcDiscover  className="text-[40px]"/>
            <SiAmericanexpress  className="text-[40px]"/>
          </div>
          <p className="text-xs mt-8">
            Copyright ©2024 All rights reserved | This Site is made with by
            onion24
          </p>
        </div>

        <div>
          <h1 className="text-[22px] font-medium text-white uppercase">
            Cagories
          </h1>
          <ul className="mt-4 text-sm font-medium flex flex-col gap-y-3 text-slate-800">
            <li>
              <a
                href=""
                className="hover:text-Primary hover:underline transition duration-200"
              >
                Mobiles
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-Primary hover:underline transition duration-200"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-Primary hover:underline transition duration-200"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-Primary hover:underline transition duration-200"
              >
                Kids
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-Primary hover:underline transition duration-200"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
