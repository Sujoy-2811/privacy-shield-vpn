import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className=" border-orange-500 border-solid  border-2 capitalize rounded-2xl p-2 px-8 text-orange-500 hover:bg-orange-600 hover:text-white">
      {children}
    </button>
  );
};

export default ButtonOutline;
