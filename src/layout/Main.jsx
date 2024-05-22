import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-563px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;