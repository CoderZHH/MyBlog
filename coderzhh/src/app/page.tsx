import Image from "next/image";
import { getVisitorCT, addVisitorCT } from "@/server/actions/VisitorCT";

export default async function Home() {
  const visitor = await getVisitorCT();
  console.log('visitor:', visitor);
  addVisitorCT();

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div>
        Welcome to Next.js!
      </div>
    </div>
  );
}
