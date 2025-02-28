import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    const { loading, user, logOut } = useAuth();
    const navigate = useNavigate();

    //logout user
    const handleLogout = () => {
        logOut();
        navigate("/");
    }

    //theme toggler
    const handleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    //theme control
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const currentTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", currentTheme);
    }, [theme])




    return (
        <div className="bg-base-100 border-b">
            <div className="navbar max-w-6xl mx-auto">
                <div className="flex-1">
                    <Link to="/" className="cursor-pointer text-xl flex justify-center items-center gap-1">
                        <img src="https://i.ibb.co/2gYddvL/logo.jpg" alt="website-logo" className="h-6 md:h-8 rounded-full" />
                        <h1 className="text-lg md:text-3xl font-semibold">Hire<span className="text-blue-700 ">Echo</span></h1>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0}>
                            <div className="flex md:gap-2 justify-center items-center md:mr-2">
                                <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input
                                        onChange={handleTheme}
                                        type="checkbox"
                                        className="theme-controller"
                                        value="synthwave"
                                        checked={theme === "light" ? false : true} />
                                    <IoMoonOutline className="swap-on fill-current w-6 h-6 " />
                                    <IoSunnyOutline className="swap-off fill-current w-6 h-6 " />
                                </label>
                                <NavLink to="/" className="text-sm md:text-lg md:btn md:btn-ghost px-1 py-1 hover:text-blue-500">Home</NavLink>
                                <NavLink to="/allJobs" className="text-sm md:text-lg md:btn md:btn-ghost px-1 py-1 hover:text-blue-500">Jobs</NavLink>
                                <NavLink to="/blogs" className="text-sm md:text-lg md:btn md:btn-ghost px-1 py-1 hover:text-blue-500">Blog</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        {
                            loading ?
                                <span className="loading loading-spinner loading-xs"></span> :
                                user ?
                                    <div>
                                        <div title={user.displayName ? user.displayName : ""} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-8 md:w-10 rounded-full">
                                                <img src={`${user?.photoURL ? user.photoURL : "https://i.ibb.co/sbkyhCp/blank-profile.png"}`} alt="profile image" referrerPolicy="no-referrer" />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><NavLink
                                                to="/profile"
                                            >Profile</NavLink></li>
                                            <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
                                            <li><NavLink to="/addJobs">Add a Job</NavLink></li>
                                            <li><NavLink to="/myJobs">My Jobs</NavLink></li>
                                            <li><button onClick={handleLogout}>LogOut</button></li>
                                        </ul>
                                    </div> :
                                    <Link to="/login" className="btn btn-ghost bg-blue-500 text-white">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;