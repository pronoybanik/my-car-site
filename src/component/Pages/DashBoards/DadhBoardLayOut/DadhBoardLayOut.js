import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Home/Navbar/NavBar';

const DadhBoardLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer">
                <input id="drawer-box" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-box" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My order</Link></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DadhBoardLayOut;