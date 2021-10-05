import React from 'react';
import Progress from './Progress';
import BarChart from './BarChart'
// import Histogram from './Histogram';
// import DailyPenalties from './DailyPenalties';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Progress />
            <BarChart />
            {/* <Histogram /> */}
            {/* <DailyPenalties /> */}
        </div>
    )
}

export default Dashboard
