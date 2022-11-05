import { Link, Navigate } from "react-router-dom";

const menu = (user, logout, navigate) => {

    const handleLogout = () => {
        logout().then(response => navigate("/login"))
            .catch(error => console.log(error));
    }
    if (user) {
        return <>
            <li>
                <Link to="/order">Order</Link>
            </li>
            <li><span>{user?.displayName}</span></li>
            <li>
                <button onClick={handleLogout} className='btn text-white'>LogOut</button>
            </li>

        </>
    } else {
        return <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </>
    }
}

export default menu;