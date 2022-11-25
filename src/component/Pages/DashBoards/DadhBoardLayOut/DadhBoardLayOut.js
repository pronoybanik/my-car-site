import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Home/Navbar/NavBar';

const DadhBoardLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <div className="drawer drawer-mobile">
                <input id="drawer-box" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-box" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My appointment</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
    
                        {/* {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctors'>Add Doctors</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>

                        } */}
                    </ul>
                </div>
            </div>
        </div>

       
    );
};

export default DadhBoardLayOut;