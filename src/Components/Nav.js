const Nav = () => {
    return (
        <nav className="flex flex_align-center flex_space-between">
            <img src="logo" />
            <ul className="flex">
                <li><a href="">Blog posts</a></li>
                <li><a href="">Admin</a></li>
            </ul>
        </nav>
    );
}
 
export default Nav;