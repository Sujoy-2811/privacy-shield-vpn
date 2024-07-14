import React from "react";
import ButtonPrimary from "./button/ButtonPrimary.jsx";

function Subscribe() {
  return (
    <div className="flex flex-col lg:flex-row  justify-between lg:mx-16 items-center space-y-8 lg:space-x-0">
      <div className="flex flex-col space-y-4 ">
        <h2 className="  w-[17ch] text-2xl lg:text-4xl">
          Subscribe Now for Get Special Features!
        </h2>
        <p>Let&apos;s subscribe with us and find the fun.</p>
      </div>
      <div>
        <ButtonPrimary>Subscribe Now</ButtonPrimary>
      </div>
    </div>
  );
}

export default Subscribe;
