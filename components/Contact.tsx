"use client";

import React from "react";
import { BsInstagram, BsGithub, BsDiscord, BsTwitter, BsSteam } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="relative bg-black text-white text-center">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
      <div className="py-16 relative z-20">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-base mb-4">
          Have a project in mind or need a developer? Let’s connect!
        </p>
        <p className="text-sm font-mono text-gray-400 mb-6">
          povilas.puzinauskas@stud.kitm.lt
        </p>

        <div className="flex justify-center space-x-4">
          <button className="p-[2px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
              <BsInstagram size={20} />
            </div>
          </button>
          <button className="p-[2px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
              <BsGithub size={20} />
            </div>
          </button>
          <button className="p-[2px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
              <BsDiscord size={20} />
            </div>
          </button>
          <button className="p-[2px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
              <BsTwitter size={20} />
            </div>
          </button>
          <button className="p-[2px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
              <BsSteam size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
