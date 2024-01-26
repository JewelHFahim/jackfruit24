import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const btnStyle = "hover:border-b border-cyan-600 hover:text-cyan-600"
  return (
    <div className="z-[1000] absolute right-5">

      <button onClick={toggleDrawer}>
        <GiHamburgerMenu className="text-xl text-white" />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="z-[1000]"
      >
        <div className="bg-[#030212] h-full py-[50px] px-5 flex flex-col gap-y-10">

          <div>
           <h1 className="text-red-600 text-[20px] font-medium"> Jackfruit24.com</h1>
          </div>

          <ul className="text-white  flex flex-col gap-y-5 w-full">
            <li className={btnStyle}><a href="#!">Home</a></li>
            <li className={btnStyle}><a href="#!">Womens</a></li>
            <li className={btnStyle}><a href="#!">Mens</a></li>
          </ul>

        </div>
      </Drawer>


    </div>
  );
};

export default MobileMenu;
