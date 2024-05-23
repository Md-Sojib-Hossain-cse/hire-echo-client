import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { MdOutlineFacebook, MdOutlineLocalPhone, MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="border">
            <footer className="footer footer-center p-4 gap-4 md:gap-6 lg:gap-8 text-base-content max-w-6xl mx-auto py-6 md:py-8 lg:py-12">
                <aside>
                    <Link to="/" className="flex gap-2 items-center justify-center">
                        <img src="https://i.ibb.co/2gYddvL/logo.jpg" alt="website-logo" className="h-7 rounded-full" />
                        <span className="font-semibold text-xl">HireEcho</span>
                    </Link>
                    <p>Connecting you to the best resources and information to enhance your knowledge and skills.</p>
                </aside>
                <div className="border-t w-full pt-2 md:pt-3 lg:pt-5">
                    <div className="w-full">
                        <h6 className="text-lg font-medium ">Contact Info</h6>
                        <div className="flex flex-col md:flex-row gap-6 justify-around items-start md:items-center mt-6 delay-100 duration-300">
                            <p className="flex items-start md:items-center flex-col mt-2 gap-2  transform transition-transform delay-100 duration-300 bg-blue-200 hover:bg-blue-300  p-4 rounded-tr-xl rounded-bl-xl hover:-translate-y-3 w-56 font-medium"><MdOutlineLocalPhone className="text-2xl"/>Phone : <span className="text-sm">+8801906479901</span></p>
                            <p className="flex items-start md:items-center flex-col mt-2 gap-2  transform transition-transform delay-100 duration-300 bg-blue-200 hover:bg-blue-300  p-4 rounded-tr-xl rounded-bl-xl hover:-translate-y-3 w-56 font-medium"><MdOutlineMailOutline className="text-2xl"/> Email : <span className="text-sm">sojibhossain.cse@gmail.com</span></p>
                            <p className="flex items-start md:items-center flex-col mt-2 gap-2  transform transition-transform delay-100 duration-300 bg-blue-200 hover:bg-blue-300  p-4 rounded-tr-xl rounded-bl-xl hover:-translate-y-3 w-56 font-medium"><MdOutlineLocationOn className="text-2xl"/> Address : <span className="text-sm">56/2 shukrabad , Dhaka</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col-reverse md:flex-row items-center w-full mt-3 md:mt-4 lg:mt-6 gap-4">
                        <p>Copyright © 2024 - All right reserved by HireEcho ltd.</p>
                        <div className="flex gap-4 justify-between">
                            <a href="https://www.facebook.com/Arifulislam083/" target="_blank" className="text-2xl hover:text-blue-600 transition duration-500"><MdOutlineFacebook /></a>
                            <a href="https://www.linkedin.com/in/md-sojib-hossain-059a6b230/" target="_blank" className="text-2xl hover:text-blue-600 transition duration-500"><IoLogoLinkedin /></a>
                            <a href="https://twitter.com/MDSOJIBHOS22770" target="_blank" className="text-2xl hover:text-blue-600 transition duration-500"><IoLogoTwitter /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;