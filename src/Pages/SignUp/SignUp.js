import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../context/AuthContextProvider';
const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(response => {
                const profile = {
                    displayName: name
                }
                updateUser(profile);
                console.log(response.user);
                navigate("/");
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="hero">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-20 mt-8">
                <div className="text-center lg:text-left">
                    <img src={img} alt="login" />
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='name' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn">Sign Up</button>
                        </div>
                        <p className='text-center'>Already have an account? <Link to="/login" className='text-regal-orange font-bold'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;