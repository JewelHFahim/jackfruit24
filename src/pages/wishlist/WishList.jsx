const WishList = () => {
  return (
    <div className="w-[1170px] mx-auto p-10">
      <div className="flex justify-center items-center">
        <h3 className="text-2xl font-medium text-slate-900 uppercase underline">Wish List</h3>
      </div>

     <div className="flex flex-col gap-y-4">
      {
        [1,2,3].map((item,i)=>(
          <div key={i} className="flex items-center justify-between border-b pb-1">
          <div className="flex items-center gap-x-5">
            <div>
              <img
                src="https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg"
                alt=""
                className="w-[120px] h-[120px] object-cover"
              />
            </div>
  
            <div>
              <h2 className="text-lg font-medium">Product Name</h2>
              <p>Quantity: 4</p>
              <p>Price: $99</p>
            </div>
          </div>
  
          <div className="flex items-center gap-x-5">
            <button className="px-5 py-1 border border-red-600 text-red-600 hover:text-white hover:bg-red-600">
              Remove
            </button>
            <button className="border px-5 py-1 border-green-600 text-green-600 hover:text-white hover:bg-green-600">
              Add To Cart
            </button>
          </div>
        </div>
        ))
      }
     </div>

    </div>
  );
};

export default WishList;
