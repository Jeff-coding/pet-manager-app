import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { GiftIcon, LogOutIcon, Settings2Icon, User2Icon } from "lucide-react"

function MenuNavigation() {
  return (
    <>
      <DropdownMenu>

        <DropdownMenuTrigger asChild className="cursor-pointer">
          <div className="flex items-center">
            <span className="font-semibold mr-4 text-right">Hello, John Doe</span>
            <Avatar>
              <AvatarImage src="https://jeffreydemesa.com/assets/logo.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-56" align="end" sideOffset={30}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <GiftIcon className="w-4 h-4 mr-3 text-blue-600" />
            Rewards
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User2Icon className="w-4 h-4 mr-3 text-blue-600" />  
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2Icon className="w-4 h-4 mr-3 text-blue-600" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon className="w-4 h-4 mr-3 text-blue-600" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
        
      </DropdownMenu>
    </>
  )
}

export default MenuNavigation