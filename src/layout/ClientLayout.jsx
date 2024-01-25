import { Outlet } from "react-router-dom";
import Footer from "../components/menus/footer/Footer";
import NavCombine from "../components/menus/navbar/NavCombine";
import CategoryMenu from "../components/category/CategoryMenu";

const ClientLayout = () => {
  return (
    <div>
      <NavCombine />
      <CategoryMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
