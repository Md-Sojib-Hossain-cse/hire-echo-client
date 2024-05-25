import { useEffect, useState } from "react";
import JobTableRow from "../../Components/Shared/JobTableRow";
import axios from "axios";

const AllJobs = () => {
    const [allJobsData, setAllJobsData] = useState([]);
    const [jobDataLoading, setJobDataLoading] = useState(true);
    const [jobDataError, SetJobDataError] = useState("");


    const handleJobSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.search.value;
        setJobDataLoading(true);
        axios.get(`http://localhost:5000/allJobs?search=${searchText}`)
            .then(res => {
                setAllJobsData(res.data);
                SetJobDataError("");
                setJobDataLoading(false);
            })
            .catch(error => {
                SetJobDataError(error.message);
                setJobDataLoading(false);
            })
    }

    useEffect(() => {
        setJobDataLoading(true);
        axios.get("http://localhost:5000/allJobs")
            .then(res => {
                setAllJobsData(res.data);
                SetJobDataError("");
                setJobDataLoading(false);
            })
            .catch(error => {
                SetJobDataError(error.message);
                setJobDataLoading(false);
            })
    }, [])


    return (
        <div className="py-6 md:py-8 lg:py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3">Explore Opportunities - All Jobs at HireEcho</h2>
            <p className="text-center w-11/12 md:w-10/12 lg:w-9/12 mx-auto">Browse a diverse range of job opportunities across various industries and locations. Find your next career move with HireEcho and take the first step towards your dream job.</p>
            <div className="mt-4 md:mt-6 border-y pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-3 lg:pb-4 md:grid grid-cols-2 md:grid-cols-3 gap-8 px-4">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-medium">Find Your Perfect Job</h3>
                    <p className="md:w-10/12">Use our powerful search tool to filter job listings. Discover the ideal job that matches your skills and career aspirations.</p>
                </div>
                <div className="flex justify-end items-center mt-6 md:mt-0">
                    <div className="join">
                        <form onSubmit={handleJobSearch}>
                            <input type="search" name="search" id="search" placeholder="search" className="text-lg px-3 py-2 rounded-r-none rounded-l-lg border" />
                            <input type="submit" value="Search" className="px-3 py-2 rounded-r-lg rounded-l-none bg-blue-400 text-white text-lg border border-blue-400 font-medium hover:bg-base-200 hover:text-black" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-4 md:mt-6 lg:mt-8 border p-2 md:p-3 lg:p-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Posting Date</th>
                                <th>Deadline</th>
                                <th>Salary</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        {
                            jobDataError ? <p>Cannot load data at this moment ...</p> : ""
                        }
                        {
                            jobDataLoading ?
                                <div className="flex justify-center items-center min-h-48">
                                    <span className="loading loading-spinner loading-xs"></span>
                                </div>
                                : ""
                        }
                        <tbody>
                            {
                                allJobsData.map(singleJobData => <JobTableRow key={singleJobData._id} singleJobData={singleJobData}></JobTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;