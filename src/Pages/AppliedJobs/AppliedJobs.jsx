import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import AppliedJobsCard from "../../Components/AppliedJobsCard";
import { Helmet } from "react-helmet-async";



const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [appliedJobsDataError, setAppliedJobsDataError] = useState("");
    const [appliedJobsLoading, setAppliedJobsLoading] = useState(true);
    const { user } = useAuth();

    const handleFilter = e => {
        const filterText = e.target.value;

        //get applied jobs based on category
        axios.get(`http://localhost:5000/appliedJobs?email=${user?.email}&filterBy=${filterText}`, { withCredentials: true })
            .then(res => {
                setAppliedJobs(res.data);
                setAppliedJobsDataError("");
                setAppliedJobsLoading(false);
            })
            .catch(() => {
                setAppliedJobsDataError("Can't load data at this moment , please try again later.")
                setAppliedJobsLoading(false);
            })
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/appliedJobs?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setAppliedJobs(res.data);
                setAppliedJobsDataError("");
                setAppliedJobsLoading(false);
            })
            .catch(() => {
                setAppliedJobsDataError("Can't load data at this moment , please try again later.")
                setAppliedJobsLoading(false);
            })
    }, [user])


    return (
        <div className="pb-6 md:pb-8 lg:pb-12">
            <Helmet>
                <title>HireEcho | AppliedJobs</title>
            </Helmet>
            <div className="min-h-40 md:min-h-52 lg:min-h-60 bg-gray-800 flex justify-start items-center relative">
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl text-white pl-4 md:pl-6 font-semibold z-10">Applied Jobs</h2>
                    <p className="w-10/12 md:w-9/12 lg:w-7/12 px-4 md:px-6 text-white z-10">View and manage all the jobs you've applied for in one place. Track application status and stay updated on your job search progress.</p>
                </div>
                <div className="absolute h-full w-full">
                    <img src="https://i.ibb.co/T89Lfn2/banner.png" alt="" className="h-full w-full object-cover opacity-70 z-10" />
                </div>
            </div>
            <div className="p-4 md:p-6 border border-t-0 flex justify-end items-center gap-4">
                <p className="text-lg font-medium">Filter By :</p>
                <select onChange={handleFilter} name="filter" id="filter" className="px-3 py-2 rounded-lg border">
                    <option name="onsite" id="onsite" value="onsite">On Site</option>
                    <option name="remote" id="remote" value="remote">Remote</option>
                    <option name="part-time" id="part-time" value="part-time">Part Time</option>
                </select>
            </div>
            <div className="py-4 md:py-6 lg:py-8 border border-t-0 rounded-b-lg">
                {
                    appliedJobsLoading ? <div className="min-h-screen flex justify-center items-center">
                        <img src="https://i.ibb.co/xF7yDds/loading.gif" alt="" className="h-48 w-auto" />
                    </div> : ""
                }
                {
                    appliedJobsDataError ? <p className="p-4">{appliedJobsDataError}</p> : ""
                }
                {
                    appliedJobs.length === 0 ? <p className="p-4">No jobs available.</p> : ""
                }
                <div className="grid grid-cols-1 lg:grid-cols-2 p-4 md:p-6 gap-4 md:gap-6">
                    {
                        appliedJobs.map(singleJob => <AppliedJobsCard key={singleJob._id}
                            singleJob={singleJob}></AppliedJobsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;