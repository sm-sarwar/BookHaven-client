import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";
import stu_slider1 from '../assets/friendly-handsome-man-pointing-fingers-left-advertisement.jpg'
import stu_slider2 from '../assets/silly-cute-young-brunette-posing.jpg'
import stu_slider3 from '../assets/young-bearded-man-with-striped-shirt.jpg'

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="md:py-20 bg-base-200 mb-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-700 italic">What Student Says?</h2>
      <Swiper 
        spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg  max-w-screen-md"
        data-aos="fade-up"
      >
        <SwiperSlide className="">
          <div className="hero bg-base-200 justify-between">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={stu_slider1}
                className="max-w-sm rounded-lg "
              />
              <div>
                <p className="py-6 italic">
                Books transport us to new worlds, expand our horizons, and spark creativity. Start your journey today!
                </p>
                <h4 className="font-bold">
                    Anna Belle
                </h4>
                <p>Student, CSE</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="hero bg-base-200 justify-between">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={stu_slider2}
                className="max-w-sm rounded-lg "
              />
              <div>
                <p className="py-6 italic">
                Knowledge is power. Explore, learn, and grow with BookHaven!
                </p>
                <h4 className="font-bold">
                John Doe
                </h4>
                <p>Student, Business</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="hero bg-base-200 justify-between">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={stu_slider3}
                className="max-w-sm rounded-lg "
              />
              <div>
                <p className="py-6 italic">
                Every book has the power to change the way we think. Discover your next inspiration at BookHaven.
                </p>
                <h4 className="font-bold">
                Jane Smith
                </h4>
                <p>Student, Arts</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
