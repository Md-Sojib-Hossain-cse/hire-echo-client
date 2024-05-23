import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-501px)]">
                <Outlet></Outlet>
            </div>
            <Toaster position="top-right" reverseOrder={true}></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Main;