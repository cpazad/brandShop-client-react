import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import companyLogo from "/yourcar_w.png";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/login"> Login </NavLink>
      </li>
      <li>
        <NavLink to="/registration"> Registration </NavLink>
      </li>
      <li>
        <NavLink to="/addproduct"> Add </NavLink>
      </li>
      <li>
        <NavLink to="/updateproduct"> Update </NavLink>
      </li>
      <li>
        <NavLink to="/test"> Test </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#f06426] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center items-center btn btn-ghost">
              <img
                className="w-7 sm:w-7"
                src={companyLogo}
                alt="Company logo"
              />
              <p className=" normal-case text-xl">YourCar</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {users && (
            <>
              <div className="flex justify-center items-center">
                <p>Welcome! {users.displayName}</p>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={users.photoURL} alt={users.displayName} />
                  </div>
                </label>
              </div>

              <Link to="/mycart">
                <a className="btn btn-sm btn-outline border-white text-white rounded-sm mr-2">
                  {" "}
                  <FaCartArrowDown></FaCartArrowDown>{" "}
                </a>
              </Link>
            </>
          )}
          {users ? (
            <button
              onClick={handleSignOut}
              className="btn rounded-sm btn-sm btn-outline border-white text-white"
            >
              {" "}
              Log Out{" "}
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn rounded-sm btn-sm btn-outline border-white text-white">
                {" "}
                Log In{" "}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
