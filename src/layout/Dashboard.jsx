import { FaAd, FaEnvelope, FaHome, FaMoneyBill, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaDisplay, FaKitchenSet } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 gap-4 pt-12">
                    {
                        isAdmin ? <>
                            <li><NavLink className='btn' to='/dashboard/adminhome'><FaDisplay className="h-6 w-6" />Admin Dashboard</NavLink></li>
                            <li><NavLink className='btn' to='/dashboard/additem'><FaUtensils className="h-6 w-6" />Add Item</NavLink></li>
                            <li><NavLink className='btn' to='/dashboard/manageitems'><FaKitchenSet className="h-6 w-6" />Manage Items</NavLink></li>
                            <li><NavLink className='btn' to='/dashboard/cart'><FaShoppingCart className="h-6 w-6" />My Cart</NavLink></li>
                            <li><NavLink className='btn' to='/dashboard/paymenthistory'><FaMoneyBill className="h-6 w-6" />Payments</NavLink></li>
                            <li><NavLink className='btn' to='/dashboard/users'><FaUser className="h-6 w-6" />All Users</NavLink></li>
                        </> :
                            <>
                                <li><NavLink className='btn' to='/dashboard/userhome'><FaDisplay className="h-6 w-6" />Dashboard</NavLink></li>
                                <li><NavLink className='btn' to='/dashboard/cart'><FaShoppingCart className="h-6 w-6" />My Cart</NavLink></li>
                                <li><NavLink className='btn' to='/dashboard/paymenthistory'><FaMoneyBill className="h-6 w-6" />Payments</NavLink></li>
                                <li><NavLink className='btn' to='/dashboard/review'><FaAd className="h-6 w-6" />Add Review</NavLink></li>
                            </>
                    }

                    {/* Shared NavLinks */}
                    <div className="divider"></div>
                    <li><NavLink className='btn' to='/'><FaHome className="h-6 w-6" />Home</NavLink></li>
                    <li><NavLink className='btn' to='/menu'><FaSearch className="h-6 w-6" />Menu</NavLink></li>
                    <li><NavLink className='btn' to='/dashboard/contact'><FaEnvelope className="h-6 w-6" />Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 md:py-16 md:px-32">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;