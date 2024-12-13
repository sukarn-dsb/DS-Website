"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlipWords } from "./flip-words";
import { FlipWordsDemo } from "./flipWordsDemo";
import { GlobeDemo } from "./globeDemo";

export default function LampDemo() {
  const headingControls = useAnimation();
  const subheadingControls = useAnimation();
  const globeControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await headingControls.start({
        opacity: 1,
        y: 530,
        transition: { duration: 1, delay: 0.4 },
      });
      await (headingControls.start({
        x: "-120%",
        transition: { duration: 1.5, delay: 1 },
      }),
      subheadingControls.start({
        opacity: 1,
        y: 230,
        transition: { duration: 2.5, delay: 2.5, ease: "easeInOut" },
      }),
      globeControls.start({
        opacity: 1,
        transition: { duration: 2.5, delay: 2.5, ease: "easeInOut" },
      }));
    };
    sequence();
  }, [headingControls]);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 650 }}
        animate={headingControls}
        // className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        className="mt-8 bg-gradient-to-br text-white py-4 bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Designing <br /> Solutions
      </motion.h1>
      <motion.div
        // initial={{ opacity: 0, y: 230, x: "-94%" }}
        initial={{ opacity: 0, y: "40%", x: "-94%" }}
        animate={subheadingControls}
      >
        <FlipWordsDemo />
        {/* <div className="flex flex-row">
          <p>Create</p>
          <FlipWords
            words={["Modern", "Beautiful", "Scalable"]}
            duration={2000}
            className="text-2xl"
          />
        </div>
        <p>Websites With Our Expert Team.</p> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200, x: 100 }}
        animate={globeControls}
        className="absolute"
        style={{ scale: 1.2 }}
      >
        <GlobeDemo />
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full h-[100px]">
      {/* Background fading container */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 2.5, duration: 1.5, ease: "easeInOut" },
        }}
        className={cn(
          "absolute inset-0 bg-slate-950 rounded-md z-0",
          className
        )}
      >
        {/* Background elements */}
        <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mt-[300px]">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-transparent from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Content container (text remains visible) */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
