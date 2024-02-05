import { useState } from "react";
import ImageSlider from "./img-slider/ImageSlider";
import Buttons from "../../utils/Buttons";
import { useGetSingleProductQuery } from "../../redux/features/products/productApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { addTocart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const [active, setActive] = useState("description");
  const { data: productDetails } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();


  const handleActive = (state) => {
    setActive(state);
  };

  return (
    <section className="overflow-hidden bg-white py-7 font-poppins0">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <ImageSlider productDetails={productDetails} />
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-3 ">
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                  New
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold md:text-3xl">
                 {productDetails?.title}
                </h2>
                <div className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500  bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500  bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500  bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 0 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs dark:text-gray-400 ">
                    (2 customer reviews)
                  </p>
                </div>
                <p className="max-w-md mb-6 text-gray-700"> {productDetails?.description} </p>
                <p className="inline-block mb-3 text-2xl font-bold text-red-700">
                  <span>${productDetails?.price}</span>
                  <span className="text-base font-normal text-gray-500 line-through">
                    ${Number(productDetails?.price) + Number(productDetails?.price)*.15}
                  </span>
                </p>
                <p className="text-green-6700 dark:text-green-600">
                  7 in stock
                </p>
              </div>

              <div className="flex items-center mb-6">
                <h2 className="w-16 mr-6 text-xl font-bold ">Colors:</h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 ">
                    <div className="w-6 h-6 bg-cyan-300"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400">
                    <div className="w-6 h-6 bg-green-300 "></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent hover:border-blue-400">
                    <div className="w-6 h-6 bg-red-200 "></div>
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <h2 className="w-16 text-xl font-bold">Size:</h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600">
                    XS
                  </button>
                </div>
              </div>

              <div className="w-32 mb-6">
                <label className="w-full text-lg font-semibold text-gray-700">
                  Quantity
                </label>
                <div className="relative flex flex-row w-full h-10 mt-2 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 border border-r-0 rounded-l outline-none cursor-pointer hover:bg-gray-200">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    className="flex justify-center items-center w-full font-semibold text-center text-gray-800 border outline-none focus:outline-none text-md"
                    placeholder="1"
                  />
                  <button className="w-20 h-full text-gray-700 border border-l-0 rounded-r outline-none cursor-pointer hover:bg-gray-200">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button  onClick={()=>(dispatch(addTocart(productDetails)), toast.success("Added To Cart"))} className="flex items-center justify-center w-full p-2 text-white bg-red-700 border-2 rounded-[20px] hover:bg-white border-red-800 hover:text-red-800 font-semibold transition-all duration-200 ease-in-out">
                    Add to Cart
                  </button>
                </div>
                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  <button className="flex items-center justify-center w-full p-2 text-white bg-red-700 border-2 rounded-[20px] hover:bg-white border-red-800 hover:text-red-800 font-semibold transition-all duration-200 ease-in-out">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center w-[75%] mx-auto">
        <section>
          <div className="flex justify-center items-center lg:gap-5">
            <div className="h-[2px] w-full bg-red-600" />

            <Buttons
              handleActive={handleActive}
              active={active}
              condition="description"
            >
              Description
            </Buttons>

            <Buttons
              handleActive={handleActive}
              active={active}
              condition="review"
            >
              Review
            </Buttons>

            <Buttons
              handleActive={handleActive}
              active={active}
              condition="shipping"
            >
              Shipping & Returns
            </Buttons>
            <div className="h-[2px] w-full bg-red-600" />
          </div>

          <div>
            {active === "description" && (
              <div className="my-5">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam pariatur molestiae deserunt nihil vel error sint aperiam
                  commodi est eum.
                </p>
              </div>
            )}

            {active === "review" && (
              <div className="my-5">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia dicta vel voluptates nobis nostrum, dolorem commodi
                  itaque animi excepturi asperiores facere doloremque, enim
                  alias a, sunt suscipit impedit voluptatibus accusamus in
                  voluptatem odit atque. Eos error repellendus, suscipit animi,
                  inventore voluptates quisquam soluta reprehenderit nisi ut
                  quaerat itaque nihil dignissimos!
                </p>
              </div>
            )}

            {active === "shipping" && (
              <div className="my-5">
                <p>
                  Free Shipping for products above 3000 AED. Shipment Charges
                  applied for products below 3000 AED. No returns for customized
                  products.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductDetails;
