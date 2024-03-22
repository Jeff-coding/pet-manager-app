import { useState } from 'react'
import navLogo from '../../assets/logo.svg'
import { Button } from '../ui/button'
import NavigationMenuDropdown from './NavigationMenuDropdown';

function Navigation(props: any) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const changeStatus = () => {
    console.log(isLoggedIn);
    setIsLoggedIn((login: boolean) => !login)
  }
  
  return (
    <>
        <div className="bg-white shadow-md shadow-slate-200 py-6" {...props} >
            <div className="container flex items-center justify-between">
                <img src={navLogo} alt="" />
                { !isLoggedIn ?
                    <div className="ml-auto">
                      <Button variant="outline" className="mr-4">Register</Button>
                      <Button variant="default" onClick={changeStatus}>Sign In</Button>
                    </div>
                  :
                    <div className="ml-auto">
                      <NavigationMenuDropdown />
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default Navigation