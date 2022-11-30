import {Outlet} from "react-router-dom"
import UserProvider from "./context/UserProvider"
import NavBar from "./NavBar"

const MainApp = () => {
  return (
    <UserProvider>
      <div className="m-3">
        <NavBar/>
        <hr/>
        <div>
          <Outlet/>
        </div>
      </div>
    </UserProvider>
  )
}

export default MainApp
