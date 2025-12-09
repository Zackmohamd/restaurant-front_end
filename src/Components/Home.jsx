import React from "react";
import bg1 from "../assets/imgbg1.png";
import bg2 from "../assets/imgbg2.png";
import bg3 from "../assets/imgbg3.png";
import bg4 from "../assets/Mask.png";
import bg5 from "../assets/dish.png";
import bg6 from "../assets/text.png";

export default function Home() {
  return (
    <section
      id="Home"
      className="relative mt-32 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      {/* LEFT TEXT */}
      <div className="space-y-6 text-center lg:text-left">
        <img
          src={bg6}
          alt=""
          className="w-40 sm:w-48 mx-auto lg:mx-0 relative -top-10"
        />

        <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
          We provide the <br /> best food for you
        </h1>

        <p className="text-gray-700 max-w-md mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="py-3 px-7 bg-[#101A24] text-white rounded-tl-lg rounded-br-lg font-semibold hover:bg-slate-700">
            Menu
          </button>

          <button className="py-3 px-7 bg-[#EA6D27] text-white rounded-tl-lg rounded-br-lg font-semibold hover:bg-orange-600">
            Book a table
          </button>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center lg:justify-start gap-4 mt-4">
          <i className="fa-brands fa-facebook-f p-3 border border-black rounded-full text-xl hover:bg-blue-500 hover:text-white"></i>
          <i className="fa-brands fa-instagram p-3 border border-black rounded-full text-xl hover:bg-red-300"></i>
          <i className="fa-brands fa-x-twitter p-3 border border-black rounded-full text-xl hover:bg-black hover:text-white"></i>
        </div>
      </div>

      {/* RIGHT IMAGES */}
      <div className="relative flex justify-center lg:justify-end">
        <img src={bg4} className="h-[60vh] sm:h-[75vh] object-contain" alt="" />
        <img
          src={bg5}
          className="absolute bottom-4 right-1/2 lg:right-20 w-40 sm:w-56"
          alt=""
        />
      </div>

      {/* BACKGROUND DECOR */}
      <img
        src={bg1}
        className="hidden sm:block absolute right-10 top-[-2rem] -z-10 w-40"
        alt=""
      />
      <img
        src={bg2}
        className="hidden sm:block absolute right-0 bottom-[-1rem] -z-10 w-52"
        alt=""
      />
      <img
        src={bg3}
        className="hidden sm:block absolute right-0 top-[-4rem] -z-10 w-48"
        alt=""
      />
    </section>
  );
}
