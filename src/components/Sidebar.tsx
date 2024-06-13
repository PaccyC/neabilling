import { NavLink } from 'react-router-dom';
import logo from '../assets/bulb-icon.png';
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: IoMdHome
  },
  {
    path: "/reports",
    title: "Reports",
    icon: FaUserAlt
  },
  {
    path: "/manage-user",
    title: "Manage User",
    icon: FaUserAlt
  },
  {
    path: "/generate-bill",
    title: "Generate Bill",
    icon: TbReportSearch
  },
  {
    path: "/profile",
    title: "Profile",
    icon: FaUserAlt
  }
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-72 bg-white shadow-lg">
      <div className='flex items-center justify-center h-20 border-b'>
        <img src={logo} alt="NEABILLING" className='h-20' />
        <h1 className='text-[#2B3674] text-2xl font-bold'>NEABILLING</h1>
      </div>
      {/* Nav links */}
      <nav className='flex flex-col flex-grow p-4'>
        {navLinks.map((link) => (
          <NavLink 
            key={link.path}
            to={link.path}
            className={({ isActive }) => `mb-4 p-2 text-gray-600 rounded-lg flex items-center ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
          >
            <link.icon className="mr-2" />
            <span className='ml-2'>{link.title}</span>
          </NavLink>
        ))}
      </nav>
      {/* Logout Button */}
      <div className='p-4 border-t'>
        <button className='w-full py-2 px-4 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 bg-gradient-to-r from-[#868CFF] to-[#4318F]'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
