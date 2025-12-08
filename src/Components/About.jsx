import React from "react";
import bg1 from "../assets/bigdish.png";

export default function About() {
  return (
    <section
      id="About"
      className="bg-gray-200 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={bg1}
            alt="About dish"
            className="w-[80%] sm:w-[70%] lg:w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>

        {/* TEXT SIDE */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
            Welcome to Our <br /> Restaurant
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Our
            passion is to bring you delicious food made with love, care, and
            the finest ingredients.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <button className="py-3 px-7 bg-[#101A24] text-white rounded-tl-md rounded-br-md font-semibold hover:bg-slate-700 transition">
              Menu
            </button>
            <button className="py-3 px-7 bg-[#EA6D27] text-white rounded-tl-md rounded-br-md font-semibold hover:bg-orange-600 transition">
              Book a table
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
