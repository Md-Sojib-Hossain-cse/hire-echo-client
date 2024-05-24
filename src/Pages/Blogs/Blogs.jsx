import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="py-6 md:py-8 lg:py-12">
            <h2 className="text-3xl font-medium text-center mb-4">HireEcho Blogs</h2>
            <p className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto text-center">Discover the latest industry trends, career advice, and job-seeking tips on the HireEcho Blog. Stay informed and get inspired to take your career to the next level.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border rounded-sm mt-6 md:mt-8 lg:mt-10">
                <div className="md:col-span-2 lg:col-span-3 border pt-3 md:pt-4 lg:pt-6">
                    <Outlet></Outlet>
                </div>
                <div>
                    <Link to="/blogs" className="btn bg-gray-200 w-full rounded-none">Access Token & Refresh Token</Link>
                    <Link to="/blogs/expressNestJs" className="btn bg-gray-200 w-full rounded-none">Express JS or Nest Js</Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;