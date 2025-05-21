import { Link } from "react-router";

import { LOGO_URL } from "../utils/constant";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 text-2xl">
      <div>
        <img src={LOGO_URL} alt="" className="w-20 h-20" />
      </div>
      <div className="flex justify-between list-none w-96">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
      <div>Cart</div>
    </nav>
  );
};
export default Navbar;
