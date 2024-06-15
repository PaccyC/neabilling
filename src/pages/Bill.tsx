import SearchBar from "../components/SearchBar"

const Bill = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col w-full p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <h1 className="text-[#2B3674] font-semibold text-3xl">Generate Bill</h1>
          <h3 className="text-xl text-[#05CD99]">Lalitpur Branch</h3>
        </div>
        <SearchBar />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#2B3674] text-2xl font-semibold">Bill</h1>
          <button className="bg-[#3965FF] text-white px-6 py-2 rounded-2xl font-semibold">Download</button>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow border border-[#E0E2E7]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F4F7FE]">
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">UID</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Name</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Address</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">SCNO.</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Units</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Date</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Due Date</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Due Amount</th>
                <th className="px-4 py-2 text-[#6F727A] text-left text-xl font-medium">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">212</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Amy Matthews</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Nakhu, Lalitpur</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">11634B</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">60 units</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">2023/3/20</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">2023/4/20</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Rs. 530</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Rs. 2630</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">212</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Amy Matthews</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Nakhu, Lalitpur</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">11634B</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">60 units</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">2023/3/20</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">2023/4/20</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Rs. 530</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Rs. 2630</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">212</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Amy Matthews</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Nakhu, Lalitpur</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">11634B</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">60 units</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">2023/3/20</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">2023/4/20</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Rs. 530</td>
                <td className="px-4 py-2 text-[#232325] text-xl font-semibold">Rs. 2630</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Bill;
