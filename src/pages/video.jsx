import { useState } from "react";
import "./video.css";

import VideoFrame from "../components/pictureFrame";
import LoadingGif from "../assets/loading.gif";

export default function VideoPage(){
    const [videoList, updateList] = useState(<img src={LoadingGif}/>);

    async function getVideos(){
        let response = await fetch("https://raw.githubusercontent.com/PijusRan/snukiai-productions/refs/heads/main/src/Videos.json");
        let responseJSON = await response.json();
        let vidArray = responseJSON.map( (obj, i) => {return <VideoFrame key={i} id={obj.id} title={obj.title}/>});
        updateList(vidArray);
    }
    getVideos()

    return(
        <div className="VideoSection">
            { videoList }
        </div>
    )
}