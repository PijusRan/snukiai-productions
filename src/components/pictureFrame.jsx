import "react"
import {motion} from "framer-motion"

export default function PictureProp(props) {
    const animateHover ={
        transform: 'scale(105%) perspective(500px) rotateY(5deg)'
    };

    return(
        <motion.a className="Video" href={`https://youtu.be/${props.id}`} target="_blank" 
         style={{backgroundImage: `url("https://i.ytimg.com/vi/${props.id}/hq720.jpg")`}}
         initial={{transform: 'scale(100%) perspective(500px) rotateY(0deg)'}}
         whileHover={animateHover}>

            <div className="Gradient">
                <h1> {props.title} </h1>
            </div>
        </motion.a>
    )
    
    
}

//<iframe src={`https://www.youtube.com/embed/${props.id}?controls=0&`}/>

//https://img.youtube.com/vi/yTKZcYUNOw0/0.jpg
