import "react";
import "./video.css";

import BG1 from "../assets/Background_L1.png";
import VideoFrame from "../components/pictureFrame";

import videoList from "../Videos.json";

const vidArray = videoList.map( (obj, i) => {return <VideoFrame key={i} id={obj.id} title={obj.title}/>});


export default function homePage(){
    return(
        <div>
            <div className="Videos">
                {vidArray}
            </div>
           
            <img src={BG1} className="BG1"/>
        </div>
    )
}