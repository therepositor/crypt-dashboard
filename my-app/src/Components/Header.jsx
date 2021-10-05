import React from 'react';
import HeaderLogo from './Icons/HeaderLogo'
import Hamburger from './Hamburger-menu';
import TopNav from './TopNav';

const Header = () =>    {


    return (
            <header>
                <div className='logo-hamburger'>
                    <HeaderLogo />
                    <Hamburger />
                </div>
                <TopNav />
            </header>
    )
}
export default Header