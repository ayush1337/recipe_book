import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="pb-4 flex justify-between flex-col gap-2 md:flex-row">
      <Logo />
      <Link
        to="/search"
        className="bg-orange-100 rounded-full p-2 flex text-sm items-center gap-6 text-orange-600 font-semibold justify-between border border-orange-600 border-opacity-25 cursor-text"
      >
        <span className="opacity-90"> Search any recipe, ingredients...</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Link>
    </nav>
  );
};

export default Navbar;
