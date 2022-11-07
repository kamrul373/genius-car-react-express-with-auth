import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../context/AuthContextProvider';
const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleLogin()
            .then(data => {
                const user = data.user;
                const currentUser = {
                    email: user.email
                }
                fetch("https://genius-car-server-opal-iota.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem("token", data.accessToken)

                    })
                navigate(from, { replace: true });
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(response => {
                const user = response.user
                const currentUser = {
                    email: user.email
                }
                fetch("https://genius-car-server-opal-iota.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem("token", data.accessToken)
                    })

                navigate(from, { replace: true });
            })
            .catch(err => console.log(err));

    }
    return (
        <div className="hero">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-20 mt-8">
                <div className="text-center lg:text-left">
                    <img src={img} alt="login" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn">Login</button>
                        </div>
                        <div className='text-center'>
                            <h4 className='text-lg font-bold  my-3'>Social Login</h4>
                            <button onClick={handleGoogle} className='btn'>G</button>
                        </div>
                        <p className='text-center'>Dont have an account? <Link to="/signup" className='text-regal-orange font-bold'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;