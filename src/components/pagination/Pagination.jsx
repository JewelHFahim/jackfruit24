
const Pagination = () => {
    return (
      
            <section className="flex items-center  bg-gray-100 font-poppins ">

        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">


            <div className="relative z-0 flex justify-center -space-x-px rounded-md">

                <a href="#"
                    className="px-4 py-2 font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 rounded-l-md hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                    Previous
                </a>
                <a href="#"
                    className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-800 dark:text-gray-300 ">
                    1 </a>
                <a href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50">
                    2 </a>
                <a href="#"
                    className="relative items-center hidden px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50 md:inline-flex">
                    3 </a>
                    
                <span
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </span>

                <a href="#"
                    className="relative items-center hidden px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50 md:inline-flex">
                    8 </a>
                <a href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50">
                    9 </a>
                <a href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50">
                    10 </a>
                <a href="#"
                    className="px-4 py-2 font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 rounded-r-md hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                    Next
                </a>
            </div>


        </div>


    </section>
       
    );
};

export default Pagination;