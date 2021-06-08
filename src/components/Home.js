import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white items-center flex flex-col h-screen justify-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl font-black mb-14">
        Welcome Here
      </h1>
      <Link className="px-10 py-6 bg-yellow-400 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out animate-bounce flex items-center" to="/"> 
        Order Now
        <svg
          class="w-6 h-6 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default Home;
