import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Profile = () => {
    const { loading, user } = useAuth();
    const [jobAppliedCount, setJobAppliedCount] = useState([]);
    const [jobPostedCount, setJobPostedCount] = useState([]);

    useEffect(() => {
        //applied job count api
        axios.get(`https://hire-echo-server.vercel.app/jobAppliedCount?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setJobAppliedCount(res.data)
            })
            .catch(() => {
            })

        //posted job count api
        axios.get(`https://hire-echo-server.vercel.app/jobPostedCount?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setJobPostedCount(res.data)
            })
            .catch(() => {
            })
    }, [])

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
                        <img src={user?.photoURL ? user.photoURL : "https://i.ibb.co/YjYJphk/demo-Profile-Image.png"} alt="" className="h-1/2 w-1/2 rounded-full object-cover min-h-24 min-w-24 max-h-32 max-w-32 p-4 border border-blue-400" />
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-sm">User ID : {user.uid}</p>
                        <h4 className="text-lg font-medium mt-4">{user?.displayName}</h4>
                        <p>Email : {user?.email}</p>
                        <p className="text-xs">Last Sign In : {user.metadata.lastSignInTime}</p>
                    </div>
                </div>
                <div className="md:w-1/3 flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="p-4 rounded-lg bg-violet-700 text-white">
                            <h6 className="text-lg font-semibold text-white text-center">Job Applied</h6>
                            <Link to="/appliedJobs"><p className="text-center text-6xl mt-4">{jobAppliedCount.length || 0}</p></Link>
                        </div>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="p-4 rounded-lg bg-teal-600 text-white">
                            <h6 className="text-lg font-semibold text-white text-center">Job Posted</h6>
                            <Link to="/myJobs"><p className="text-center text-6xl mt-4">{jobPostedCount.length || 0}</p></Link>
                        </div>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Profile;