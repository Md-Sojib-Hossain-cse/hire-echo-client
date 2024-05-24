import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const JobTableRow = ({singleJobData}) => {
    const {_id,jobTitle,jobPostingDate,applicationDeadline,salaryRange} = singleJobData;
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleViewDetails = () => {
        if (!user) {
            toast.error("You have to log in first to view details!");
            navigate("/login" , {state : `/jobDetails/${_id}`})
            return ;
        }
        navigate(`/jobDetails/${_id}`);
    }

    return (
        <tr className="hover">
            <td>{jobTitle}</td>
            <td>{jobPostingDate}</td>
            <td>{applicationDeadline}</td>
            <td>{salaryRange}</td>
            <td><button onClick={handleViewDetails} className="lg:btn-xs bg-blue-400 text-white rounded-lg md:rounded-sm btn">View Details</button></td>
        </tr>
    );
};

JobTableRow.propTypes = {
    singleJobData : PropTypes.object,
}

export default JobTableRow;