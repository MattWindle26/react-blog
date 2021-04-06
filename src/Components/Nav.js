import logo from ".././logo.svg"

const Nav = ({ admin, loginStatus}) => {
    return (
        <nav className="flex flex_align-center flex_space-between">
            <img src={logo} />
            <ul className="flex">
                <li><a href="">Blog posts</a></li>
                {admin && <li><a href="">Admin</a></li>}
                {loginStatus && 
                    <><li><a href="">Profile</a></li><li><a href="">Logout</a></li></>
                || 
                <li><a href="" className="login">Login</a></li>}
            </ul>
        </nav>
    );
}
 
export default Nav;