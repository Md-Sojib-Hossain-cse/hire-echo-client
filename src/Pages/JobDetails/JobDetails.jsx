import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobDetails = () => {
    const {loading} = useAuth();
    const jobData = useLoaderData();
    const { _id, category, name, jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobApplicantsNumber, jobLocation, companyName, jobDescription } = jobData;


    if(loading) return <span className="loading loading-spinner loading-xs"></span> 

    return (
        <div className="mt-10 md:mt-12 lg:mt-16 p-4 md:p-8 lg:p-12 border rounded-lg">
            <div className="flex justify-between items-center">
                <p className="text-sm font-light">Job ID : {_id}</p>
                <p className={`text-sm border rounded-full px-2 py-1 
                    ${category === "onsite" ? "text-green-400 border-green-400" : ""}
                    ${category === "remote" ? "text-orange-400 border-orange-400" : ""}
                    ${category === "part-time" ? "text-blue-400 border-blue-400" : ""}
                    `}>{category}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-6">
                <div>
                    <h4 className="text-2xl font-semibold mb-3">{jobTitle}</h4>
                    <p className="font-medium">Salary : {salaryRange}</p>
                    <p>Job Type : {category}</p>
                    <p className="mt-2 text-sm md:w-10/12 lg:w-9/12">{jobDescription}</p>
                </div>
                <div>
                    <h4 className="text-2xl font-semibold">{companyName}</h4>
                    <p className="flex justify-start items-center gap-2 mb-3"><IoLocationOutline />{jobLocation}</p>
                    <p className="font-medium">Posted By : {name}</p>
                    <p>Posting Date : {jobPostingDate}</p>
                    <p>Application Deadline : {applicationDeadline}</p>
                    <p>Total Applicant : {jobApplicantsNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;