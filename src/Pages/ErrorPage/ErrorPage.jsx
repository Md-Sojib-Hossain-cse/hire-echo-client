import { Helmet } from "react-helmet-async";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col  justify-center items-center h-screen relative">
            <Helmet>
                <title>HireEcho | ErrorPage</title>
            </Helmet>
            <div className="absolute h-full w-full">
            <img src="https://i.ibb.co/WcpNMVr/lost-In-Space.jpg" alt="error-page-image" className="h-full w-full object-cover opacity-20 -z-10"/>
            </div>
            <img src="https://i.ibb.co/qjgGTCz/page-Not-Found.gif" alt="error-page-image" className="h-1/2 w-auto object-contain rounded-lg z-50"/>
            <Link to="/" className="btn mt-6 bg-blue-300 hover:bg-blue-400 hover:text-white z-50"><button className="flex justify-center items-center gap-2 font-medium text-lg"><MdOutlineHome className="text-xl"/>Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;