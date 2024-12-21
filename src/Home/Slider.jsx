// import { Swiper, SwiperSlide } from "swiper/react";
// import slider1 from '../assets/slider_1.jpg'
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

// const Slider = () => {
//   return (
//     <div>
//       <Swiper Pagination={true} modules={[Pagination]} className="mySwiper">
//         <SwiperSlide>
//           <div
//             className="hero min-h-96 my-10 rounded-lg"
//             style={{
//               backgroundImage:
//                 "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
//             }}
//           >
//             <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
//             <div className="hero-content text-neutral-content text-center">
//               <div className="max-w-md">
//                 <h1 className="mb-5 text-5xl font-bold">
//                   Hello there this is slide 1
//                 </h1>
//                 <p className="mb-5">
//                   Provident cupiditate voluptatem et in. Quaerat fugiat ut
//                   assumenda excepturi exercitationem quasi. In deleniti eaque
//                   aut repudiandae et a id nisi.
//                 </p>
//                 <button className="btn btn-primary">Get Started</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from '../assets/slider_1.jpg'
import slider2 from '../assets/slider_2.jpg' 
import slider3 from '../assets/slider_3.jpg' 
import slider4 from '../assets/slider_4.jpg' 

const Slider = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto my-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider1}
              alt="Slide 1"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-yellow-400">Discover the World of Books</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg max-w-screen-md">Immerse yourself in a vast collection of stories, knowledge, and adventures. Explore books across genres and eras, all in one place.</p>
              <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider2}
              alt="Slide 2"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-yellow-400">Your Next Great Read Awaits</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg max-w-screen-md">Find the perfect book for every mood and moment. From timeless classics to modern favorites, we have something for everyone</p>
              <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider3}
              alt="Slide 3"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-yellow-400">Unleash Your Imagination</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg max-w-screen-md">Books transport us to new worlds, expand our horizons, and spark creativity. Start your journey today!</p>
              <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider4}
              alt="Slide 4"
              className="w-full md:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
              <h2 className="text-4xl font-extrabold title text-yellow-400">Build Your Personal Library</h2>
              <p className="mt-2 text-xl font-bold text-white drop-shadow-lg max-w-screen-md">Curate a collection of books you love. Borrow, read, and enjoy an ever-growing treasure trove of literary gems.</p>
              <button className='py-3 px-3 bg-teal-700  my-5 text-white font-bold rounded-md'>Get Started</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

