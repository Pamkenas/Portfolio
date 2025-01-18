"use client";

import React, { useRef, useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useInView } from "framer-motion";

const Hero = () => {
  const [triggerTypewriter, setTriggerTypewriter] = useState(false);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(typewriterRef);

  useEffect(() => {
    if (isInView) {
      setTriggerTypewriter(true);
    }
  }, [isInView]);

  return (
    <div className="pb-24 pt-36 relative bg-gradient-to-b from-black to-gray-900">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-[60vh] opacity-40" fill="white" />
        <Spotlight className="-top-10 left-full h-[50vh] w-[40vw] opacity-50" fill="purple" />
        <Spotlight className="-top-28 left-80 h-[50vh] w-[40vw] opacity-40" fill="blue" />
      </div>

      <BackgroundBeams className="absolute inset-0 z-0 opacity-30 will-change-transform" />

      <div className="flex justify-center relative my-40 z-10">
        <div className="max-w-[90vw] md:max-w-3xl lg:max-w-[70vw] flex flex-col items-center">
          <TextGenerateEffect
            className="uppercase tracking-[0.3em] text-xs text-center text-blue-200"
            words={["Dynamix Web Magic with next.js and aceternity!"]}
          />
          <TextGenerateEffect
            className="text-center text-[42px] md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            words={["Hello! I am", "Full-Stack Jr. Developer"]}
            highlightLineIndex={1}
          />
          <p className="text-center md:tracking-wide mt-4 text-sm md:text-lg lg:text-xl text-gray-300">
            A Next.js Developer based in Lithuania.
          </p>
        </div>
      </div>

      <div className="my-40" />

      <div className="flex justify-center relative my-40 z-10">
        <div
          className="max-w-[90vw] md:max-w-3xl lg:max-w-[70vw] flex flex-col"
          ref={typewriterRef}
        >
          {triggerTypewriter ? (
            <TypewriterEffect
              words={[
                { text: "I'm ", className: "text-blue-500" },
                { text: "a Full ", className: "text-white" },
                { text: "Stack Developer.", className: "text-gray-400" },
              ]}
              className="text-4xl font-bold text-left leading-snug"
              cursorClassName="bg-blue-500"
            />
          ) : (
            <h3 className="text-4xl font-bold mb-6 text-white text-left leading-snug opacity-50">
              Loading...
            </h3>
          )}
          <p className="text-left text-lg text-gray-400 mb-8 leading-relaxed">
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
