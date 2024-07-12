import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className=" border-orange-500 border-solid  border-2 capitalize rounded-xl p-1 text-orange-500 hover:bg-orange-600 hover:text-white">
      {children}
    </button>
  );
};

export default ButtonOutline;
