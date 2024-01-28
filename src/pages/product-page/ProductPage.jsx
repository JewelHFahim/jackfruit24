import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";
import ProductCard from "../../components/product-card/ProductCard";

const ProductPage = () => {
  return (
    <div className="bg-Secondary px-6 lg:px-10">
      <div className="bg-white rounded-xl px-[100px] py-[50px] shadow-lg shadow-slate-600  flex min-h-screen">

        {/* =========================>> LEFT/FILTER CONTENT <<========================== */}
        <div className="w-[30%] pl-10">
          <div>
            <h2 className="text-[20px] font-semibold uppercase">CATEGORIES</h2>
            <ul className="mt-4 flex flex-col gap-y-2 text-sm">
              <li> <a href="">Womens (11)</a> </li>
              <li> <a href="">Mens (12)</a> </li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-[20px] font-semibold uppercase">Price</h2>
            <div>
                range
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-[20px] font-semibold uppercase">Brand</h2>
            <ul className="mt-4 flex flex-col gap-y-2 text-sm">
              <li> <a href="">GAP</a> </li>
              <li> <a href="">OLD NAVY</a> </li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-[20px] font-semibold uppercase">Top Selling</h2>
            <div>card1 card2</div>
          </div>
        </div>

        {/* ===========================>> PRODUCT CONTENT <<============================ */}
        <div className="w-[70%] flex flex-col justify-between">
          <div className="h-[80px] flex items-start justify-between ">
            <div className="flex items-start gap-x-4 ">
              <div className="flex items-center gap-x-1 ">
                <p className="uppercase text-sm font-medium">Sort By:</p>
                <select data-te-select-init className=" w-[100px] h-[35px] px-2 border border-slate-300">
                  <option value="1">Popular</option>
                  <option value="2">Position</option>
                </select>
              </div>

              <div className="flex items-center gap-x-1 ">
                <p className="uppercase text-sm font-medium">Show:</p>
                <select data-te-select-init className="w-[60px] h-[35px] px-2 border border-slate-300">
                  <option value="1">20</option>
                  <option value="2">50</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-x-4">
              <button className="border p-3"> <TfiLayoutGrid3Alt /> </button>
              <button className="border p-3"> <FaThList /> </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[45px] gap-y-8">
              {Array.from({ length: 9 }).map((item, i) => (
                <div key={i}>
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-300 h-[80px]">Pagination</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
