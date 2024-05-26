import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const { loading, user } = useAuth();
    const [jobAppliedCount , setJobAppliedCount] = useState([]);
    const [jobPostedCount , setJobPostedCount] = useState([]);
    const [profileDataLoading , setProfileDataLoading] = useState(true);

    useEffect(() => {
        //applied job count api
        axios.get(`http://localhost:5000/jobAppliedCount?email=${user.email}`)
            .then(res => {
                setJobAppliedCount(res.data)
                setProfileDataLoading(false);
            })
            .catch(() => {
                setProfileDataLoading(false);
            })

        //posted job count api
        axios.get(`http://localhost:5000/jobPostedCount?email=${user.email}`)
            .then(res => {
                setJobPostedCount(res.data)
                setProfileDataLoading(false);
            })
            .catch(() => {
                setProfileDataLoading(false);
            })
    } , [])

    if (loading) return <div className="min-h-screen flex justify-center items-center">
        <img src="https://i.ibb.co/xF7yDds/loading.gif" alt="" className="h-48 w-auto" />
    </div>
    return (
        <div className="py-6 md:py-8 lg:py-12">
            <Helmet>
                <title>HireEcho | AppliedJobs</title>
            </Helmet>
            <h3 className="text-2xl px-2 md:px-4 lg:px-6">Hi , <span className="font-medium">{user?.displayName}</span> . Welcome back !</h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-6 md:py-8 lg:py-10 px-2 md:px-4 lg:px-6">
                <div className="md:w-2/3 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 rounded-lg border border-blue-400 p-4 md:p-6">
                    <div className="md:w-1/4 flex justify-center items-center">
                        <img src={user?.photoURL ? user.photoURL : "https://i.ibb.co/YjYJphk/demo-Profile-Image.png"} alt="" className="h-1/2 w-1/2 rounded-full object-cover min-h-24 min-w-24 max-h-32 max-w-32 p-4 border border-blue-400"/>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-sm">User ID : {user.uid}</p>
                        <h4 className="text-lg font-medium mt-4">{user?.displayName}</h4>
                        <p>Email : {user?.email}</p>
                        <p className="text-xs">Last Sign In : {user.metadata.lastSignInTime}</p>
                    </div>
                </div>
                <div className="md:w-1/3 flex gap-4">
                    <div className="p-4 rounded-lg bg-violet-700 text-white">
                        <h6 className="text-lg font-semibold text-white text-center">Job Applied</h6>
                        <p className="text-center text-6xl mt-4">{jobAppliedCount.length || 0}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-teal-600 text-white">
                        <h6 className="text-lg font-semibold text-white text-center">Job Posted</h6>
                        <p className="text-center text-6xl mt-4">{setJobPostedCount.length || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;