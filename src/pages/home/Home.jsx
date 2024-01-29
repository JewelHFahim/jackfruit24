import Category from "../../components/category/Category";
import MainSlider from "../../components/sliders/main-slider/main-slider/MainSlider";
import HotDeal from "./hot-deal/HotDeal";
import NewProducts from "./new-products/NewProducts";
import NewsLetter from "./news-letter/NewsLetter";
import TopSelling from "./top-selling/TopSelling";

const Home = () => {
  return (
    <div className="bg-Secondary">
      <div className="px-6 lg:px-10">
        <div className="bg-white rounded-xl pb-4 shadow-lg shadow-slate-600 p-2">
          <MainSlider />
          <Category />
          <NewProducts />
          <HotDeal />
          <TopSelling />
        </div>
      </div>

      <hr className="mt-5 lg:mt-10 lg:my-10 border-[1.5px]" />

      <NewsLetter />
    </div>
  );
};

export default Home;
