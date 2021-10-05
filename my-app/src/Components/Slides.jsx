import React from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';

const Slides = () => {
    
    return (
        <div className='slides'>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
            <SlideFour />
        </div>
    )
}

export default Slides
