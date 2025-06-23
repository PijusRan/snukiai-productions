import "./main.css"
//Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";

//Pages
import loadingGif from "./assets/loading.gif";
import backgroundVideo from "./assets/Background.mp4";

import HomePage  from './pages/home';
import VideoPage from './pages/video';
import AboutPage from './pages/about';
import GamePage from './pages/game';

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <video className='backgroundVideo' autoPlay loop muted poster={loadingGif}>
      <source src={backgroundVideo} type='video/mp4'/>
      Your browser does not support the video tag.
    </video>

    <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/video" element={<VideoPage/>}/>
            <Route path="/apie" element={<AboutPage/>}/>
            <Route path="/404" element={<GamePage/>}/>
        </Routes>
    </HashRouter>
  </StrictMode>,
)

//style={{filter: `grayscale(100%) sepia(100%) saturate(400%) hue-rotate(${getRandomNumber(0,720)}deg) `}}