import Category from "../../components/category/Category";
import MainSlider from "../../components/sliders/main-slider/MainSlider";
import HotDeal from "./hot-deal/HotDeal";
import NewProducts from "./new-products/NewProducts";

const Home = () => {
  return (
    <div className="bg-Secondary px-10">
      <div className="bg-white rounded-2xl">
        <MainSlider />
        <Category />
        <NewProducts />
        <HotDeal />
      </div>
    </div>
  );
};

export default Home;
