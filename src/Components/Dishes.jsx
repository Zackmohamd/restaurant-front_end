import React from "react";
import bg2 from "../assets/imgbg2.png";
import bg3 from "../assets/imgbg3.png";
import dish1 from "../assets/dishone.png";
import dish2 from "../assets/dishtwo.png";
import dish3 from "../assets/dishthree.png";
import dish4 from "../assets/dishfour.png";
import bg4 from "../assets/Toon1.png";
import bg5 from "../assets/Toon2.png";
import bg6 from "../assets/laamo.png";
import bg9 from "../assets/basal.png";

const dishes = [
  {
    id: 1,
    title: "Grilled Steak",
    description: "Tender grilled beef served with seasonal vegetables.",
    price: "$25.00",
    image: dish1,
    badge: "Popular",
  },
  {
    id: 2,
    title: "Fresh Salad Bowl",
    description: "Crisp greens mixed with house-made dressing.",
    price: "$15.00",
    image: dish2,
    badge: "Healthy",
  },
  {
    id: 3,
    title: "Creamy Pasta",
    description: "Rich and creamy pasta with parmesan and herbs.",
    price: "$18.00",
    image: dish3,
    badge: "Chef’s Pick",
  },
  {
    id: 4,
    title: "Special Seafood",
    description: "Fresh seafood cooked in our secret sauce.",
    price: "$30.00",
    image: dish4,
    badge: "New",
  },
];

export default function Dishes() {
  return (
    <section
      id="Dishes"
      className="relative mt-32 bg-gray-100 py-16 overflow-hidden"
    >
      {/* Decorative background images */}
      <img
        src={bg2}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute w-40 right-16 top-4 opacity-70"
      />
      <img
        src={bg3}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute w-44 left-16 top-10 opacity-70"
      />
      <img
        src={bg4}
        alt=""
        className="pointer-events-none select-none hidden xl:block absolute w-40 left-4 bottom-10 opacity-60"
      />
      <img
        src={bg5}
        alt=""
        className="pointer-events-none select-none hidden xl:block absolute w-40 right-4 bottom-5 opacity-60"
      />
      <img
        src={bg6}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute w-32 md:left-10 md:bottom-40 opacity-40"
      />
      <img
        src={bg9}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute w-28 md:right-10 md:top-40 opacity-40"
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-2">
            Our Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Special Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-40 md:h-44 object-cover"
                />
                {dish.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {dish.badge}
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {dish.title}
                </h3>
                <p className="text-sm text-gray-600 flex-1">
                  {dish.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">
                    {dish.price}
                  </span>
                  <button className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-gray-200 hover:bg-orange-500 hover:text-white transition-colors duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional extra section placeholder (hadaad rabto) */}
        {/* 
        <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              What makes our dishes special?
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              We carefully select fresh ingredients and cook every plate with
              passion and creativity to give you an unforgettable dining
              experience.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={dish1}
              alt="Special dish"
              className="w-full max-w-sm rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
