import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Modern", "Better", "Beautiful", "Scalable"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        Websites With Our Expert Team.
      </div>
    </div>
  );
}
