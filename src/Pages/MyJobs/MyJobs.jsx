import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import MyJobsRow from "../../Components/MyJobsRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {
    //current user Job state
    const [myJobs, setMyJobs] = useState([]);
    //currentUser
    const { user } = useAuth();
    //loading state 
    const [myJobsLoading, setMyJobsLoading] = useState(true);


    //loading data based on current user email
    useEffect(() => {
        axios.get(`https://hire-echo-server.vercel.app/allJobs?email=${user?.email}` , {withCredentials : true})
            .then(res => {
                setMyJobs(res.data);
                setMyJobsLoading(false);
            })
            .catch(() => {
                toast.error("Can't load data at this moment , try again later")
                setMyJobsLoading(false);
            })
    }, [user])

    //delete single job
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            color: "#ffffff",
            background: "#13131344",
            showCancelButton: true,
            confirmButtonColor: "red",
            cancelButtonColor: "#60A5FA",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                //job delete
                axios.delete(`https://hire-echo-server.vercel.app/myJob/${id}` , {withCredentials : true})
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remainingJobs = myJobs.filter (singleJob => singleJob._id !==id);
                            setMyJobs(remainingJobs)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your posted job has been deleted.",
                                icon: "success",
                                color: "#ffffff",
                                background: "#13131344",
                            });
                        }
                        else {
                            Swal.fire({
                                title: "Error!",
                                text: "Your posted job can't be delete at this moment , try again later.",
                                icon: "error",
                                color: "#ffffff",
                                background: "#13131344",
                            });
                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "Error!",
                            text: "Your posted job can't be delete at this moment , try again later.",
                            icon: "error",
                            color: "#ffffff",
                            background: "#13131344",
                        });
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>HireEcho | MyJobs</title>
            </Helmet>
            <div className="h-40 md:h-52 lg:h-60 bg-gray-800 flex justify-start items-center relative">
                <h2 className="text-3xl text-white pl-4 md:pl-6 font-semibold z-10">My Jobs</h2>
                <div className="absolute h-full w-full">
                    <img src="https://i.ibb.co/T89Lfn2/banner.png" alt="" className="h-full w-full object-cover opacity-70 z-10" />
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myJobs.map(singleJobData => <MyJobsRow key={singleJobData._id} singleJobData={singleJobData} handleDelete={handleDelete}></MyJobsRow>)
                            }
                        </tbody>
                    </table>
                    {
                        myJobs.length === 0 ? <p>No data available at this moment ...</p> : ""
                    }
                    {
                        myJobsLoading ?
                            <div className="flex justify-center items-center min-h-48 w-full">
                                <img src="https://i.ibb.co/xF7yDds/loading.gif" alt="" className="h-48 w-auto" />
                            </div>
                            : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default MyJobs;