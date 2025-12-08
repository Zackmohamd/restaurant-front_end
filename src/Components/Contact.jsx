import React from "react";
import bg16 from "../assets/Maskgroup.png";

function Contact() {
  return (
    <section className="relative py-20 px-4 sm:px-10">
      {/* Background Image */}
      <div className="relative max-w-5xl mx-auto">
        <img
          src={bg16}
          alt="Newsletter Background"
          className="w-full h-auto rounded-xl object-cover"
        />

        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Get Our Promo Code by <br /> Subscribing to Our Newsletter
          </h2>

          {/* Email Input Box */}
          <div className="mt-8 w-full max-w-xl relative flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-4 pl-5 pr-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              className="absolute right-1 top-1 bottom-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 rounded-lg transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
