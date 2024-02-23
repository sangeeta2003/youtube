   import VideoCard from "./VideoCard"
   
   const Videos =[{
        title:"How to learn in 30 days | 30 days plan | code with me",
  image:"photo.png",
  profileimage:"_profile.jpg",
  author:"Technical Suneja",
  views :"114k",
  timestamp:"2 day ago"  
    },
    {
        title:"How to jumping in 30 days | 30 days plan | code with me",
  image:"photo.png",
  profileimage:"_profile.jpg",
  author:"Technical Suneja",
  views :"114k",
  timestamp:"2 day ago"  
    },
    {
        title:"How to playing in 30 days | 30 days plan | code with me",
  image:"photo.png",
  profileimage:"_profile.jpg",
  author:"Technical Suneja",
  views :"114k",
  timestamp:"2 day ago"  
    },
    {
        title:"How to playing in 30 days | 30 days plan | code with me",
  image:"photo.png",
  profileimage:"_profile.jpg",
  author:"Technical Suneja",
  views :"114k",
  timestamp:"2 day ago"  
    },
]
function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
{Videos.map(video =>
    <div>
<VideoCard   title={video.title}
  image={video.image}
  profileimage={video.profileimage}
  author={video.author}
  views ={video.views}
  timestamp={video.timestamp}>

</VideoCard>
        
    </div>)}

    </div>
  )
}

export default VideoGrid