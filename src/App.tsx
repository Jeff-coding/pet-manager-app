import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import DataEntries from "./views/DataEntries"
import UploadFile from "./views/UploadFile"
import Settings from "./views/Settings"
import Profile from "./views/Profile"
import Rewards from "./views/Rewards"
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from "./views/Dashboard"

function App() {

  return (
    <>
      <Navigation />
      <div className="container flex items-start lg:gap-32 gap-16 mt-10 lg:flex-row flex-col">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/entries" element={<DataEntries />} />
            <Route path="/upload" element={<UploadFile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
