import React from 'react';
import Navbar from '../page/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <nav className='font-mona max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default MainLayout;