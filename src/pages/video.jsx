import { useState } from "react";
import "./video.css";

import VideoFrame from "../components/pictureFrame";
import LoadingGif from "../assets/loading.gif";

export default function VideoPage(){
    const [videoList, updateList] = useState(<img src={LoadingGif}/>);

    async function getVideos(){
        let response = await fetch("https://api.jsonsilo.com/public/21859d17-997d-4c3c-bf3b-bc767a0d838a");
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