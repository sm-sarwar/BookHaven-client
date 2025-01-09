import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";
const Statistics = () => {
    const stats = [
        { label: "Books Available", value: 5000 },
        { label: "Active Members", value: 2000 },
        { label: "Years of Service", value: 10 },
        { label: "Books Borrowed", value: 50000 },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div className="bg-gray-100 py-16 md:px-10 px-2 mb-10 rounded-lg" data-aos="fade-up">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-teal-700 mb-6">
                    Our Achievements
                </h2>
                <p className="text-gray-600 mb-12" data-aos="fade-right">
                    At BookHaven, we pride ourselves on offering an extensive library, a supportive <br /> community, and a user-friendly platform for book enthusiasts.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-left">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl ">
                            <p className="text-4xl font-bold text-teal-500">
                                <CountUp 
                                    end={stat.value} 
                                    duration={2} 
                                    separator="," 
                                    suffix={stat.label === "Years of Service" ? "+" : ""} 
                                />
                                {stat.label !== "Years of Service" && "+"}
                            </p>
                            <p className="text-gray-700 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
