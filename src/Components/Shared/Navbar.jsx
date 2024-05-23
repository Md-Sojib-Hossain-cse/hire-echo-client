import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-base-100 border-b">
            <div className="navbar max-w-6xl mx-auto">
                <div className="flex-1">
                    <Link to="/" className="cursor-pointer text-xl flex justify-center items-center gap-1">
                        <img src="https://i.ibb.co/2gYddvL/logo.jpg" alt="website-logo" className="h-8 rounded-full"/>
                        <h1 className="text-3xl font-semibold">Hire<span className="text-blue-700 ">Echo</span></h1>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <div>
                                <Link to="/" className="text-lg font-medium">Home</Link>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/YjYJphk/demo-Profile-Image.png" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/profile">Profile</NavLink></li>
                            <li><NavLink to="/allJobs">All Jobs</NavLink></li>
                            <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
                            <li><NavLink to="/addAJob">Add a Job</NavLink></li>
                            <li><NavLink to="/myJobs">My Jobs</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;