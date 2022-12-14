import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../assets/logo.svg"
import { AuthContext } from '../../../context/AuthContextProvider';
import menu from '../../../Utility/menu';
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-8 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        {menu(user, logout, navigate)}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {menu(user, logout, navigate)}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Header;