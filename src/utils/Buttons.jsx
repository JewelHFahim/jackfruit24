const Buttons = ({ handleActive, active, condition, children }) => {
    return (
      <button
        className={`border py-2  px-2 lg:px-6 min-w-max ${active === condition ? `bg-red-900 text-white border border-red-900` : ""}`}
        onClick={() => handleActive(condition)}
      >
        {children}
      </button>
    );
  };
  
  export default Buttons;
  