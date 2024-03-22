import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Gift, LogOutIcon, Plus, Settings2Icon, User2Icon, UsersRound } from "lucide-react"
import { Link } from "react-router-dom"

function NavigationMenuDropdown() {
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
          <DropdownMenuItem asChild>
            <Link to="/rewards">
              <User2Icon className="w-4 h-4 mr-3 text-sky-500" />
              Your profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/profile">
              <Plus className="w-4 h-4 mr-3 text-sky-500" />  
              New Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/settings">
              <Settings2Icon className="w-4 h-4 mr-3 text-sky-500" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings">
              <UsersRound className="w-4 h-4 mr-3 text-sky-500" />
              Delegates
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings">
              <Gift className="w-4 h-4 mr-3 text-sky-500" />
              Rewards
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon className="w-4 h-4 mr-3 text-sky-500" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
        
      </DropdownMenu>
    </>
  )
}

export default NavigationMenuDropdown