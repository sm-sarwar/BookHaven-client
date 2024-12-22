import React from 'react';
import Slider from './slider';
import TestimonialSlider from './Testimonial';
import Statistics from './Statistics';
import BookCategory from './BookCategory';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <BookCategory></BookCategory>
            <TestimonialSlider></TestimonialSlider>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;