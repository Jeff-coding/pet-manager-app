import { NavLink } from "react-router-dom";
import { Database, MonitorUp, Settings2 } from "lucide-react";
import './sidebar.css';

interface Menu {
  link: string;
  text: string;
  icon: any;
}

function Sidebar() {

  const menus: any = [
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

  return ( 
    <>
      <nav className="sidebar__nav flex flex-col items-stretch gap-1 w-56">
        {
          menus.map((item: Menu, index: number) => (
            <NavLink to={item.link} key={index} className="p-2 font-semibold flex items-center rounded-md text-sm hover:bg-slate-50 transition-all">
              {item.icon} {item.text}
            </NavLink>
          ))
        }
      </nav>
    </>
  )
}

export default Sidebar;