"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Master the Art of Music offers insights into music theory,
          performance, and composition, guiding musicians to excel.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
         <Button
         borderRadius="1.75rem"
         className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900"
         >
            Explore Courses
         </Button>
          </Link>
        </div>
      </div>
      </motion.h1>
    </LampContainer>
  );
}
