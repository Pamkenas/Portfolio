"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  highlightLineIndex = -1,
}: {
  words: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
  highlightLineIndex?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((line, lineIdx) => (
          <div key={lineIdx} className="block text-center">
            {line.split(" ").map((word, wordIdx) => (
              <motion.span
                key={`${word}-${wordIdx}`}
                className={`${lineIdx === highlightLineIndex &&
                    (word === "Full-Stack" || word === "Jr." || word === "Developer")
                    ? "text-indigo-500"
                    : "dark:text-white text-black"

                  } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
