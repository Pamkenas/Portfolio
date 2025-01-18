"use client";

import React from "react";
import { BsInstagram, BsGithub, BsDiscord, BsTwitter, BsSteam } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-base mb-4">
        Have a project in mind or need a developer? Let’s connect!
      </p>
      <p className="text-sm font-mono text-gray-400 mb-6">
        povilas.puzinauskas@stud.kitm.lt
      </p>

      <div className="flex justify-center space-x-4">
        <a
          href="https://www.instagram.com/pamkenas/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[2px] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
            <BsInstagram size={20} />
          </div>
        </a>
        <a
          href="https://github.com/Pamkenas"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[2px] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
            <BsGithub size={20} />
          </div>
        </a>
        <a
          href="http://discordapp.com/users/921534478155915315"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[2px] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
            <BsDiscord size={20} />
          </div>
        </a>
        <a
          href="https://x.com/Pamkenas146328"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[2px] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200"></div>
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
            <BsTwitter size={20} />
          </div>
        </a>
        <a
          href="https://steamcommunity.com/id/pamkenas"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[2px] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:opacity-80 transition duration-200 "></div>
          <div className="flex items-center justify-center w-10 h-10 bg-black rounded-lg text-white relative transition duration-200 hover:bg-transparent">
            <BsSteam size={20} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
