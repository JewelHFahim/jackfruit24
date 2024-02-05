import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";
import ProductCard from "../../components/product-card/ProductCard";
import PriceRangeSlider from "../../components/sliders/range-slider/RangeSlider";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/features/products/productSlice";
import { useProductListQuery } from "../../redux/features/products/productApi";
import TopSellingCard from "./TopSellingCard";

const ProductPage = () => {
  const { categ } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { data: products } = useProductListQuery();

  const filterProductsByCategory = (category) => {
    switch (category) {
      case "mens":
        return products?.filter((item) => item.category === "men's clothing");
      case "womens":
        return products?.filter((item) =>
          ["jewelery", "women's clothing"].includes(item.category)
        );
      case "kids":
        return products?.filter((item) => item.category === "electronics");
      default:
        return products?.filter((item) => item.category === "men's clothing");
    }
  };

  const filteredProducts = filterProductsByCategory(categ);
  const handleCategoryChange = (category) => {
    dispatch(addCategory(category));
  };

  return (
    <div className="bg-Secondary px-6 py-6 lg:px-10">

      <div className="bg-white rounded-xl px-[100px] py-[50px] shadow-lg shadow-slate-600  flex min-h-screen">
        {/* =========================>> LEFT/FILTER CONTENT <<========================== */}
        <div className="w-[30%] px-5">
          <div>
            <h2 className="text-[20px] font-semibold uppercase">CATEGORIES</h2>
            <ul className="mt-4 flex flex-col gap-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleCategoryChange("mens")}
                  className={`${
                    categ === "mens"
                      ? "border-b-2 border-Secondary text-Secondary font-medium"
                      : ""
                  }`}
                >
                  Mens Wears (12)
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleCategoryChange("womens")}
                  className={`${
                    categ === "womens"
                      ? "border-b-2 border-Secondary text-Secondary font-medium"
                      : ""
                  }`}
                >
                  Ladies Wears (11)
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleCategoryChange("kids")}
                  className={`${
                    categ === "kids"
                      ? "border-b-2 border-Secondary text-Secondary font-medium"
                      : ""
                  }`}
                >
                  Baby Toddler (7)
                </button>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <PriceRangeSlider />
          </div>

          <div className="mt-16">
            <h2 className="text-[20px] font-semibold uppercase">Brand</h2>
            <ul className="mt-4 flex flex-col gap-y-2 text-sm">
              <li>
                <a href="">GAP</a>
              </li>
              <li>
                <a href="">OLD NAVY</a>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-[20px] font-semibold uppercase">Top Selling</h2>
            <div className="flex flex-col gap-4 mt-4">
              {[1, 2, 3].map((item, i) => (
                <TopSellingCard key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ===========================>> PRODUCT CONTENT <<============================ */}
        <div className="w-[70%] flex flex-col justify-between">
          <div className="h-[80px] flex items-start justify-between ">
            <div className="flex items-start gap-x-4 ">
              <div className="flex items-center gap-x-1 ">
                <p className="uppercase text-sm font-medium">Sort By:</p>
                <select
                  data-te-select-init
                  className=" w-[100px] h-[35px] px-2 border border-slate-300"
                >
                  <option value="1">Popular</option>
                  <option value="2">Position</option>
                </select>
              </div>

              <div className="flex items-center gap-x-1 ">
                <p className="uppercase text-sm font-medium">Show:</p>
                <select
                  data-te-select-init
                  className="w-[60px] h-[35px] px-2 border border-slate-300"
                >
                  <option value="1">20</option>
                  <option value="2">50</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-x-4">
              <button className="border p-3">
                <TfiLayoutGrid3Alt />
              </button>
              <button className="border p-3">
                <FaThList />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[45px] gap-y-8">
              {filteredProducts?.map((item, i) => (
                <div key={i}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <Pagination />
          </div>
        </div>
      </div>

      <hr className="lg:my-8 border-[1.5px]" />

    </div>
  );
};

export default ProductPage;
