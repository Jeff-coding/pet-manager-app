import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import DataEntries from "./views/data-entries/data-entries"
import UploadFile from "./views/UploadFile"
import Settings from "./views/Settings"
import Profile from "./views/Profile"
import Rewards from "./views/Rewards"
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from "./views/Dashboard"
import { ScrollArea } from "./components/ui/scroll-area"

function App() {

  return (
    <>
      <Navigation />
      <ScrollArea className="h-full">
        <div className="container flex items-start lg:gap-32 gap-16 mt-12 lg:flex-row flex-col">
          <div className="flex-none sticky top-12">
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
      </ScrollArea>
    </>
  )
}

export default App
