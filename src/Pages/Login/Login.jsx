import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdOutlineLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [error , setError] = useState("");
    const { logIn , googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email, password)
            .then(() => {
                setError("")
                toast.success('User Logged in Successfully!')
                if(location.state){
                    navigate(location.state);
                }
                else{
                    navigate("/")
                }
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            setError("")
            toast.success('User Logged in Successfully!');
            if(location.state){
                navigate(location.state);
            }
            else{
                navigate("/")
            }
        })
        .catch(error => {
            setError(error.message);
        })
    }


    return (
        <div className="relative py-8 md:py-12 lg:py-16">
            <Helmet>
                <title>HireEcho | Login</title>
            </Helmet>
            <form onSubmit={handleLogin} className="w-full md:w-2/3 lg:w-1/2 m-4 rounded-lg mx-auto shadow-lg border">
                <div className="flex relative">
                    <Link to="/login" className="flex items-center justify-center gap-2 w-1/2  p-4 hover:text-blue-500 rounded-tl-lg"><MdOutlineLogin /> Login to Account</Link>
                    <Link to="/register" className="flex items-center justify-center gap-2 w-1/2  p-4 bg-slate-100 hover:text-blue-500 rounded-tr-lg"><FaUser />Register Account</Link>
                    <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-gray-100  p-1">Or</span>
                </div>
                <div className="pt-6 space-y-3">
                    <h3 className="text-3xl text-center">Login to Your Account</h3>
                    <p className="text-center px-4">Log in to HireEcho to find your perfect job match and take your career to new heights.</p>
                    <div className="flex justify-center items-center pt-4 pb-2">
                        <button onClick={handleGoogleLogin} className="text-2xl p-2 border-2 rounded-full "><FcGoogle /></button>
                    </div>
                    <div className="divider">Or</div>
                </div>
                <div className="p-4 md:p-6 lg:p-8 space-y-3">
                    <div>
                        <label htmlFor="email" className="font-medium">Email :</label>
                        <input type="email" name="email" id="email" placeholder="Email"
                            className="w-full px-3 py-2 rounded-lg border mt-2 outline-2 outline-blue-300" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="font-medium">Password :</label>
                        <input type="password" name="password" id="password" placeholder="Password"
                            className="w-full px-3 py-2 rounded-lg border mt-2 outline-2 outline-blue-300" required />
                        {error ? <p className="text-sm mt-1 text-red-500">{error.split("/")[1].split(")")[0].split("-").join(" ")}</p> : ""}
                    </div>
                    <div className="pt-6">
                    <p className="mb-3 text-sm font-medium">Don't have an account ? <Link  to="/register" className="text-blue-500">Register</Link></p>
                        <input type="submit" value="Login" className="w-full rounded-lg border-0 outline-none bg-blue-500 text-white  btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;