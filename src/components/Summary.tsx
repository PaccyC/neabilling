
import { FaUsers, FaUserCheck } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

const Summary = () => {
  return (
    
    <div className="w-full h-[10vh] grid grid-cols-3 gap-8 mb-5">
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className="w-16 h-16 rounded-full bg-[#F4F7FE] flex items-center justify-center text-center mr-4">
        <FaUsers className="text-4xl text-[#4318FF]" />
      </div>
      <div>
        <h3 className="text-[#A3AED0]">Users</h3>
        <p className="text-2xl">45</p>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className="w-16 h-16 rounded-full bg-[#F4F7FE] flex items-center justify-center text-center mr-4">
        <MdOutlineAttachMoney className="text-4xl text-[#4318FF]" />
      </div>
      <div>
        <h3 className="text-[#A3AED0]">Total Payments</h3>
        <p className="text-2xl">Rs. 200,000</p>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className="w-16 h-16 rounded-full bg-[#F4F7FE] flex items-center justify-center text-center mr-4">
        <FaUserCheck className="text-4xl text-[#4318FF]" />
      </div>
      <div>
        <h3 className="text-[#A3AED0]">Active Users</h3>
        <p className="text-2xl">22</p>
      </div>
    </div>
  </div>
  )
}

export default Summary
