import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NoUserProtectedRoutes from "../ProtectedRoutes/NoUserProtectedRoutes";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UserProtectedRoutes from "../ProtectedRoutes/UserProtectedRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index : true,
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <NoUserProtectedRoutes>
                    <Login></Login>
                </NoUserProtectedRoutes>
            },
            {
                path : "/register",
                element : <NoUserProtectedRoutes>
                    <Register></Register>
                </NoUserProtectedRoutes>
            },
            {
                path : "/all-jobs",
                element :<AllJobs></AllJobs>
            },
            {
                path : "/jobDetails/:id",
                element :<UserProtectedRoutes>
                    <JobDetails></JobDetails>
                </UserProtectedRoutes>,
                loader : ({params}) => fetch(`http://localhost:5000/jobDetails/${params.id}`)
            },
        ]
    },
]);


export default router;