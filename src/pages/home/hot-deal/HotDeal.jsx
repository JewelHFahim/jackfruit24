const HotDeal = () => {
  const times = [
    {
      value: "02",
      param: "days",
    },
    {
      value: "24",
      param: "hours",
    },
    {
      value: "59",
      param: "min",
    },
    {
      value: "49",
      param: "sec",
    },
  ];

  return (
    <div className="bg-slate-100 lg:px-[80px] lg:py-10 text-center">
      <div className=" flex flex-col  items-center justify-evenly w-full h-[450px] lg:h-[350px]"
        style={{
          backgroundImage: "url(https://onion24.com/img/hotdeal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-5 p-5">
          {
            times.map((item,i)=>(
              <div key={i} className="bg-red-700 w-[100px] h-[100px] rounded-full flex flex-col justify-center items-center text-white">
              <h3 className="text-[35px] font-bold leading-[30px]">{item.value}</h3>
              <p className="text-sm">{item.param}</p>
            </div>
            ))
          }
        </div>
        
        <div>
          <h1 className=" text-[34px] lg:text-[44px] font-semibold text-slate-800 leading-[35px] lg:leading-[50px]">
            HOT DEAL THIS WEEK
          </h1>
          <h2 className="text-[20px] font-medium lg:text-[30px] lg:font-light text-slate-800">
            NEW COLLECTION UP TO 50% OFF
          </h2>
        </div>

        <div className="mt-5 lg:mt-0">
          <button className="bg-red-700 px-10 py-2 text-lg font-medium text-white rounded-[20px] shadow-md hover:bg-red-600">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
