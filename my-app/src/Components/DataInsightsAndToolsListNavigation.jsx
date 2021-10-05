import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PricingAndMarkets from './Icons/PricingAndMarkets';
import StakingAndHolding from './Icons/StakingAndHolding';
import LadderStaker from './Icons/LadderStaker';
import Penalties from './Icons/Penalties';
import TopList from './Icons/TopList';
import News from './Icons/News';
import MyAccountIcon from './Icons/MyAccountIcon';
import { NavLink } from 'react-router-dom';

const DataInsightsAndToolsListNavigation = () => {
    return (
        <ul className='data-navigation'>
            <li index={uuidv4()}>
                <NavLink>
                    <span className='data-navigation-icon'>
                        <PricingAndMarkets />
                    </span>
                    <span>Price & Market</span>
                </NavLink>
            </li>
            <li index={uuidv4()}>
                <NavLink>
                    <span className='data-navigation-icon'>
                        <StakingAndHolding />
                    </span>
                    <span>Staking & Holding</span>
                </NavLink>
            </li>
            <li index={uuidv4()}>
                <NavLink>
                    <span className='data-navigation-icon'>
                        <LadderStaker />
                    </span>
                    <span>Ladder Staker</span>
                </NavLink>
            </li>
            <li index={uuidv4()}>
                <NavLink to='./wise_supply'>
                    <span className='data-navigation-icon'>
                        <MyAccountIcon />
                    </span>
                    <span>Wise Supply</span>
                </NavLink>
            </li>
            <li index={uuidv4()}>
                <NavLink to='./penalties'>
                    <span className='data-navigation-icon'>
                        <Penalties />
                    </span>
                    <span>Penalties</span>
                </NavLink>
            </li>
            <li index={uuidv4()}>
                <NavLink to='./toplist'>
                    <span className='data-navigation-icon'>
                        <TopList />
                    </span>
                    <span>Toplist</span>
                </NavLink>
            </li>
            <li index={uuidv4()}>
                <NavLink to='./news'>
                    <span className='data-navigation-icon'>
                        <News />
                    </span>
                    <span>News</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default DataInsightsAndToolsListNavigation
