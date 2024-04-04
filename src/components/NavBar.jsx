import {NavLink,Link} from 'react-router-dom'

function NavBar() {


    return (

        <nav className='mrGain-navBar'>
            <NavLink to="/">Intro</NavLink>
            <NavLink to="/Token">Token</NavLink>
            <NavLink to="/Lottery">Lottery</NavLink>
            <NavLink to="/Sponsors">Sponsors</NavLink>
            <NavLink to="/RoadMap">RoadMap</NavLink>
            <NavLink to="/Marketing">Marketing</NavLink>

        </nav>
   
    )
}

export default NavBar
