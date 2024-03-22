import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import Menu from "./NavigationModel";

function NavigationMenuDropdown() {

  const menu = Menu;

  return (
    <>
      <DropdownMenu>

        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex items-center">
            <span className="font-semibold mr-4 text-right">Hello, John Doe</span>
            <Avatar>
              <AvatarImage src="https://jeffreydemesa.com/assets/logo.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56" align="end" sideOffset={30}>
          <DropdownMenuLabel className="flex items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://jeffreydemesa.com/assets/logo.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-2 flex items-stretch flex-col">
                <span className="block leading-4">John Doe</span>
                <span className="block leading-4 text-slate-400 font-normal">Administrator</span>
              </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {
            menu.map((item: any, index: number) => (
              <Fragment key={index}>
                { item.link == "/logout" && <DropdownMenuSeparator /> }
                <DropdownMenuItem asChild>
                  <Link to={item.link}>
                    {item.icon}
                    {item.text}
                  </Link>
                </DropdownMenuItem>
                { item.link == "/account/new" && <DropdownMenuSeparator /> }
              </Fragment>
            ))
          }
        </DropdownMenuContent>
        
      </DropdownMenu>
    </>
  )
}

export default NavigationMenuDropdown