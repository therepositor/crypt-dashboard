import React from 'react';
import { NavLink } from 'react-router-dom';
import MyAccountIcon from './Icons/MyAccountIcon'
const MyAccount = () => {
    return (
        <div>
            <span className='my_account_icon'>
                <MyAccountIcon />
            </span>
            <span>
                <NavLink to='./my_account'>My Account</NavLink>
            </span>
        </div>
    )
}

export default MyAccount
