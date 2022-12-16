import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSellers';
import NavBar from '../../Home/Navbar/NavBar';

const DadhBoardLayOut = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [sellers] = useSeller(user?.email) 
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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-serif">
                        <li className='mb-2'><Link to='/dashboard'>My appointment</Link></li>
                        {
                            sellers &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/feedback'>All FeedBack</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>


    );
};

export default DadhBoardLayOut;