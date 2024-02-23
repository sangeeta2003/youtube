

function VideoCard(props:any) {
  return (
    <div>
        <img src={props.image} alt="photo" className="rounded-xl"/>
        <div className="grid grid-cols-12 pt-2  ">
<div className="col-span-1">
<img src={props.profileimage} alt="photo" className="rounded-full w-12 h-12"/>
</div>

<div className="col-span-11 pl-2  ">
    <div>
    {props.title}
    </div>
    <div className="col-span-11 text-gray-400 text-base">
{props.author}
</div>
<div className="col-span-11 text-gray-400 text-base">
{props.views} | {props.timestamp}
</div>
</div>



        </div>
    </div>  
  )
}

export default VideoCard