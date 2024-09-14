//Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

//Pages
import HomePage  from './pages/home';
import VideoPage from './pages/video';
import AboutPage from './pages/about';
import GamePage from './pages/game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/video",
    element: <VideoPage/>
  },
  {
    path: "/apie",
    element: <AboutPage/>
  },
  {
    path: "/404",
    element: <GamePage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
