import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import DataEntries from "./views/DataEntries"
import UploadFile from "./views/UploadFile"
import Settings from "./views/Settings"
import Profile from "./views/Profile"
import Rewards from "./views/Rewards"

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<DataEntries />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </>
  )
}

export default App
