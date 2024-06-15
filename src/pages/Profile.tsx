import SearchBar from "../components/SearchBar"
import image from '../assets/Thomas Shelby.jpeg'
const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col  w-full">
    <div className=" flex justify-between  mb-16">
     <div className=" flex flex-col w-full">
       <h1 className=" text-[#2B3674] font-semibold text-3xl">Generate Bill</h1>
        <h3 className="text-xl text-[#05CD99]">Lalitpur Branch</h3>

     </div>

     <SearchBar/>
    </div>
    
    <div className=" h-[50vh] bg-white rounded-2xl w-[80%] p-4 overflow-hidden">
      <div className=" flex items-center justify-between p-6 bg-gradient-to-r from-[#868CFF] to-[#4318FF] text-white rounded-xl">
        <h1 className=" text-2xl font-semibold">Your Profile</h1>

      </div>
      <div className=" flex p-6">
        <div className=" flex-grow">
          <div className=" mb-4">
            <span className=" text-gray-500 font-semibold">Admin id:</span>
            <span className=" ml-2 text-gray-700">110A</span>
          </div>
          <div className=" mb-4">
            <span className=" text-gray-500 font-semibold">Name:</span>
            <span className=" ml-2 text-gray-700">Adela Parkson</span>
          </div>
          <div className=" mb-4">
            <span className=" text-gray-500 font-semibold">Address:</span>
            <span className=" ml-2 text-gray-700">Khumaltar,Lalitpur</span>
          </div>
          <div className=" mb-4">
            <span className=" text-gray-500 font-semibold">Contact No:</span>
            <span className=" ml-2 text-gray-700">111111111</span>
          </div>
          <div className=" mb-4">
            <span className=" text-gray-500 font-semibold">Email:</span>
            <span className=" ml-2 text-gray-700">adela@gmail.com</span>
          </div>

          <div className=" mb-4">
            <span className=" text-gray-500 font-semibold">Password:</span>
            <span className=" ml-2 text-gray-700">*********</span>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <img 
            src={image}
            alt=""
            className=" w-32 h-32 rounded-full border-4 border-white -mt-16 mb-12" />
             <button className=" mt-4 px-6 bg-blue-500 text-white rounded-lg h-8">Edit</button>
        </div>
      </div>
  

    </div>



     
   </div>
  )
}

export default Profile
