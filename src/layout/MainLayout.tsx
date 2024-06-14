import { ReactNode } from "react"
import Sidebar from "../components/Sidebar"

interface Props{
    children: ReactNode
}

const MainLayout  = ({children}:Props) => {
  return (
   <div className="flex">
    <Sidebar/>
    <div className="flex-grow p-6 bg-[#F4F7FE]">
        {children}
    </div>
   </div>
  )
}

export default MainLayout
