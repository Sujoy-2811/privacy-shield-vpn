import Image from "next/image";
import React from "react";
import Icon from "../Icon";

function FooterHeading() {
  const iconList = [
    { name: "facebook", src: "/assets/Icon/facebook.svg" },
    { name: "twitter", src: "/assets/Icon/twitter.svg" },
    { name: "instagram", src: "/assets/Icon/instagram.svg" },
  ];

  return (
    <div className="flex flex-col space-y-6 ">
      <div className="flex space-x-2 items-center">
        <Image
          src="/assets/Logo.png"
          alt="Privacy Shield VPN"
          width={50}
          height={50}
        />
        <h2>Privacy Shield VPN</h2>
      </div>
      <p className="w-[24ch]">
        Privacy Shield VPN is a private virtual network that has unique features
        and has high security.
      </p>
      <div className="flex space-x-2">
        {iconList.map((item) => (
          <Icon
            src={item.src}
            key={item.name}
            name={item.name}
            color="bg-white"
          />
        ))}
      </div>
      <p>©2024 - Privacy Shield VPN</p>
    </div>
  );
}

export default FooterHeading;
