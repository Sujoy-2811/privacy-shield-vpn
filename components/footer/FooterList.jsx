import React from "react";
import FooterListItem from "./FooterListItem";

function FooterList() {
  const linkList = [
    {
      title: "Product",
      list: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
    },
    {
      title: "Engage",
      list: [
        "Privacy Shield  ?",
        "FAQ",
        "Tutorials",
        "About Us",
        "Privacy",
        "Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Earn Money",
      list: ["Affiliate", "PricingBecome Partner"],
    },
  ];
  return (
    <div className=" flex space-x-12">
      {linkList.map((item) => (
        <FooterListItem key={item.title} {...item} />
      ))}
    </div>
  );
}

export default FooterList;
