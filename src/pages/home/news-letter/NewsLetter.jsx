import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center p-5 py-14">

      <div className="relative flex">

        <div className="flex flex-col justify-center items-center z-[99]">
          <div>
            <h2 className="text-[25px] text-slate-800">
              Sign Up for the <span className="font-bold">OFFERUPDATES</span>
            </h2>
          </div>

          <div className="mt-8 flex justify-center items-center rounded-[20px] shadow-2xl ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-[380px] py-[7px] rounded-s-[20px] px-5"
            />
            <button className="w-[150px] rounded-e-[20px] bg-gradient-to-b from-blue-700 to-blue-500 py-[7px] font-smibold text-white font-bold flex items-center justify-center gap-x-1">
              <IoIosMail className="text-lg" />
              Subscribe
            </button>
          </div>

          <div className="mt-6 flex justify-center items-center gap-x-2">
            <div className="w-[38px] h-[38px] bg-white flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className="w-[38px] h-[38px] bg-white flex justify-center items-center">
              <FaTwitter />
            </div>
            <div className="w-[38px] h-[38px] bg-white flex justify-center items-center">
              <RiInstagramLine />
            </div>
            <div className="w-[38px] h-[38px] bg-white flex justify-center items-center">
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="absolute left-[-110px] top-2 z-[1]">
          <FiMail className="text-[190px] text-slate-200 rotate-[30deg]" />
        </div>

      </div>

    </div>
  );
};

export default NewsLetter;
