import SearchBar from "../components/SearchBar"

const UsersDatailsPage = () => {
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
        <button className=" bg-[#3965FF] text-white px-4 rounded-xl h-[40px] font-semibold">Add User</button>
    </div>

    <div className=" h-[70vh] bg-white rounded-2xl pl-6 py-6">
         
       <div className=" flex flex-col">
        <h1 className=" text-[#2B3674]  text-2xl font-medium ">User Details</h1>
        <table className=""></table>
        </div>  

    </div>
   



     
   </div>
  )
}

export default UsersDatailsPage
