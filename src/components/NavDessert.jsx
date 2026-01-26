import { NavLink } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from "react";
const NavDessert = () =>{
    const[isOpen,setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/">
                        Bite Cravings
                    </NavLink>
            </div>
            <div className="bars" onClick={toggleMenu}>
                {isOpen? <FaTimes/>:<FaBars/>}
            </div>
            <ul className={isOpen?"nav-links open": "nav-links"}>
                <li>
                    <NavLink to="/" onClick={toggleMenu}
                    className={({isActive}) => (isActive? "active": "")}>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" onClick={toggleMenu}
                    className={({isActive}) => (isActive? "active": "")}>
                        Menu</NavLink>
                </li>
            
                <li>
                    <NavLink to="/about"onClick={toggleMenu}
                    className={({isActive}) => (isActive? "active": "")}>
                        About</NavLink>
                </li>
            </ul>

        </nav>
    )

}
export default NavDessert;