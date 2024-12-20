"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlipWords } from "./flip-words";
import { FlipWordsDemo } from "./flipWordsDemo";
import { GlobeDemo } from "./globeDemo";
import { useTheme } from "next-themes";

export default function LampDemo() {
  const subheadingControls = useAnimation();
  const globeControls = useAnimation();
  const { theme } = useTheme();

  return (
    <LampContainer>
      <motion.h1
        variants={{
          initialHeading: {
            opacity: 0.5,
            y: "var(--heading-initial-y)",
          },
          liftUp: {
            opacity: 1,
            y: "var(--heading-lift-up-y)",
            transition: {
              duration: 1,
              delay: 0.4,
            }
          },
          toosieSlide: {
            x: "var(--heading-slide-x)",
            transition: { duration: 1.5, delay: 3 },
          }
        }}
        initial="initialHeading"
        animate={["liftUp", "toosieSlide"]}
        className={`mt-8 text-6xl text-gray-950 py-4 bg-clip-text text-left text-4xl font-medium tracking-tight dark:text-white md:text-7xl transition-colors duration-1000 ease-in-out
          [--heading-initial-y:450%] [--heading-lift-up-y:350%] [--heading-slide-x:0%]
          md:[--heading-initial-y:420%] md:[--heading-lift-up-y:320%]
          lg:[--heading-initial-y:380%] lg:[--heading-lift-up-y:320%] lg:[--heading-slide-x:-90%]
          xl:[--heading-initial-y:380%] xl:[--heading-lift-up-y:300%] xl:[--heading-slide-x:-125%]
          2xl:[--heading-initial-y:380%] 2xl:[--heading-lift-up-y:320%] 2xl:[--heading-slide-x:-150%]
          `}
      >
        Designing <br /> Solutions
      </motion.h1>

      <motion.div
  variants={{
    initialSubHeading: {
      opacity: 0,
      y: "var(--subheading-initial-y)",
      x: "calc(var(--subheading-initial-x, 0%))",
    },
    showTime: {
      opacity: 1,
      y: "var(--subheading-final-y)",
      transition: { 
        duration: 2.5, 
        delay: 2.5, 
        ease: "easeInOut" 
      },
    },
  }}
  initial="initialSubHeading"
  animate="showTime"
  className={`text-center lg:text-left
  [--subheading-initial-y:48%] [--subheading-final-y:43%]
  md:[--subheading-initial-y:48%] md:[--subheading-final-y:45%]
  lg:[--subheading-initial-y:31%] lg:[--subheading-final-y:41%] lg:[--subheading-initial-x:-8%]
  xl:[--subheading-initial-y:38%] xl:[--subheading-final-y:35%] xl:[--subheading-initial-x:-22%]
  2xl:[--subheading-initial-y:38%] 2xl:[--subheading-final-y:40%] 2xl:[--subheading-initial-x:-32%]`}
>
  <FlipWordsDemo />
</motion.div>

      <motion.div
        // initial={{ opacity: 0, y: 200, x: 100 }}
        // animate={globeControls}
        variants={{
          initialGlobe: {
            opacity: 0,
            y: "calc(var(--globe-initial-y, 0%))",
            x: "calc(var(--globe-initial-x, 0%))",
            scale: 1.2
          },
          showGlobe: {
            opacity: "var(--globe-final-opacity, 0)",
            transition: {
              duration: 2,
              delay: 4,
              ease:  "easeInOut",
            }
        }
      }}
        initial="initialGlobe"
        animate="showGlobe"
        className={`absolute
          [--globe-initial-y:20%] [--globe-initial-x:550%]
          lg:[--globe-initial-y:20%] lg:[--globe-initial-x:550%] lg:[--globe-final-opacity:1]
          xl:[--globe-final-opacity:1]
          2xl:[--globe-final-opacity:1]

          `}
        // style={{ scale: 1.2 }}
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