import ResumePage from './pages/ResumePage/ResumePage';
import BlogHome from './pages/BlogPage/BlogHome';
import HomePage from './pages/HomePage/HomePage';
import Atlanta from './pages/BlogPage/BlogEntries/Atlanta';
import Solidaritea from './pages/BlogPage/BlogEntries/Solidaritea';
import Serc from './pages/BlogPage/BlogEntries/Serc';
import Fear from './pages/BlogPage/BlogEntries/Fear';
import Music from './pages/BlogPage/BlogEntries/Music';



import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import ImportanceOfBigs from './pages/BlogPage/BlogEntries/ImportanceOfBigs';
import VideoGameList from './pages/BlogPage/BlogEntries/VideoGameList';


const router = createBrowserRouter([
  {path: "/", element: <HomePage/>,},
  {path: "/resume", element: <ResumePage/>,},
  {path: "/blog", element: <BlogHome/>,},
  {path: "/blog/having-a-big", element: <ImportanceOfBigs/>,},
  {path: "/blog/solidaritea", element: <Solidaritea/>,},
  {path: "/blog/atlanta", element: <Atlanta/>,},
  {path: "/blog/top-five-videogames", element: <VideoGameList/>,},
  {path: "/blog/serc-shenanigans", element: <Serc/>,},
  {path: "/blog/fear", element: <Fear/>,},
  {path: "/blog/music", element: <Music/>,},



]);

function App(){
  return(
    <>
      <RouterProvider router={router} />
    </>
    
    );
}

export default App;
