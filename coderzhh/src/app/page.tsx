
import Image from "next/image";
import { getVisitorCT, addVisitorCT } from "@/server/actions/VisitorCT";
import VisitorCT from "@/app/(pages)/VisitorCT/page";
import Fitness from "@/app/(pages)/Fitness/page";
import MyDock from "@/app/(pages)/MyDock/page";

import { motion } from 'motion/react'

export default async function Home() {
  addVisitorCT();
  return (
    <div className="w-screen">
      <VisitorCT />
      <div className="h-screen">
        Welcome to Next.js!
      </div>
      <div>
        <Fitness />
      </div>
      <div>
        <MyDock />
      </div>
    </div>
  );
}
