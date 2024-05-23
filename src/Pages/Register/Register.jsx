import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
    const [passwordError, setPasswordError] = useState("");
    const [error , setError] = useState("");
    const { createUser , updateUser} = useAuth();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (password.length < 8) {
            setPasswordError("Password must be 8 characters.");
        }
        else if (password.length > 15) {
            setPasswordError("Password can't be more then 15 characters.");
        }
        else if (!/[0-9]/.test(password)) {
            setPasswordError("Password must contain at least one digit");
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one Uppercase character");
        }
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one Lowercase character");
        }
        else {
            setPasswordError("");
        }

        createUser(email, password)
            .then(result => {
                setError("")
                toast.success('User Created Successfully!')
                updateUser(result.user , {
                    displayName : name,
                    photoUrl : photo,
                })
                    .then(() => {
                        toast.success("profile updated")
                    })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="relative py-8 md:py-12 lg:py-16">
            <form onSubmit={handleRegister} className="w-full md:w-2/3 lg:w-1/2 m-4 rounded-lg mx-auto shadow-lg border">
                <div className="flex relative">
                    <Link to="/login" className="flex items-center justify-center gap-2 w-1/2 bg-slate-100 p-4 hover:text-blue-500 rounded-tl-lg"><MdOutlineLogin /> Login to Account</Link>
                    <Link to="/register" className="flex items-center justify-center gap-2 w-1/2  p-4 hover:text-blue-500 rounded-tr-lg"><FaUser />Register Account</Link>
                    <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-gray-100  p-1">Or</span>
                </div>
                <div className="pt-6 space-y-3">
                    <h3 className="text-3xl text-center">Create Your Account!</h3>
                    <p className="text-center px-4">Create an account to get recommended jobs that matches
                        your resume and apply to multiple jobs in seconds!</p>
                    <div className="divider">Register</div>
                </div>
                <div className="p-4 md:p-6 lg:p-8 space-y-3">
                    <div>
                        <label htmlFor="userName" className="font-medium">Name :</label>
                        <input type="text" name="userName" id="userName" placeholder="Your Name" className="w-full px-3 py-2 rounded-lg border mt-2 outline-2 outline-blue-300" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium">Email :</label>
                        <input type="email" name="email" id="email" placeholder="Email"
                            className="w-full px-3 py-2 rounded-lg border mt-2 outline-2 outline-blue-300" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="font-medium">Password :</label>
                        <input type="password" name="password" id="password" placeholder="Password"
                            className="w-full px-3 py-2 rounded-lg border mt-2 outline-2 outline-blue-300" required />
                        {passwordError ? <p className="text-sm text-red-500">{passwordError}</p> : ""}
                        <p className="mt-1 text-gray-400">Must use 8-15 characters and one number or symbol.</p>
                    </div>
                    <div>
                        <label htmlFor="photo" className="font-medium">Photo Url :</label>
                        <input type="text" name="photo" id="photo" placeholder="Photo Url" className="w-full px-3 py-2 rounded-lg border mt-2 outline-2 outline-blue-300" required />
                        {error ? <p className="text-sm mt-1 text-red-500">{error.split("/")[1].split(")")[0].split("-").join(" ")}</p> : ""}
                        
                    </div>
                    <div className="pt-6">
                    <p className="mb-3 text-sm font-medium">Already have an account ? <Link  to="/login" className="text-blue-500">Login</Link></p>
                        <input type="submit" value="Register" className="w-full rounded-lg border-0 outline-none bg-blue-500 text-white  btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;