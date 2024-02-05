import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { ImEye } from "react-icons/im";
import "./ProductCard.css";
import { addTocart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {

  const dispatch = useDispatch();

  const actionBtnStyle =
    "w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-red-600 transition-all duration-200";

  return (
    <div className="w-[260px] h-[380px] bg-white flex flex-col productcard hover:border-[3px] hover:border-red-600 border border-slate-200">
      
      <Link to={`/products/${item?.id}`} className="h-1/2">
        <img  src={item?.image}  alt="" className="w-full h-full object-contain"
        />
      </Link>

      <Link to={`/products/${item?.id}`} className="h-1/2 w-full flex flex-col justify-center items-center bg-white z-[99]">

        <p className="uppercase font-thin text-sm">Ladies Wears</p>
        <p className="uppercase font-medium mt-1 text-center">{item?.title?.length <= 30 ? item?.title : item?.title?.slice(0, 30)}</p>
        <p className="text-[20px] font-bold text-red-700 mt-1">
          {item?.price}
          <span className="text-[16px] font-normal text-slate-700 line-through">
            $110.00
          </span>
        </p>

        <div className="mt-2 flex items-center">
          <div className="w-[60px] h-[1px] bg-slate-400" />
          <div className="flex items-center text-sm text-slate-500">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div className="w-[60px] h-[1px] bg-slate-400" />
        </div>

        <div className="flex items-center gap-x-5 mt-5">
          <div className={`${actionBtnStyle} heartConta`}>
            <FaRegHeart />
            <div className="heartBtn">
              <p className="text-white flex justify-center items-center text-sm bg-black w-[140px] h-[30px]">
                Add To WishList
              </p>
            </div>
          </div>

          <div className={`${actionBtnStyle} heartConta`}>
            <FaArrowRightArrowLeft />
            <div className="heartBtn">
              <p className="text-white flex justify-center items-center text-sm bg-black w-[140px] h-[30px]">
                Add To Compare
              </p>
            </div>
          </div>

          <div className={`${actionBtnStyle} heartConta`}>
            <ImEye />
            <div className="heartBtn">
              <p className="text-white flex justify-center items-center text-sm bg-black w-[140px] h-[30px]">
                Quick View
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="addTocartBtn flex justify-center items-center">
        <button onClick={()=>(dispatch(addTocart(item)), toast.success("Added To Cart"))} className="text-white px-7 py-[5px] lg:py-[7px] rounded-[30px] bg-red-700 uppercase font-medium flex justify-center items-center gap-2 hover:bg-white hover:border-red-600 border-2 border-transparent hover:text-red-600 transition-transform duration-200">
          <div className="cartIcon">
            <CgShoppingCart />
          </div>
          <p>Add To Cart</p>
        </button>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="w-[50px] border-2 border-red-600 flex justify-center items-center text-xs text-red-600 font-semibold">
          -30%
        </div>
        <div className="w-[50px] border-2 border-red-600 flex justify-center items-center bg-red-600 text-white uppercase text-xs">
          New
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
