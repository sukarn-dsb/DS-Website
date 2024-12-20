import React from "react";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";

export function FlipWordsDemo() {
  const words = [
    "Innovation.",
    "Growth.",
    "Businesses.",
    "Success.",
    "Ideas.",
    "Technology.",
  ];

  return (
    <div className= "h-[40rem] flex justify-center items-center px-4">
      <div className="text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Empowering
        <FlipWords words={words} /> <br />
        Delivering tailored IT and Telecom solutions that transform businesses
        and drive excellence.
      </div>
    </div>
  );
}
