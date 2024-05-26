import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import HowWeWork from "./HowWeWork/HowWeWork";
import JobByCategory from "./JobByCategory/JobByCategory";
import TopHiringCompany from "./TopHiringCompany/TopHiringCompany";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HireEcho | Home</title>
            </Helmet>
            <Banner></Banner>
            <HowWeWork></HowWeWork>
            <JobByCategory></JobByCategory>
            <TopHiringCompany></TopHiringCompany>
        </div>
    );
};

export default Home;