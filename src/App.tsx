import './index.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import ManageUser from './pages/ManageUser'
import GenerateBill from './pages/GenerateBill'
import Profile from './pages/Profile'
import Bill from './pages/Bill'
function App() {

  return (
    <Router>

      <MainLayout>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/manage-user' element={<ManageUser/>}/>
          <Route path='/generate-bill' element={<GenerateBill/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/generate-bill/bill' element={<Bill/>}/>
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
