import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const JobsCardsByCategory = ({ jobData }) => {
    const { _id, category, jobTitle, salaryRange, jobLocation, companyName, jobDescription } = jobData;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleViewDetails = () => {
        if (!user) {
            toast.error("You have to log in first to view details!");
            navigate("/login")
            return;
        }
        navigate(`/jobDetails/${_id}`);
    }

    return (
        <div className="border rounded-lg hover:-translate-y-3 hover:bg-gray-100 transition delay-100 duration-300">
            <div className="border-b px-4 md:px-6 pt-4 md:pt-6 pb-3">
                <h4 data-aos="fade-up" className="text-right text-lg font-medium hover:text-blue-300 transition duration-200">{companyName}</h4>
                <div data-aos="fade-up" className="flex justify-between">
                    <p className={`text-sm border rounded-full px-2 py-1 
                    ${category === "onsite" ? "text-green-400 border-green-400" : ""}
                    ${category === "remote" ? "text-orange-400 border-orange-400" : ""}
                    ${category === "part-time" ? "text-blue-400 border-blue-400" : ""}
                    `}>{category}</p>
                    <p data-aos="fade-up" className="flex justify-end items-center gap-2"><IoLocationOutline />{jobLocation}</p>
                </div>
            </div>
            <div className="px-4 md:px-6 pt-3">
                <h3 data-aos="fade-up" className="text-left text-xl font-medium hover:text-blue-300 transition duration-200">{jobTitle}</h3>
                <p data-aos="fade-up" className="text-left text-sm">{jobDescription.slice(0, 100)}......</p>
            </div>
            <div className="px-4 md:px-6 py-4 md:pb-6 flex justify-between items-center">
                <p data-aos="fade-up" className="text-sm font-medium">Salary : {salaryRange}</p>
                <button 
                    data-aos="fade-up"
                    onClick={handleViewDetails}
                    className="btn-sm bg-blue-400 text-white rounded-lg btn-ghost z-50">View Details
                </button>
            </div>
        </div>
    );
};

JobsCardsByCategory.propTypes = {
    jobData: PropTypes.object,
}

export default JobsCardsByCategory;