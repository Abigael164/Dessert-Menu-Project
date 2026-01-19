import { NavLink } from "react-router-dom";
const NavDessert = () =>{
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink style=
                    {{fontSize:"20px",fontStyle:"oblique",fontWeight:"bold"
                    }}>
                        Bite Cravings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" 
                    className={({isActive}) => (isActive? "active": "")}>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" 
                    className={({isActive}) => (isActive? "active": "")}>
                        Menu</NavLink>
                </li>
            
                <li>
                    <NavLink to="/about" 
                    className={({isActive}) => (isActive? "active": "")}>
                        About</NavLink>
                </li>
            </ul>

        </nav>
    )

}
export default NavDessert;