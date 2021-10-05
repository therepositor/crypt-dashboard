import React from 'react';
import Banner from './Banner';
import Slides from './Slides';
import Dashboard from './Dashboard';



const Main = () => {
    return (
        <div className='main'>
           <Banner /> 
           <Slides />
           <Dashboard />
        </div>
    )
}

export default Main
