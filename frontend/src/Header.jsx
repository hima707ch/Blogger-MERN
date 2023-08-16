import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <header><h1 className="title">Blogger</h1> <div className="right" > 
                <NavLink className="nav-right" to = "/profile"> <h1>Profile</h1> </NavLink>   
                <NavLink className="nav-right" to = "/login"> <h1>Login</h1> </NavLink> 
                <NavLink className="nav-right" to = "/register"> <h1>Register</h1> </NavLink>
                </div> </header>
        </div>
    );
}

export default Header;