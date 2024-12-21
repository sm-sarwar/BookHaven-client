import React from 'react';
import Slider from './slider';
import TestimonialSlider from './Testimonial';
import Statistics from './Statistics';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TestimonialSlider></TestimonialSlider>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;