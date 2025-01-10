import React from 'react';
import { Outlet, Link } from 'react-router';

const AppLayout = () => {
    return (
        <div className='h-svh w-svw bg-bg-slate-300'>

            <nav className='bg-white p-5 flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/post/5'>Post</Link>
                <Link to='/products'>Products</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout