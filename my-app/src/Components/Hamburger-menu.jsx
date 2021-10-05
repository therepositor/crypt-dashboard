import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faBars)


const Hamburger = () => {
    return (
        <div className='hamburger-menu'>
            <FontAwesomeIcon icon="fa-bars" />
            
        </div>
    )
}
export default Hamburger 