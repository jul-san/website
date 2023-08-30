import ResumePage from './pages/ResumePage/ResumePage';
import BlogHome from './pages/BlogPage/BlogHome';
import HomePage from './pages/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <HomePage/>,},
  {path: "/resume", element: <ResumePage/>,},
  {path: "/blog", element: <BlogHome/>,},
]);

function App(){
  return(
    <>
      <RouterProvider router={router} />
    </>
    
    );
}

export default App;
