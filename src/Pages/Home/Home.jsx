import Banner from "./Banner/Banner";
import JobByCategory from "./JobByCategory/JobByCategory";
import TopHiringCompany from "./TopHiringCompany/TopHiringCompany";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
            <TopHiringCompany></TopHiringCompany>
        </div>
    );
};

export default Home;