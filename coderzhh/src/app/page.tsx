import Image from "next/image";
import { getVisitorCT, addVisitorCT } from "@/server/actions/VisitorCT";
import { VisitorCT } from "@/app/(pages)/VisitorCT/page";
export default async function Home() {
  addVisitorCT();

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <VisitorCT/>
      <div>
        Welcome to Next.js!
      </div>
    </div>
  );
}
