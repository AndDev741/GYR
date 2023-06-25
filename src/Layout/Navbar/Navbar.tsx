import { useState } from "react";
import { Link } from "react-router-dom";

import user from "../../assets/images/nav-user.svg";
import logo from "../../assets/images/nav-logo.svg";
import facebook from "../../assets/images/nav-facebook.svg";
import twitter from "../../assets/images/nav-twitter.svg";
import linkedin from "../../assets/images/nav-linkedin.svg";
import glass from "../../assets/images/nav-search.svg";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[7rem] bg-headerGrey z-50">
      <nav className="flex relative justify-between items-center h-full w-[90%] mx-auto">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[50px] sm:w-[55px]" />
        </Link>
        <ul className="hidden gap-x-8 sm:flex">
          <li>
            <Link to="/about" className="text-headerLink text-lg">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/workshop" className="text-headerLink text-lg">
              Workshop
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-headerLink text-lg">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-headerLink text-lg">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="hidden items-center gap-x-8 sm:flex">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <button className="w-[36px]">
            <img src={glass} alt="magnifying glass" className="w-full" />
          </button>
          <button>
            <img src={user} alt="user icon" />
          </button>
        </div>

        {/* mobile menu */}
        {/* <MobileMenu open={open} setOpen={setOpen} /> */}
      </nav>
    </header>
  );
}
