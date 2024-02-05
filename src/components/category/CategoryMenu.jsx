import { Link } from "react-router-dom";
import { addCategory } from "../../redux/features/products/productSlice";
import { useDispatch } from "react-redux";

const CategoryMenu = () => {
  const dispatch = useDispatch();

  const catStyle = "hover:text-blue-500 border-b border-transparent border-blue-500 transform duration-200 hover:border-blue-500";
  const handleCategory = (category) => {
    dispatch(addCategory(category))
  }

  return (
    <div className="bg-Optional py-4">
      <ul className="flex items-center gap-x-5 w-[1170px] mx-auto">
        <li> <Link to="/" className={catStyle}> Homes </Link> </li>
        <li onClick={()=>handleCategory("womens")} > <Link to="/products" className={catStyle}> Womens </Link> </li>
        <li onClick={()=>handleCategory("mens")}> <Link to="/products"  className={catStyle}> Mens </Link> </li>
      </ul>
    </div>
  );
};

export default CategoryMenu;
