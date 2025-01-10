import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Book Fair 2025",
      date: "March 15, 2025",
      location: "City Library Auditorium",
      description:
        "Join us for an exciting book fair featuring exclusive discounts and author signings.",
    },
    {
      id: 2,
      title: "Author Meet & Greet",
      date: "April 10, 2025",
      location: "Downtown Cafe",
      description:
        "An opportunity to meet your favorite authors and discuss their works.",
    },
    {
      id: 3,
      title: "Online Writing Workshop",
      date: "May 5, 2025",
      location: "Zoom",
      description:
        "Learn creative writing techniques from expert authors in this free workshop.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-base-200 py-10 rounded-lg mb-10 " data-aos="fade-up">
      <h2 className="text-center text-3xl font-bold text-teal-700 mb-8">
        Upcoming Events
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5"data-aos="fade-right">
        {events.map((event) => (
          <div
            key={event.id}
            className="m-2 btnn group px-10 py-5 bg-white/10 rounded-lg  relative after:absolute after:h-full after:bg-[#4eb6a8] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all after:hover:text-white  hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold  mb-2">
              {event.title}
            </h3>
            <p className="group-hover:text-white mb-1">
              <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p className="group-hover:text-white mb-1">
              <span className="font-semibold">Location:</span> {event.location}
            </p>
            <p className="group-hover:text-white mb-4">{event.description}</p>
            <button className="w-full text-teal-600 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-teal-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-xl group py-2 px-4  hover:bg-teal-600 transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
