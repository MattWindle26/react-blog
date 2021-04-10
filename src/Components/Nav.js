import logo from ".././logo.svg"
import { Link } from "react-router-dom"

const Nav = ({ admin, loginStatus}) => {
    return (
        <nav className="flex flex_align-center flex_space-between">
            <img src={logo} />
            <ul className="flex">
                <li><Link to="/">Blog posts</Link></li>
                {admin && <li><Link to="/newpost">Add new post</Link></li>}
                {loginStatus && 
                    <><li><a href="">Profile</a></li><li><a href="">Logout</a></li></>
                || 
                <li><a href="" className="login">Login</a></li>}
            </ul>
        </nav>
    );
}
 
export default Nav;