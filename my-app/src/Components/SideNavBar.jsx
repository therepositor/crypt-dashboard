import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Shape from './Icons/Shape';
import Comment from './Icons/Comment.jsx';


fontawesome.library.add(faChevronDown)

const SideNavBar = () => {
    return (
        <div>
            <nav>
               <ul>
                   <li index={uuidv4()}>
                        <button type='button'>
                            <span>
                                <span className='nav-icon'>
                                    <Shape />
                                 </span>
                                 <span>DASHBOARD</span>
                            </span>
                        </button>
                   </li>
                   <li index={uuidv4()}>
                        <button type='button'>
                            <span>
                                <span>Data, INSIGHTS & TOOLS</span>
                                <span className='nav-icon'>
                                    <FontAwesomeIcon icon='chevron-down' />
                                </span>
                            </span>
                        </button>   
                   </li>
                   <li index={uuidv4()}>
                        <button type='button'>
                            <span>
                                <span>LEARNING & GUIDES</span>
                                <span className='nav-icon'>
                                     <FontAwesomeIcon icon='chevron-down' />
                                </span>
                            </span>
                        </button>
                   </li>
                   <li index={uuidv4()}>
                        <button type='button'>
                            <span>
                                <span>CONTRACTS</span>
                                <span className='nav-icon'>
                                     <FontAwesomeIcon icon='chevron-down' />
                                </span>
                            </span>
                        </button>
                   </li>
                   <li index={uuidv4()}>
                        <button type='button'>
                            <span>
                                <span>EXTERNAL LINKS</span>
                                <span className='nav-icon'>
                                    <FontAwesomeIcon icon='chevron-down' />
                                </span>
                            </span>
                        </button>
                   </li>
                   <li index={uuidv4()}>
                        <button type='button'>
                            <span>
                                <span>OTHERS</span>
                                <span className='nav-icon'>
                                     <FontAwesomeIcon icon='chevron-down' />
                                </span>
                            </span>
                        </button>
                   </li>
               </ul> 
            </nav>
            <div className='action-buttons'>
                <button type='button'>10% Bonus on staking</button>
                <button type='button'>Connect metatask</button>
            </div>
            <div className='comment-icon'>
                <Comment />
            </div>
        </div>
    )
}

export default SideNavBar

