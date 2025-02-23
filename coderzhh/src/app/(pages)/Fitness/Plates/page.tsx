"use client"

import { useState } from "react";
import { motion } from "motion/react"
import Image from "next/image";
import Gravity, { MatterBody } from "@/components/ui/gravity"
import Plate5 from './img/5kg.png'
import Plate10 from './img/10kg.png'
import Plate15 from './img/15kg.png'
import Plate20 from './img/20kg.png'
import Plate25 from './img/25kg.png'


export default function GravityFooter() {
  const plates = [Plate5, Plate5, Plate10, Plate10, Plate15, Plate15, Plate20, Plate20, Plate25, Plate25];

  return (
    <>
      <Gravity gravity={{ x: 0, y: 1 }}>
        {plates.map((plate, index) => (
          <MatterBody
            key={index}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2, }}
            x={`${Math.random() * 60 + 20}%`}
            y={`${Math.random() * 20 + 40}%`}
            angle={Math.random() * 360}
            bodyType="circle"
          >
            <Image src={plate} alt={`${index * 5 + 5}kg weight plate`} className="aspect-square rounded-full w-32 h-32 object-cover" />
          </MatterBody>
        ))}
      </Gravity>
    </>
  )
}
