import React from 'react';
import { NavLink } from 'react-router-dom';
import {v4 as uuidv4 } from 'uuid';
import BinanceLogo from './Icons/BinanceLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import BTCSpike from './Icons/BTCSpike';
import Ethereum from './Icons/Ethereum';

fontawesome.library.add(faEllipsisV)

const News = () => {
    return (
        <div className='news'>
            <h3>News</h3>
            <ul>
                <li index={uuidv4()}>
                    <NavLink to='./binance'>
                        <div className='binance-logo'>
                            <BinanceLogo />
                        </div>
                        <div>
                            <div><span>BINANCE</span><span>NEWS</span></div>
                            <p>Hallo bro anak wes piro saiki? wes kuliah urung?...</p>
                            <div>2 hours ago</div>
                        </div>
                    </NavLink>
                </li>
                <li index={uuidv4()}>
                <div className='binance-logo'>
                            <BinanceLogo />
                        </div>
                        <div>
                            <div>
                                <span>Lottie Marsh</span>
                                <span>Sent you a coin</span>
                                <span>
                                    <FontAwesomeIcon icon='fa-ellipsis-v' />
                                </span>
                            </div>
                            <p>Bro iki nggo tuku es anakmu yo, ojo dinggo judi neh!!</p>
                            <div>
                                <span>
                                    <span>+380.234</span>
                                    <span>LTC</span>
                                </span>
                                <span>
                                    <NavLink to='./open_my_wallet'>Open my wallet</NavLink>
                                </span>
                            </div>
                            <div>3 hours ago</div>
                        </div>
                </li>
                <li index={uuidv4()}>
                        <div className='binance-logo'>
                            <BinanceLogo />
                        </div>
                        <div>
                            <div><span>BTC</span><span>NEWS</span></div>
                            <p>Bitcoin baru saja menguat 5 poin kalau tidak salah iho</p>
                            <div>
                                <span className='btc-spike-container'>
                                    <BTCSpike />
                                </span>
                                <span>+39.69%</span>
                            </div>
                            <div>
                                <span>3 hours ago</span>
                                <span>
                                    <NavLink to='./trade_now'>Trade now</NavLink>
                                </span>
                            </div>
                        </div>
                </li>
                <li index={uuidv4()}>
                    <NavLink to='./ethereum'>
                    <div className='binance-logo'>
                            <Ethereum />
                        </div>
                        <div>
                            <div>
                                <span>ETHEREUM</span>
                                <span>NEWS</span>
                            </div>
                            <p>Besok jangan lupa mabar minecraft</p>
                            <div>2 hours ago</div>
                        </div>
                    </NavLink>
                </li>
            </ul>
            <button type='button' className='see-all'>See all</button>
        </div>
    )
}

export default News
