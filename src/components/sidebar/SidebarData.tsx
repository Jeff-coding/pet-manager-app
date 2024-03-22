import { 
  LayoutGrid, 
  Database, 
  MonitorUp, 
  Settings2 
} from "lucide-react"

const SidebarMenu: any = [
  {
    link: '/',
    text: 'Dashboard',
    icon: <LayoutGrid className="w-4 h-4 mr-2" />
  },
  {
    link: '/entries',
    text: 'Data Entries',
    icon: <Database className="w-4 h-4 mr-2" />
  },
  {
    link: '/upload',
    text: 'Upload Files',
    icon: <MonitorUp className="w-4 h-4 mr-2" />
  },
  {
    link: '/settings',
    text: 'Settings',
    icon: <Settings2 className="w-4 h-4 mr-2" />
  }
]

export default SidebarMenu