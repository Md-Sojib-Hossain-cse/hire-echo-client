import { FaUserEdit } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineAttachMoney, MdOutlineDateRange, MdOutlineLocationOn, MdOutlineMailOutline, MdOutlinePhotoCamera } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddJobs = () => {
    //react date picker state 
    const [startDate, setStartDate] = useState(new Date());
    // Authcontext by useAuth hook 
    const { user } = useAuth();
    //moment js
    const currentDate = moment().format();
    const formattedDate = currentDate.split("T")[0];


    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target ;
        const category = form.category.value;
        const jobTitle = form.jobTitle.value;
        const jobPostingDate = form.jobPostingDate.value;
        const applicationDeadline = startDate.toISOString().split("T")[0];
        const jobApplicantsNumber = form.jobApplicantsNumber.value;
        const jobLocation = form.jobLocation.value;
        const companyName = form.companyName.value;
        const jobDescription = form.jobDescription.value;
        const jobImage = form.jobImage.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const minSalary = form.minSalary.value;
        const maxSalary = form.maxSalary.value;

        const jobDetails = {
            category , 
            jobTitle ,
            jobPostingDate ,
            applicationDeadline ,
            salaryRange : `$ ${minSalary} - $ ${maxSalary}`,
            jobApplicantsNumber ,
            jobLocation ,
            companyName ,
            jobDescription ,
            jobImage , 
            buyer : {
                buyerName , 
                buyerEmail ,
            }
        }

        if(formattedDate > applicationDeadline){
            toast.error("Application deadline must have to end after job post date");
            return;
        }

        //post jobDetails
        axios.post("https://hire-echo-server.vercel.app/addJobs" , jobDetails , {withCredentials :true})
            .then(res => {
                if(res.data.insertedId){
                    toast.success("job added Successfully.");
                    form.reset();
                }
            })
            .catch(() => {
                toast.error("Can't add jobs at this moment , try again later.")
            })
    }




    return (
        <div className="py-6 md:py-8 lg:py-12">
            <Helmet>
                <title>HireEcho | AddJob</title>
            </Helmet>
            <h2 className="text-3xl font-semibold mb-3 px-4 md:px-6">Post a job</h2>
            <p className="w-10/12 md:w-9/12 lg:w-7/12 px-4 md:px-6">Reach top talent by posting your job openings on HireEcho. Start connecting with qualified candidates today!</p>
            <div className="mt-6 md:mt-8 lg:mt-10 border rounded-lg shadow-lg">
                <div className="border-b">
                    <h3 className="text-xl font-medium px-4 md:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8">General Information</h3>
                    <div className="flex gap-2 mt-1 px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8">
                        <p className="w-16 h-1 bg-blue-400 rounded-full"></p>
                        <p className="w-8 h-1 bg-blue-400 rounded-full"></p>
                    </div>
                </div>
                <div className="pb-6 md:pb-10">
                    <form onSubmit={handleAddJob} className="p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="jobImage" className="font-medium">Job Banner Photo Url</label>
                            <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                <MdOutlinePhotoCamera className="text-base ml-3" />
                                <input type="text" name="jobImage" id="jobImage" placeholder="Photo Url" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="jobTitle" className="font-medium">Job Title</label>
                            <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                <IoBriefcaseOutline className="text-base ml-3" />
                                <input type="text" name="jobTitle" id="jobTitle" placeholder="Job Title" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="buyerName" className="font-medium">User Name</label>
                            <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                <FaUserEdit className="text-base ml-3" />
                                <input type="text" defaultValue={user?.displayName} name="buyerName" id="buyerName" placeholder="User Name" className="px-5 py-2 rounded-lg w-full outline-none" readOnly />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="buyerName" className="font-medium">User Email</label>
                            <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                <MdOutlineMailOutline className="text-base ml-3" />
                                <input type="email" defaultValue={user?.email} name="buyerEmail" id="buyerEmail" placeholder="User Email" className="px-5 py-2 rounded-lg w-full outline-none" readOnly />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="category" className="font-medium">Job Category</label>
                            <select name="category" id="category" className="rounded-lg border border-blue-400 px-3 py-2">
                                <option value="onsite">On Site</option>
                                <option value="remote">Remote</option>
                                <option value="part-time">Part Time</option>
                            </select>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="minSalary" className="font-medium">Min Salary</label>
                                <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                    <MdOutlineAttachMoney className="text-base ml-3" />
                                    <input type="number" name="minSalary" id="minSalary" placeholder="Min" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="maxSalary" className="font-medium">Max Salary</label>
                                <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                    <MdOutlineAttachMoney className="text-base ml-3" />
                                    <input type="number" name="maxSalary" id="maxSalary" placeholder="Max" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 min-h-48">
                            <label htmlFor="jobDescription" className="font-medium">Job Description</label>
                            <textarea type="text" name="jobDescription" id="jobDescription" placeholder="Job Description" className="px-5 py-2 rounded-lg w-full outline-none  border border-blue-400 h-full" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="jobPostingDate" className="font-medium">Posting Date </label>
                            <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                <MdOutlineDateRange className="text-base ml-3" />
                                <input type="date" defaultValue={formattedDate} name="jobPostingDate" id="jobPostingDate" placeholder="Max" className="px-5 py-2 rounded-lg w-full outline-none" readOnly />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="applicationDeadline" className="font-medium">Application Deadline</label>
                            <div className="flex border  items-center rounded-lg border-blue-400">
                                <MdOutlineDateRange className="text-base ml-3" />
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="px-5 py-2 flex-1 rounded-lg w-full outline-none" required/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="jobApplicantsNumber" className="font-medium">jobApplicantsNumber</label>
                            <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                <input type="number" defaultValue={0} name="jobApplicantsNumber" id="jobApplicantsNumber" placeholder="Applicants" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-3">
                            <div className="pt-4 md:pt-6 lg:pt-8">
                                <h3 className="text-xl font-medium">Company Information</h3>
                                <div className="flex gap-2 mt-1 pb-4 md:pb-6 lg:pb-8">
                                    <p className="w-16 h-1 bg-blue-400 rounded-full"></p>
                                    <p className="w-16 h-1 bg-blue-400 rounded-full"></p>
                                    <p className="w-12 h-1 bg-blue-400 rounded-full"></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="companyName" className="font-medium">Company Name</label>
                                    <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                        <input type="text" name="companyName" id="companyName" placeholder="Company Name" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="jobLocation" className="font-medium">Company Location</label>
                                    <div className="flex border justify-center items-center rounded-lg border-blue-400">
                                        <MdOutlineLocationOn className="text-base ml-3"/>
                                        <input type="text" name="jobLocation" id="jobLocation" placeholder="Company Location" className="px-5 py-2 rounded-lg w-full outline-none" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Submit Your Job" className="btn bg-blue-400 text-white mt-6"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;