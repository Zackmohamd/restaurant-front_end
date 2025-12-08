import React from "react";
import bg7 from "../assets/Toon1.png";
import bg8 from "../assets/Toon2.png";
import bg9 from "../assets/chief1.png";
import bg10 from "../assets/Goup1.png";

function Expert() {
  return (
    <section id="Experts" className="relative py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">

      {/* Background Decor */}
      <img
        src={bg7}
        alt=""
        className="absolute left-0 top-10 w-28 sm:w-36 opacity-60 pointer-events-none"
      />
      <img
        src={bg8}
        alt=""
        className="absolute left-10 top-0 w-28 sm:w-36 opacity-60 pointer-events-none"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-8 text-center lg:text-left relative z-10">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            Our Expert Chefs
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Meet
            our skilled chefs who prepare meals with passion and creativity.
          </p>

          {/* CHEF GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={bg10}
                alt="Chef"
                className="w-28 sm:w-32 lg:w-36 object-contain drop-shadow-md"
              />
            ))}
          </div>

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

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bg9}
            alt="Main chef"
            className="w-[80%] sm:w-[70%] lg:w-[90%] max-w-md drop-shadow-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Expert;
