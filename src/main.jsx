//Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";

//Pages
import HomePage  from './pages/home';
import VideoPage from './pages/video';
import AboutPage from './pages/about';
import GamePage from './pages/game';

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
