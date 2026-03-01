import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Trips from "../pages/Trips";
import Blogdetails from "../pages/Blogdetails";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path:'',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/trips',
            element:<Trips/>
        },
        {
            path:'trips/:id',
            element:<Blogdetails/>
        }
    ]
  },
]);

export default router;