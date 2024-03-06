import  Navbar  from "@/components/Navbar";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Bike() {
  return (
    <>
    <Navbar />
    <h1>
        hello world
    </h1>
    </>
  );
}