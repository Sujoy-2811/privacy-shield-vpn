import Image from "next/image";
import Link from "next/link";

import ButtonOutline from "../button/ButtonOutline";

const Nav = () => {
  return (
    // <nav className="hidden sm:inline">
    <nav className="flex justify-between items-center">
      {/*  logo */}
      <Link href="/">
        <Image
          src={"/assets/Logo.svg"}
          alt="PrivacySHield VPN"
          width={150}
          height={150}
        />
      </Link>
      {/* links */}
      <ul className="hidden lg:flex justify-between space-x-6 items-center">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Feature</Link>
        </li>
        <li>
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">Testimonial</Link>
        </li>
      </ul>

      {/* auth */}
      <div className="flex space-x-5 items-center">
        <Link href="/">Sign In</Link>
        <ButtonOutline>Sign Up</ButtonOutline>
      </div>
    </nav>
  );
};

export default Nav;
