import React from "react";
import FooterList from "./FooterList";
import FooterHeading from "./FooterHeading";

function Footer() {
  return (
    <footer className="flex justify-between">
      <FooterHeading />
      <FooterList />
    </footer>
  );
}

export default Footer;
