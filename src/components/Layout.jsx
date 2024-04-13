import { Outlet } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
function Layout({children}) {
    return (
        <div className="layout">
        <Header/>
        <div className="d-flex nav-child">
          <NavBar/>
         <div className="content-container">
          <div className="content-child">
          {children}
         
          </div>
         
         
         </div>
        </div>
      </div>
    )
}

export default Layout
