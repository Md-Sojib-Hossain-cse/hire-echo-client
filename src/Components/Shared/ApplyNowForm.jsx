import axios from "axios";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const ApplyNowForm = ({ jobData }) => {
    const { user } = useAuth();



    const handleApplyJob = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const applicantDetails = {
            name , email , resume
        }
        const appliedJobData = {
            ...jobData , 
            applicantDetails
        }
        
        axios.post("http://localhost:5000/appliedJobs" , appliedJobData , {withCredentials : true})
            .then(res => {
                if(res.data.insertedId){
                    toast.success("Application submitted");
                }
            })
            .catch(error => {
                if(error.message){
                    toast.error("Can't apply at this moment , try again later.");
                    console.log(error.message)
                }
            })
    }

    return (
        <div>
            <h5 className="text-2xl text-center text-white mb-6">Submit Your Application</h5>
            <form method="dialog">
                {/*  this button in form will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
            </form>
            <form onSubmit={handleApplyJob}>
                <label htmlFor="name" className="font-medium">Name : </label>
                <input type="text" name="name" id="name" placeholder="Your Name" defaultValue={user?.displayName} required className="w-full px-3 py-2 rounded-lg border mt-1 mb-3 text-black" />
                <label htmlFor="email" className="font-medium">Email :</label>
                <input type="email" name="email" id="email" placeholder="Your Email" defaultValue={user?.email} readOnly required className="w-full px-3 py-2 rounded-lg border mt-1 mb-3 text-black" />
                <label htmlFor="resume" className="font-medium">Submit Resume :</label>
                <input type="file"  name="resume" id="resume" required className="w-full px-3 py-2 rounded-lg border mt-1 mb-3 text-black" />
                <input type="submit" value="Submit Application" className="btn btn-primary bg-blue-500" />
            </form>
        </div>
    );
};

ApplyNowForm.propTypes = {
    jobData: PropTypes.object,
}

export default ApplyNowForm;