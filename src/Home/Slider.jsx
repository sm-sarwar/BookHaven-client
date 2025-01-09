import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slider1 from '../assets/slider_1.jpg'
import slider2 from '../assets/slider_2.jpg' 
import slider3 from '../assets/slider_3.jpg' 
import slider4 from '../assets/slider_4.jpg' 
import Btn from "../components/Btn";

const Slider = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto my-10">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg shadow-lg "
      >
        <SwiperSlide className="px-2 md:px-0">
          <div className="relative">
            <img
              src={slider1}
              alt="Slide 1"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="md:text-4xl text-2xl font-extrabold title text-yellow-400">Discover the World of Books</h2>
              <p className="mt-2 md:text-xl text-lg font-bold text-white drop-shadow-lg max-w-screen-md">Immerse yourself in a vast collection of stories, knowledge, and adventures. Explore books across genres and eras, all in one place.</p>
              {/* <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button> */}
              <div className="my-5">
              <Btn></Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-2 md:px-0">
          <div className="relative">
            <img
              src={slider2}
              alt="Slide 2"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="md:text-4xl text-2xl font-extrabold title text-yellow-400">Your Next Great Read Awaits</h2>
              <p className="mt-2 md:text-xl text-lg font-bold text-white drop-shadow-lg max-w-screen-md">Find the perfect book for every mood and moment. From timeless classics to modern favorites, we have something for everyone</p>
              {/* <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button> */}
              <div className="my-5">
              <Btn></Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-2 md:px-0">
          <div className="relative">
            <img
              src={slider3}
              alt="Slide 3"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/80  flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="md:text-4xl text-2xl font-extrabold title text-yellow-400">Unleash Your Imagination</h2>
              <p className="mt-2 md:text-xl text-lg font-bold text-white drop-shadow-lg max-w-screen-md">Books transport us to new worlds, expand our horizons, and spark creativity. Start your journey today!</p>
              {/* <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button> */}
              <div className="my-5">
              <Btn></Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-2 md:px-0">
          <div className="relative">
            <img
              src={slider4}
              alt="Slide 4"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="md:text-4xl text-2xl font-extrabold title text-yellow-400">Build Your Personal Library</h2>
              <p className="mt-2 md:text-xl text-lg font-bold text-white drop-shadow-lg max-w-screen-md">Curate a collection of books you love. Borrow, read, and enjoy an ever-growing treasure trove of literary gems.</p>
              {/* <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button> */}
              <div className="my-5">
              <Btn></Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;


