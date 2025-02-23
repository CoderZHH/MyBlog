"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import GravityFooter from "./Plates/page";

export default function Fitness() {
  return (
    <motion.div className="relative w-dvw h-dvh">
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
        <GravityFooter />
      </div>
    </motion.div>
  );
} 
