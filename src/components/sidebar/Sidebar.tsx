import { NavLink } from "react-router-dom";
import './Sidebar.css';
import SidebarMenu from "./SidebarData";
import Menu from "./SidebarModel";

function Sidebar() {

  const menus = SidebarMenu;

  return ( 
    <>
      <nav className="sidebar__nav flex flex-col items-stretch gap-1 lg:w-56">
        {
          menus.map((item: Menu, index: number) => (
            <NavLink to={item.link} key={index} className="px-3 h-9 font-semibold flex items-center rounded-md text-sm hover:bg-slate-50 transition-all">
              {item.icon} {item.text}
            </NavLink>
          ))
        }
      </nav>
    </>
  )
}

export default Sidebar;