const Login = () => {
  return (
    <main className="flex flex-row-reverse overflow-hidden">
      <div className=" hidden lg:flex w-[65%] relative">
        <img src="https://onion24.com/img/erik-mclean-nfoRa6NHTbU-unsplash.jpg" className="w-full h-screen object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full filterBg "></div>
      </div>

      <div className="py-7 flex-1 lg:flex lg:justify-center lg:items-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl"> Login </h3>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-7">

            <div>
              <label className="font-medium"> Email Address</label>
              <input type="email" required placeholder="email@gmail.com"
                className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent border focus:border-[#c77ff2] shadow-sm rounded-lg"/>
            </div>

            <div>
              <label className="font-medium">Password </label>
              <input type="password" required placeholder="Password"
              className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent border focus:border-[#c77ff2] shadow-sm rounded-lg"/>
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150 sbtBtn">
              Login
            </button>
          </form>

          <div className="flex justify-center mt-2">
            <p> Dont have an account? <a href="/register" className="font-medium hover:underline hover:text-blue-600"> Sign Up </a> </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
