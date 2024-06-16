import SearchBar from "../components/SearchBar"
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UsersDatailsPage = () => {
    const navigate= useNavigate()
    const users = [
        { uid: 112, name: "Mithlesh Kumar Singh", address: "Kritipur, Kathmandu", scno: "12358G", amount: "987569326" },
        { uid: 113, name: "Suron Maharjan", address: "Natole, Lalitpur", scno: "86523B", amount: "987569326" },
        { uid: 114, name: "Sandesh Bajracharya", address: "Bhinchhebahal, Lalitpur", scno: "78365D", amount: "987569326" },
        { uid: 115, name: "Subin Sedhai", address: "Baneshwor, Kathmandu", scno: "863265F", amount: "987569326" },
        { uid: 116, name: "Wonjala Joshi", address: "Bhaisepti, Lalitpur", scno: "459872B", amount: "987569326" },
        { uid: 117, name: "Numa Limbu", address: "Sampang Chowk,Dharan", scno: "742552A", amount: "987569326" },
        { uid: 118, name: "Nimesh Sthapit", address: "Newroad, Pokhara", scno: "74123B", amount: "987569326" },
        { uid: 119, name: "Samikshya Basnet", address: "Nakhipot, Lalitpur", scno: "741369P", amount: "987569326" },
        { uid: 120, name: "Sushant Kushwar", address: "Sinamangal, Kathmandu", scno: "75962K", amount: "987569326" },
        { uid: 120, name: "Hrishav Gajurel", address: "Khumaltar, Lalitpur", scno: "4596321A", amount: "987569326" },
        { uid: 121, name: "Tisha Joshi", address: "Ason, Kathmandu", scno: "752255E", amount: "987569326" },
        { uid: 122, name: "Mithlesh Kumar Singh", address: "Kritipur, Kathmandu", scno: "85269S", amount: "987569326" },
        { uid: 123, name: "Mithlesh Kumar Singh", address: "Kritipur, Kathmandu", scno: "85264D", amount: "987569326" },
        { uid: 124, name: "Mithlesh Kumar Singh", address: "Kritipur, Kathmandu", scno: "65235H", amount: "987569326" },
        { uid: 125, name: "Mithlesh Kumar Singh", address: "Kritipur, Kathmandu", scno: "566359B", amount: "987569326" },
        { uid: 126, name: "Mithlesh Kumar Singh", address: "Kritipur, Kathmandu", scno: "72639L", amount: "987569326" },
      ];
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col  w-full">
    <div className=" flex justify-between  mb-16">
     <div className=" flex flex-col w-full">
       <h1 className=" text-[#2B3674] font-semibold text-3xl">Generate Bill</h1>
        <h3 className="text-xl text-[#05CD99]">Lalitpur Branch</h3>

     </div>

     <SearchBar/>
    </div>

    <div className=" flex justify-end pr-12  mb-7">
        <button 
        onClick={()=>navigate('/manage-user')}
        className=" bg-[#3965FF] text-white px-4 rounded-xl h-[40px] font-semibold">Add User</button>
    </div>

    <div className=" h-[70vh] bg-white rounded-2xl pl-6 py-6">
         
       <div className=" flex flex-col">
        <h1 className=" text-[#2B3674]  text-2xl font-medium ">User Details</h1>
        <table className=" min-w-full divide-y divide-gray-200">
            <thead className=" bg-gray-50">
                <tr>
                    <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UID</th>
                    <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                    <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SCNO</th>
                    <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>

            </thead>
           <tbody className=" bg-white divide-y divide-gray-200">
            {users.map((user)=>(
                <tr key={user.uid}>
                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.uid}</td>
                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.address}</td>
                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.scno}</td>
                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.amount}</td>
                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className=" text-blue-600 hover:text-blue-900 mr-4">
                            <FiEdit/>
                        </button>
                        <button className=" text-red-600 hover:text-red-900 mr-4">

                            <FaRegTrashCan/>

                            </button>

                    </td>
                </tr>
            ))}
           </tbody>
        </table>
        </div>  

    </div>
   



     
   </div>
  )
}

export default UsersDatailsPage
