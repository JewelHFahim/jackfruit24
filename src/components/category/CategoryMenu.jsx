const CategoryMenu = () => {
  const catStyle =
    "hover:text-blue-500 border-b border-transparent border-blue-500 transform duration-200 hover:border-blue-500";

  return (
    <div className="bg-Optional py-4">
      <ul className="flex items-center gap-x-5 w-[1170px] mx-auto">
        <li>
          <a href="" className={catStyle}>
            Homes
          </a>
        </li>
        <li>
          <a href="/products" className={catStyle}>
            Womens
          </a>
        </li>
        <li>
          <a href="" className={catStyle}>
            Mens
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryMenu;
