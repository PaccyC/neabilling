import SearchBar from "../components/SearchBar"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";




const ManageUser = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col  w-full">
    <div className=" flex justify-between  mb-16">
     <div className=" flex flex-col w-full">
       <h1 className=" text-[#2B3674] font-semibold text-3xl">Manage User</h1>
        <h3 className="text-xl text-[#05CD99]">Lalitpur Branch</h3>

     </div>

     <SearchBar/>
    </div>
    <div className=" h-[70vh] bg-white shadow-md  p-4 rounded-xl">
     <h1 className=" text-[#a2adeb] text-2xl font-semibold mb-6">Add User</h1>
     <form className=" space-y-6">

     <div >
     <label className=" block first-line:text-[#2B3674]">SCNO.</label>
     <input 
           type="text"
           className=" mt-1 p-2 w-full border border-blue-500 rounded"
     />
     </div>
     <div>
       <label className=" block text-[#2B3674]">Full Name</label>
       <input 
           type="text"
           className="mt-1 p-2 w-full border border-blue-500 rounded" />
     </div>
     <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
       <div className=" relative">
         <label className=" block text-[#2B3674]">Address</label>
         <div className=" relative mt-1">
           <input 
              type="text"
              className=" p-2 w-full border border-blue-500 rounded" />
              <IoLocationSharp className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
         </div>
       </div>
       <div className=" relative">
         <label className=" block text-[#2B3674]">Phone No.</label>
         <div className=" relative mt-1">
           <input 
              type="number"
              className=" p-2 w-full border border-blue-500 rounded" />
              < FaPhoneAlt className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
         </div>
       </div>

     </div>
    
     <div className="relative">
       <label className="block text-[#2B3674]">Email</label>
       <div className=" relative mt-1">
       <input 
         type="email"
         className=" mt-1 p-2 w-full border border-blue-500 rounded" />
         < IoIosMail className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
      </div>   
     </div>
     <div className="relative">
       <label className="block text-[#2B3674]">Password</label>
       <div className=" relative mt-1">
       <input 
         type="password"
         className=" mt-1 p-2 w-full border border-blue-500 rounded" />
         < FaEye className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
      </div>   
     </div>
   
     <div className=" flex justify-end">
     <button
       type="submit"
       className="px-6 py-2 bg-[#4318FF] text-white rounded hover:bg-blue-600 right-3">
         Add
       </button>
       
      </div>

     </form>

    </div>



     
   </div>
  )
}

export default ManageUser
