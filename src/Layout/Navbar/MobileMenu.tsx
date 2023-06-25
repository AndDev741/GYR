import menu from "../../assets/images/nav-menu.svg";
import x from "../../assets/images/nav-x.svg";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  setOpen: any;
};

export default function MobileMenu(props: MobileMenuProps) {
  const { open, setOpen } = props;
  return (
    <>
      <button
        onClick={() => setOpen((prevState: boolean) => !prevState)}
        className="sm:hidden"
      >
        <img src={open ? x : menu} alt="hamburger menu" className="w-12" />
      </button>

      {open && (
        <ul className="flex absolute right-4 top-16 flex-col gap-x-8 sm:hidden z-10">
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link to="/" className="text-lg font-bold text-primaryOrange ">
              Home
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link to="/about" className="text-lg font-bold text-primaryOrange">
              About Us
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link
              to="/courses"
              className="text-lg font-bold text-primaryOrange"
            >
              Courses
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link
              to="/community"
              className="text-lg font-bold text-primaryOrange"
            >
              Community
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link to="contact" className="text-lg font-bold text-primaryOrange">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
