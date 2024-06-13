import { NavLink  } from 'react-router-dom'
import logo from '../assets/bulb-icon.png'

const navLinks=[
    {
    path:"/dashboard",
    title:"Dashboard"
    },
    {
        path:"/reports",
        title:"Reports"
    },
     {
       path:"/manage-user",
       title:"Manage User"
      },
    {
       path:"/generate-bill",
       title:"Generate Bill"
      },
      {
        path:"/profile",
        title:"Profile"
       }  
]

const Sidebar = () => {
  return (
    <div className=" flex flex-col h-screen w-64 bg-white shadow-lg">
        <div className=' flex items-center justify-center h-20 border-b'>
            <img src={logo} alt="NEABILLING" className='h-12' />
            <h1>NEABILLING</h1>
        </div>
        {/* Nav links */}
        <nav className=' flex flex-col flex-grow p-4'>
            {navLinks.map((link)=>(

            <NavLink 
              key={link.path}
               to={link.path}
               className={({isActive})=>`mb-4 p-2 text-gray-600 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600':'hover:bg-gray-100'}`}>
                <span className='ml-2'>{link.title}</span>
               </NavLink>
            ))}
        </nav>

        {/* Logout Button */}

        <div className=' p-4 border-t'>
            <button className='w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700'>
                Logout
            </button>
        </div>
      
    </div>
  )
}

export default Sidebar
