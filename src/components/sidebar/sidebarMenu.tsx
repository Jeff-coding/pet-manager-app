import { Database, MonitorUp, Settings2, Gift } from "lucide-react";

export const menu = [
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
  },
  {
    link: '/rewards',
    text: 'Rewards',
    icon: <Gift className="w-4 h-4 mr-2" />
  }
]