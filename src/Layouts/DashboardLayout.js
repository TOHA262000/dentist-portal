import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';

const DashboardLayout = () => {

    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-300 p-5"> 
                    <Outlet></Outlet>
                </div>
                <div className=" drawer-side">
                    <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                    <ul className="bg-white menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/feture'>feture</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;