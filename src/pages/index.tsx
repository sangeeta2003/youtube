import Image from "next/image";
import VideoCard from '..//components/VideoCard'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
  <VideoCard 
  title={"How to learn in 30 days | 30 days plan | code with me"}
  image={"photo.png"}
  profileimage={"_profile.jpg"}
  author={"Technical Suneja"}
  views ={"114k"}
  timestamp={"2 day ago"}
  ></VideoCard>
</div>
  );
}
