import { FaSearch, FaMoon } from 'react-icons/fa';
import { LuSunMedium } from "react-icons/lu";

import image from '../assets/react.svg';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white shadow rounded-full p-2 w-full max-w-md mx-auto">
      <div className="relative flex-grow">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-[#F4F7FE] focus:outline-none text-[#8F9BBA] rounded-full"
        />
      </div>
      <FaMoon className="text-gray-400 mx-3" />
      <img
        src={image}
        alt="User profile image"
        className="w-10 h-10 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
