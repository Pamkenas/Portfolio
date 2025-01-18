import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Hero = () => {
  return (
    <div className="pb-32 pt-40 relative bg-gradient-to-b from-black to-gray-900">
      {/* Spotlights for Decorative Background */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-50" fill="white" />
        <Spotlight className="-top-10 left-full h-[80vh] w-[50vw] opacity-60" fill="purple" />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw] opacity-50" fill="blue" />
      </div>

      <BackgroundBeams className="absolute inset-0 z-0 opacity-40" />

      {/* Main Title Section */}
      <div className="flex justify-center relative my-40 z-10">
        <div className="max-w-[90vw] md:max-w-3xl lg:max-w-[70vw] flex flex-col justify-center">
          <TextGenerateEffect
            className="uppercase tracking-[0.3em] text-xs text-left text-blue-200"
            words={["Dynamix Web Magic with next.js and aceternity!"]}
          />
          <TextGenerateEffect
            className="text-left text-[42px] md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            words={["Hello! I am", "Full-Stack Jr. Developer"]}
            highlightLineIndex={1}
          />
          <TextGenerateEffect
            className="text-left md:tracking-wide mt-4 text-sm md:text-lg lg:text-xl text-gray-300"
            words={["A Next.js Developer based in Lithuania."]}
          />
        </div>
      </div>

      {/* Add Larger Space Between Sections */}
      <div className="my-64" />

      {/* Additional Section */}
      <div className="flex justify-center relative my-40 z-10">
        <div className="max-w-[90vw] md:max-w-3xl lg:max-w-[70vw] flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-6 text-white text-left leading-snug">
            I'm a Full Stack Developer.
          </h3>
          <p className="text-lg text-gray-400 mb-8 text-left leading-relaxed">
            Currently, I'm studying at <span className="text-blue-400">KITM</span> school.
          </p>
          <blockquote className="max-w-3xl text-gray-500 italic text-base text-left border-l-4 border-blue-400 pl-4">
            "I'm a passionate Full Stack Developer with a strong foundation in building scalable, 
            user-centric web applications. Currently, I'm sharpening my skills and expanding my expertise at KITM school."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Hero;
