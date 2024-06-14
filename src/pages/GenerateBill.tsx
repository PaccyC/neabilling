import SearchBar from "../components/SearchBar"

const GenerateBill = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col  w-full">
     <div className=" flex justify-between  mb-16">
      <div className=" flex flex-col w-full">
        <h1 className=" text-[#2B3674] font-semibold text-3xl">Generate Bill</h1>
         <h3 className="text-xl text-[#05CD99]">Lalitpur Branch</h3>

      </div>

      <SearchBar/>
     </div>
     <div className=" h-8 bg-white">

     </div>



      
    </div>
  )
}

export default GenerateBill
