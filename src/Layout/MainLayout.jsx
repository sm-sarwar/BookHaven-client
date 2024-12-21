import React from 'react';
import Navbar from '../page/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav className='font-mona max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='font-mona max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
            </main>    
                <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;