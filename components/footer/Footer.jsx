import React from "react";
import FooterList from "./FooterList";
import FooterHeading from "./FooterHeading";

function Footer() {
  return (
    <footer className="flex flex-col lg:items-center lg:flex-row justify-between gap-12">
      <FooterHeading />
      <FooterList />
    </footer>
  );
}

export default Footer;
