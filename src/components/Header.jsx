import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/newledgerlogo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = ({ path }) => {
  return (
    <div className="w-full p-3 py-1 bg-black shadow-lg fixed top-0 z-50 h-[60px]">
      <div className="flex px-4 items-center justify-between">
        <Link to="/" className="text-white bg-black">
          <img
            src={logo}
            alt=""
            className="  w-[80px] h-[50px] cursor-pointer "
          />
        </Link>
        <span className="px-5 py-2  rounded-2xl text-white font-bold">
          <Link to={path}>
            <AiOutlineShoppingCart size={23} className="text-white" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
