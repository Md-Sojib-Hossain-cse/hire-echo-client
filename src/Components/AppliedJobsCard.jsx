import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ singleJob }) => {
    const { _id, jobTitle, jobLocation, companyName, jobImage } = singleJob;
    return (
        <div className="grid grid-cols-4 p-4 md:p-6 gap-4 md:gap-6 border shadow-lg rounded-tl-3xl rounded-br-3xl hover:border-r-2  hover:border-l-2 hover:border-t-0 hover:border-b-0 hover:border-blue-400 hover:-translate-y-3 transition duration-300 delay-75 relative">
            <div>
                <img src={jobImage} alt="" className="h-full w-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2">
                <h5 className="text-xl font-semibold mb-3">{companyName}</h5>
                <h4 className="text-base font-medium">{jobTitle}</h4>
                <p className="text-sm">{jobLocation}</p>
            </div>
            <div className="flex justify-end items-end">
                <Link to={`/jobDetails/${_id}`} className="btn px-3 py-2 rounded-lg border bg-blue-400  text-white">Details</Link>
            </div>
            <div className="absolute h-full w-full -z-20">
                <img src="https://i.ibb.co/DCFVb2F/texture.jpg" alt="" className="h-full w-full object-cover rounded-tl-3xl rounded-br-3xl opacity-40"/>
            </div>
        </div>
    );
};

AppliedJobsCard.propTypes = {
    singleJob: PropTypes.object,
}

export default AppliedJobsCard;