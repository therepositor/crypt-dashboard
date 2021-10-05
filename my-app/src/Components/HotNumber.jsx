import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const HotNumber = () => {
    return (
        <div className='hot-number'>
            <h1>Hot Number</h1>
            <ul className='numbers'>
                <li index={uuidv4()} className='number'>
                    <div>
                        <span className='current-price'>Current Price</span>
                        <span className='usd'>$0.521 USD</span>
                    </div>
                    <div className='eth'>0.0001564ETH</div>
                </li>
                <li index={uuidv4()} className='number'>
                    <div>
                        <span className='current-price'>Price Floor</span>
                        <span className='usd'>$0.458 USD</span>
                    </div>
                    <div className='eth'>0.0001373ETH</div>
                </li>
                <li index={uuidv4()} className='number'>
                    <div>
                        <span className='current-price'>Price Floor</span>
                        <span className='usd'>$0.458 USD</span>
                    </div>
                    <div className='eth'>0.0001373ETH</div>
                </li>
                <li index={uuidv4()} className='number'>
                    <div>
                        <span className='current-price'>Price Floor</span>
                        <span className='usd'>$0.458 USD</span>
                    </div>
                    <div className='eth'>0.0001373ETH</div>
                </li>
                <li index={uuidv4()} className='number'>
                    <div>
                        <span className='current-price'>Price Floor</span>
                        <span className='usd'>$0.458 USD</span>
                    </div>
                    <div className='eth'>0.0001373ETH</div>
                </li>
            </ul>
            <button type='button' className='see-all'>See all</button>
        </div>
    )
}

export default HotNumber
