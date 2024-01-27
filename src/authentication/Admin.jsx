import { IoIosArrowBack } from "react-icons/io";


const Admin = () => {
  return (
    <div>
      <section className="h-96 lg:h-screen font-poppins ">
        <div className="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
          <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
            <div className="absolute inset-0 lg:bg-[#00000066] "></div>
            <img
              src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hidden object-cover w-full h-full lg:block"
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="relative max-w-6xl px-4 mx-auto">
              <div className="max-w-xl mx-auto lg:max-w-5xl">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                    <h2 className="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl ">
                      Welcome and join Admin Panel
                    </h2>
                    <a href="/" className="text-lg text-left text-gray-200 dark:text-gray-300 hover:text-blue-700 underline flex items-center gap-x-1"> 
                    <IoIosArrowBack /> Back To Home!</a>
                  </div>

                  <div className="w-full px-4 lg:w-2/5">
                    <div className="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 ">
                      <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400 text-center"> ADMIN LOGIN </h2>

                      <form action="" className="p-0 m-0">

                        <div>
                          <input type="email" className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800"
                            name="" placeholder="Enter your email" />
                        </div>

                         <div className="relative flex items-center mt-5">
                              <input type="password" className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800"
                                name="" placeholder="Enter password"/>
                         </div>
                     


                        <button className="w-full px-4 py-3 mt-5 font-semibold text-gray-200 bg-blue-500 rounded-lg dark:bg-blue-500 hover:text-blue-200"
                          type="submit"> LOGIN
                        </button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
