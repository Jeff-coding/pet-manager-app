import { 
  Gift, 
  LogOutIcon, 
  Plus, 
  Settings2Icon, 
  User2Icon 
} from "lucide-react"

const Menu = [
  {
    link: '/profile',
    text: 'Your profile',
    icon: <User2Icon className="w-4 h-4 mr-3 text-sky-500" />
  },
  {
    link: '/account/new',
    text: 'New Account',
    icon: <Plus className="w-4 h-4 mr-3 text-sky-500" />
  },
  {
    link: '/settings',
    text: 'Settings',
    icon: <Settings2Icon className="w-4 h-4 mr-3 text-sky-500" />
  },
  {
    link: '/delegates',
    text: 'Delegates',
    icon: <User2Icon className="w-4 h-4 mr-3 text-sky-500" />
  },
  {
    link: '/rewards',
    text: 'Rewards',
    icon: <Gift className="w-4 h-4 mr-3 text-sky-500" />
  },
  {
    link: '/logout',
    text: 'Logout',
    icon: <LogOutIcon className="w-4 h-4 mr-3 text-red-500" />
  },
]

export default Menu