import { ReactNode } from "react"
import Sidebar from "../components/Sidebar"

interface Props{
    children: ReactNode
}

const MainLayout  = ({children}:Props) => {
  return (
   <div className="flex">
    <Sidebar/>
    <div className="flex-grow p-8 bg-gray-100">
        {children}
    </div>
   </div>
  )
}

export default MainLayout
