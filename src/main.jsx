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
    path: "/snukiai-productions/",
    element: <HomePage/>
  },
  {
    path: "/snukiai-productions/video",
    element: <VideoPage/>
  },
  {
    path: "/snukiai-productions/apie",
    element: <AboutPage/>
  },
  {
    path: "/snukiai-productions/404",
    element: <GamePage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
