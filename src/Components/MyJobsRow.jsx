import PropTypes from "prop-types";
import { MdOutlineBrowserUpdated, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const MyJobsRow = ({ singleJobData  , handleDelete}) => {
    const { _id, jobTitle, jobPostingDate, applicationDeadline, salaryRange } = singleJobData;


    return (
        <tr className="hover">
            <td>{jobTitle}</td>
            <td>{jobPostingDate}</td>
            <td>{applicationDeadline}</td>
            <td>{salaryRange}</td>
            <td><Link to={`/jobDetails/${_id}`} className="lg:btn-xs bg-blue-400 text-white rounded-lg md:rounded-sm btn">View Details</Link></td>
            <td className="flex gap-4 justify-start items-center">
                <Link to={`/updateJobDetails/${_id}`} title="update" className="text-lg font-bold p-2 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white transition duration-200"><MdOutlineBrowserUpdated /></Link>
                <button onClick={() => handleDelete(_id)} title="delete" className="text-lg font-bold p-2 rounded-lg text-red-400 hover:bg-blue-400 hover:text-white transition duration-200"><MdOutlineDeleteOutline /></button>
            </td>
        </tr>
    );
};

MyJobsRow.propTypes = {
    singleJobData: PropTypes.object,
    handleDelete : PropTypes.func,
}

export default MyJobsRow;