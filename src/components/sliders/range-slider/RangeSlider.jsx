import { useState } from "react";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(20000);
  const priceGap = 10;

  const handlePriceInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = parseInt(e.target.value);

    if (inputName === "min" && inputValue <= maxPrice - priceGap) {
      setMinPrice(inputValue);
    } else if (inputName === "max" && inputValue >= minPrice + priceGap) {
      setMaxPrice(inputValue);
    }
  };

  const handleRangeInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = parseInt(e.target.value);

    if (inputName === "min" && inputValue <= maxPrice - priceGap) {
      setMinPrice(inputValue);
    } else if (inputName === "max" && inputValue >= minPrice + priceGap) {
      setMaxPrice(inputValue);
    }
  };

  //   const calculateRangeStyles = () => {
  //     const leftPercentage = (minPrice / 10000) * 100;
  //     const rightPercentage = 100 - (maxPrice / 10000) * 100;
  //     return { left: `${leftPercentage}%`, right: `${rightPercentage}%` };
  //   };

  return (
    <div className="w-[90%]">
      <h2 className="text-[20px] font-semibold uppercase">Price</h2>

      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center">
          <span className="mr-2">Min</span>
          <input
            type="number"
            name="min"
            value={minPrice}
            onChange={handlePriceInputChange}
            className="w-[80px] border border-slate-400"
          />
        </div>

        <div className="separator">-</div>

        <div className="flex items-center">
          <span className="mr-2">Max</span>
          <input
            type="number"
            name="max"
            value={maxPrice}
            onChange={handlePriceInputChange}
            className="w-[80px] border border-slate-400"
          />
        </div>
      </div>

      {/* <div className="slider h-5 mt-5 relative bg-gray-300 rounded">
          <div className="progress h-full bg-blue-500 rounded" style={calculateRangeStyles()}></div>
        </div> */}

      <div className="relative mt-4">
        {/* <input type="range" name="min" min="0" max="10000" value={minPrice} step="100" 
          onChange={handleRangeInputChange} className="range-min absolute w-full h-5"/> */}

        <input
          type="range"
          name="max"
          min="0"
          max="10000"
          value={maxPrice}
          step="100"
          onChange={handleRangeInputChange}
          className="absolute w-full h-2"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
