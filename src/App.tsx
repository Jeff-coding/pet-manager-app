import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import DataEntries from "./views/DataEntries"
import UploadFile from "./views/UploadFile"
import Settings from "./views/Settings"
import Profile from "./views/Profile"
import Rewards from "./views/Rewards"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <>
      <Navigation />
      <div className="container flex items-start gap-4 mt-10">
        <Sidebar />
        <Routes>
          <Route path="/entries" element={<DataEntries />} />
          <Route path="/upload" element={<UploadFile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </div>
    </>
  )
}

export default App
