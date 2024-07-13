import React from "react";
import ButtonPrimary from "./button/ButtonPrimary";

function Subscribe() {
  return (
    <div className="flex justify-between mx-16 items-center">
      <div className="flex flex-col space-y-4 ">
        <h2 className="  w-[17ch] text-4xl">
          Subscribe Now for Get Special Features!
        </h2>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div>
        <ButtonPrimary>Subscribe Now</ButtonPrimary>
      </div>
    </div>
  );
}

export default Subscribe;
