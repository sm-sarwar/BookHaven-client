import React from 'react';

import TestimonialSlider from './Testimonial';
import Statistics from './Statistics';
import BookCategory from './BookCategory';
import { Helmet } from 'react-helmet-async';
import Slider from './Slider';
import UpcomingEvents from './UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - BookHaven</title>
            </Helmet>
            <Slider></Slider>
            <BookCategory></BookCategory>
            <TestimonialSlider></TestimonialSlider>
            <Statistics></Statistics>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;