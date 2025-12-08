import React from "react";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-20 px-6 sm:px-10 lg:px-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* LOGO + DESCRIPTION + HOURS */}
        <div>
          <div className="flex items-center gap-3 mb-4">
<img
  src={Logo}
  alt="logo"
  className="w-20 h-20 object-contain"
/>
            <h1 className="text-2xl font-semibold">Restaurant</h1>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
            <a href="#" className="underline ml-1 hover:text-gray-900">
              Learn more
            </a>
          </p>

          <h1 className="font-bold mt-8">Opening Hours</h1>

          <div className="mt-4 space-y-4 text-gray-600 text-sm">
            <div>
              <p>Monday - Thursday</p>
              <p>8:00 am to 9:00 pm</p>
            </div>
            <div>
              <p>Saturday</p>
              <p>8:00 am to 9:00 pm</p>
            </div>
            <div>
              <p>Friday</p>
              <p>Closed</p>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h1 className="font-bold mb-5">Navigation</h1>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900 hover:underline">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Dishes</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">About</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Expert</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Customer</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* DISHES LIST */}
        <div>
          <h1 className="font-bold mb-5">Dishes</h1>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900 hover:underline">Fish & Veggies</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Tofu Chili</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Egg & Cucumber</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Lumpia w/Sauce</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Beef Enchiladas</a></li>
            <li><a href="#" className="hover:text-gray-900 hover:underline">Favorite Meatloaf</a></li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h1 className="font-bold mb-5">Connect with us</h1>
          <div className="flex gap-4 mt-3">
            <i className="fa-brands fa-facebook-f border text-lg p-3 rounded-full hover:bg-blue-500 hover:text-white transition"></i>
            <i className="fa-brands fa-instagram border text-lg p-3 rounded-full hover:bg-pink-500 hover:text-white transition"></i>
            <i className="fa-brands fa-x-twitter border text-lg p-3 rounded-full hover:bg-black hover:text-white transition"></i>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto my-10">
        <hr className="border-gray-300" />
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm pb-10 gap-4">

        <p className="text-center sm:text-left">
          © 2024 Restaurant™. All Rights Reserved — Designed by Zakarie .
        </p>

        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-900 hover:underline">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 hover:underline">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
