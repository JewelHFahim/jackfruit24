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
    <div className="bg-slate-100 px-[80px] py-10 text-center">
      <div
        className=" flex flex-col  items-center justify-evenly"
        style={{
          backgroundImage: "url(https://onion24.com/img/hotdeal.jpg)",
          width: "100%",
          height: "350px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-x-5">
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
          <h1 className="text-[44px] font-semibold text-slate-800 leading-[50px]">
            HOT DEAL THIS WEEK
          </h1>
          <h2 className="text-[30px] font-light">
            NEW COLLECTION UP TO 50% OFF
          </h2>
        </div>

        <div>
          <button className="bg-red-700 px-10 py-2 text-lg font-medium text-white rounded-[20px] shadow-md hover:bg-red-600">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
