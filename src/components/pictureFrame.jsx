import "react"

export default function PictureProp(props) {
    return(
        <a className="Video" href={`https://youtu.be/${props.id}`} target="_blank" 
                             style={{backgroundImage: `url("https://i.ytimg.com/vi/${props.id}/hq720.jpg")`}}>

            <div className="Gradient">
                <h1> {props.title} </h1>
            </div>
        </a>
    )
    
    
}

//<iframe src={`https://www.youtube.com/embed/${props.id}?controls=0&`}/>

//https://img.youtube.com/vi/yTKZcYUNOw0/0.jpg
