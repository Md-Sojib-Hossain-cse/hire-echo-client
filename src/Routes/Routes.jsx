import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UserProtectedRoutes from "../ProtectedRoutes/UserProtectedRoutes";
import Blogs from "../Pages/Blogs/Blogs";
import AccessToken from "../Pages/Blogs/AccessToken/AccessToken";
import ExpressNestJs from "../Pages/Blogs/ExpressNestJs/ExpressNestJs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdateJobDetails from "../Pages/UpdateJobDetails/UpdateJobDetails";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Profile from "../Pages/Profile/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <UserProtectedRoutes>
                    <Profile></Profile>
                </UserProtectedRoutes>
            },
            {
                path: "/addJobs",
                element: <UserProtectedRoutes>
                    <AddJobs></AddJobs>
                </UserProtectedRoutes>
            },
            {
                path: "/appliedJobs",
                element: <UserProtectedRoutes>
                    <AppliedJobs></AppliedJobs>
                </UserProtectedRoutes>
            },
            {
                path: "/allJobs",
                element: <AllJobs></AllJobs>,
            },
            {
                path: "/myJobs",
                element: <UserProtectedRoutes>
                    <MyJobs></MyJobs>
                </UserProtectedRoutes>,
            },
            {
                path: "/updateJobDetails/:id",
                element: <UserProtectedRoutes>
                    <UpdateJobDetails></UpdateJobDetails>
                </UserProtectedRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobDetails/${params.id}`)

            },
            {
                path: "/jobDetails/:id",
                element: <UserProtectedRoutes>
                    <JobDetails></JobDetails>
                </UserProtectedRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobDetails/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                children: [
                    {
                        path: "/blogs",
                        element: <AccessToken></AccessToken>
                    },
                    {
                        path: "/blogs/expressNestJs",
                        element: <ExpressNestJs></ExpressNestJs>
                    },
                ]
            }
        ]
    },
]);


export default router;