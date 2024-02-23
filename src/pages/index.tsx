import Image from "next/image";
import VideoCard from '..//components/VideoCard'
import { Inter } from "next/font/google";
import VideoGrid from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
  <Appbar/>
<VideoGrid/>


</div>
  );
}
