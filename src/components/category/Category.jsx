import "./Category.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Category = () => {

  const datas = [
    {
      title: "Laptop Collection",
      img: "https://onion24.com/img/shop01.png",
      src: ""
    },
    {
      title: "Accessories Collection",
      img: "https://onion24.com/img/shop03.png",
      src: ""
    },
    {
      title: "Cameras Collection",
      img: "https://onion24.com/img/shop02.png",
      src: ""
    },
  ]

  return (
    <div className="bg-gradient-to-t from-[#cbd7fe] to-slate-200 py-8 lg:py-12 shadow-2xl z-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 lg:w-[1170px] mx-auto">
        {datas.map((item, i) => (
          <div key={i} className="lg:w-full relative overflow-hidden CategoryMain shadow-md bg-white">
            <img src={item.img} alt="" className="w-full"/>

            <div className="category-cont absolute top-0 left-0 z-[999] flex px-4 py-8">
              
              <div>
                <h3 className="text-[25px] font-bold text-white w-[70%] leading-[30px]"> {item.title} </h3>

                <button className="mt-1 text-[15px] flex items-center gap-1 uppercase text-white"> Shop Now <IoArrowForwardCircleSharp /> </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
