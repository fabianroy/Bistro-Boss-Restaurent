import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Logged out');
            })
            .catch(error => {
                console.error(error);
            });
    }

    const navOptions =
        <>
            <NavLink to='/'><li><a>Home</a></li></NavLink>
            <NavLink to='/menu'><li><a>Menu</a></li></NavLink>
            <NavLink to='/shop'><li><a>Shop</a></li></NavLink>
            <NavLink to='/'><li>
                <button className="btn">
                    <CiShoppingCart className="h-6 w-6" />
                    <div className="badge">+0</div>
                </button>
            </li></NavLink>
        </>;

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="w-fit">
                                <img className="w-12 rounded-full border-2 border-white mr-4" src={user.photoURL} alt={user.displayName} title={user.displayName} />
                            </div>
                            <NavLink onClick={handleLogout}><a className="btn">Logout</a></NavLink>
                        </>
                            :
                            <>
                                <NavLink to='/login'><a className="btn">Login</a></NavLink>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;