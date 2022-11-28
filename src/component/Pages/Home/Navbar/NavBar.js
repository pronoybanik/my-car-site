import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../../images/car-logo.jpg'

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuBar = <>
        <Link className="btn btn-ghost font-sans btn-sm mt-2" to='/'>Home</Link>
        <Link className="btn btn-ghost font-sans btn-sm mt-2" to='/spareparts'>Spare Parts</Link>
        <Link className="btn btn-ghost font-sans btn-sm mt-2" to='/dashboard'>Dash Board</Link>
        <Link className="btn btn-ghost font-sans btn-sm mt-2" to='/blogs'>Blog</Link>

        {
            user?.email ?
                <button className="font-serif font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary text-white btn-md" onClick={handelLogOut}>Log Out</button>
                :
                <>
                    <Link className="btn btn-ghost font-serif btn-sm mt-2" to='/login'>Log In</Link>
                    <Link className="btn btn-ghost font-serif btn-sm mt-2" to='/register'>SignUp</Link>
                </>
        }


    </>
    return (
        <div className='sticky top-0 z-50 '>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuBar
                            }
                        </ul>
                    </div>
                    <img src={logo} className='w-12' alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-serif">
                        CAR LEASE</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuBar
                        }
                    </ul>
                </div>

                <label htmlFor="drawer-box" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;

