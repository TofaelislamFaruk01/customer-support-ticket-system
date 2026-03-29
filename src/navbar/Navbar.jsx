import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="navbar max-w-7xl mx-auto">
        <div className=" w-full sm:w-1/2 navbar-start">
          <div className="dropdown">
            {/* Hamburger button for mobile */}
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Dropdown menu */}
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-none z-[1] mt-0 w-screen p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <a className=" text-md sm:text-xl text-black font-bold flex-1 ">CS - Ticket System</a>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex items-center">
            <ul className="menu menu-horizontal font-medium text-black items-center">
              <li>
                <a className="px-1 xl:px-4" href="#">Home</a>
              </li> 
              <li>
                <a className="px-1 xl:px-4" href="#">FAQ</a>
              </li>
              <li>
                <a className="px-1 xl:px-4" href="#">Changelog</a>
              </li>
              <li>
                <a className="px-1 xl:px-4" href="#">Blog</a>
              </li>
              <li>
                  <a className="px-1 xl:px-4" href="#">Download</a>
              </li>
              <li>
                <a className="px-1 xl:px-4" href="#">Contact</a>
              </li>
              <button className="btn text-white ml-1 border-none bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                + New Ticket
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;