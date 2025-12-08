import React from "react";
import bg11 from "../assets/Group.png";
import bg12 from "../assets/Stars.png";
import bg13 from "../assets/person1.png";

function Customer() {
  return (
    <section className="bg-gray-200 py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      
      {/* Background Illustration */}
      <img
        src={bg11}
        alt=""
        className="absolute left-0 top-20 w-[60%] sm:w-[45%] opacity-40 pointer-events-none"
      />

      {/* Section Header */}
      <div className="relative text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Our Happy Customer
        </h1>
        <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Testimonial Card Centered */}
      <div className="flex justify-center">
        <div className="bg-white max-w-lg w-full rounded-tl-3xl rounded-br-3xl shadow-xl p-8 relative text-center">

          {/* Customer Image */}
          <div className="flex justify-center -mt-16">
            <img
              src={bg13}
              alt="Customer"
              className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-white"
            />
          </div>

          {/* Stars */}
          <div className="mt-4 flex justify-center">
            <img src={bg12} alt="rating" className="w-32" />
          </div>

          {/* Testimonial Text */}
          <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.
            Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus
            enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam
            quis. Ornare tincidunt tempus semper.
          </p>

          {/* Author */}
          <div className="mt-6">
            <h1 className="font-bold text-lg">Ama</h1>
            <p className="text-gray-500 text-sm">CEO & Founder</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Customer;
