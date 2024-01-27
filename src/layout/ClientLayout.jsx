import { Outlet } from "react-router-dom";
import Footer from "../components/menus/footer/Footer";
import NavCombine from "../components/menus/navbar/NavCombine";
import CategoryMenu from "../components/category/CategoryMenu";

const ClientLayout = () => {
  return (
    <div>
      <NavCombine />
      <div className="hidden lg:block">
        <CategoryMenu />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
