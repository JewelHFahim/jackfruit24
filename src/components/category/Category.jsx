import "./Category.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Category = () => {
  return (
    <div className="bg-gradient-to-t from-[#cbd7fe] to-slate-200 px-[150px] py-12 shadow-2xl">
      <div className="grid grid-cols-3 gap-10">
        {[1, 2, 3].map((item, i) => (
          <div key={i} className="w-full relative overflow-hidden CategoryMain">
            <img
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2slMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full"
            />

            <div className="category-cont absolute top-0 left-0 z-[999] flex px-4 py-8">
              <div>
                <h3 className="text-[24px] font-medium text-white">
                  Laptop Collection
                </h3>
                <button className="flex items-center gap-1 uppercase text-white">
                  Shop Now <IoArrowForwardCircleSharp />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
