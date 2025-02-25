import Image from "next/image";
import { getVisitorCT, addVisitorCT } from "@/server/actions/VisitorCT";
import VisitorCT from "@/app/(pages)/VisitorCT/page";
import Fitness from "@/app/(pages)/Fitness/page";
import MyDock from "@/app/(pages)/MyDock/page";
// import Obsdian from "@/app/(pages)/Obsidian/page";
import Welcom from "@/app/(pages)/Welcom/page";
import { motion } from 'motion/react'

export default async function Home() {
  addVisitorCT();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDockClick = (idx: number) => {
    scrollToSection(idx.toString());
  }
  return (
    <div className="w-screen">
      <section id="1" className="h-screen bg-black">
        <Welcom />
      </section>
      {/* <section id="1" className="h-screen bg-black">
        <Obsdian />
      </section> */}
      <VisitorCT />
      <div className="h-screen">
        Welcome to Next.js!
      </div>
      <section id="2">
        <Fitness />
      </section>
      <div className="fixed bottom-0 w-full">
        <MyDock />
      </div>
    </div>
  );
}
