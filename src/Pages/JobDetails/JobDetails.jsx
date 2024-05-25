import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ApplyNowForm from "../../Components/Shared/ApplyNowForm";
import moment from "moment";

const JobDetails = () => {
    const { loading , user} = useAuth();
    const jobData = useLoaderData();
    const { _id, category ,  jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobApplicantsNumber, jobLocation, companyName, jobDescription, jobImage ,buyer} = jobData;

    const currentDate = moment().format(); 
    const formattedDate = currentDate.split("T")[0];


    //handle show modal function 
    const handleModalForm = () => {
        document.getElementById('my_modal_3').showModal()
    }


    //handling loading when data is in loading state
    if (loading) return <span className="loading loading-spinner loading-xs"></span>

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
            <div className="w-full h-80 md:h-[450px] lg:h-[550px] md:px-2 py-2 md:py-4 rounded-lg">
                <img src={jobImage} alt="banner image" className="h-full w-full rounded-lg object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-6">
                <div>
                    <h4 className="text-2xl font-semibold mb-3">{jobTitle}</h4>
                    <p className="font-medium">Salary : {salaryRange}</p>
                    <p>Job Type : {category}</p>
                    <p className="mt-2 text-sm md:w-10/12 lg:w-9/12">{jobDescription}</p>
                    <div className="flex justify-start items-end w-full pt-6 md:pt-8 lg:pt-10">
                        <button 
                        onClick={handleModalForm} 
                        disabled={buyer.buyerEmail === user.email || formattedDate > applicationDeadline} 
                        className="text-sm border border-blue-400 bg-base-100 text-blue-400 px-3 py-2 rounded-lg  hover:text-white hover:bg-blue-400 transition delay-100 duration-300 font-semibold">Apply Now</button>
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-semibold">{companyName}</h4>
                    <p className="flex justify-start items-center gap-2 mb-3"><IoLocationOutline />{jobLocation}</p>
                    <p className="font-medium">Posted By : {buyer.buyerName}</p>
                    <p>Posting Date : {jobPostingDate}</p>
                    <p>Application Deadline : {applicationDeadline}</p>
                    <p>Total Applicant : {jobApplicantsNumber}</p>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-[#13131344] text-white shadow-lg backdrop-blur-lg">
                        <ApplyNowForm jobData={jobData}></ApplyNowForm>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default JobDetails;