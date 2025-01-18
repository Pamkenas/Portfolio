import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90"
            words={["Dynamix Web Magic with next.js and aceternity!"]}
          />
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={["Hello! I am Povilas and I'm", "Full-Stack Jr. Developer"]}
            highlightLineIndex={1}
          />
          <TextGenerateEffect
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            words={["A Next.js Developer based in Lithuania."]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
