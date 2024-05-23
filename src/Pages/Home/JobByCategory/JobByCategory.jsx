import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobsCardsByCategory from '../../../Components/Shared/JobsCardsByCategory';

const JobByCategory = () => {

    const [jobs, setJobs] = useState(null);
    const [category, setCategory] = useState("");
    const [dataLoading, setDataLoading] = useState(true);

    //fetch jobs data using axios
    useEffect(() => {
        axios.get(`http://localhost:5000/allJobs?category=${category}`)
            .then(res => {
                setJobs(res.data);
                setDataLoading(false);
            })
    }, [category])

    console.log(jobs)

    return (
        <div className="mt-10 md:mt-12 lg:mt-16 text-center min-h-48">
            <Tabs>
                <TabList>
                    <Tab
                        onClick={() => {
                            setCategory("")
                            setDataLoading(true);
                        }}>All Jobs</Tab>
                    <Tab
                        onClick={() => {
                            setCategory("onsite")
                            setDataLoading(true);
                        }}>On-site</Tab>
                    <Tab
                        onClick={() => {
                            setCategory("remote")
                            setDataLoading(true);
                        }}>Remote</Tab>
                    <Tab
                        onClick={() => {
                            setCategory("part-time")
                            setDataLoading(true);
                        }}>Part Time</Tab>
                </TabList>

                <TabPanel>
                    {
                        dataLoading ?
                            <span className="loading loading-spinner loading-xs"></span> :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6'>
                                {
                                    jobs ?
                                        jobs.map(jobData => <JobsCardsByCategory key={jobData._id} jobData={jobData}></JobsCardsByCategory>) :
                                        <p>Sorry , No Jobs available in this moment..</p>
                                }
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        dataLoading ?
                            <span className="loading loading-spinner loading-xs"></span> :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6'>
                                {
                                    jobs ?
                                        jobs.map(jobData => <JobsCardsByCategory key={jobData._id} jobData={jobData}></JobsCardsByCategory>) :
                                        <p>Sorry , No Jobs available in this moment..</p>
                                }
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        dataLoading ?
                            <span className="loading loading-spinner loading-xs"></span> :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6'>
                                {
                                    jobs ?
                                        jobs.map(jobData => <JobsCardsByCategory key={jobData._id} jobData={jobData}></JobsCardsByCategory>) :
                                        <p>Sorry , No Jobs available in this moment..</p>
                                }
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        dataLoading ?
                            <span className="loading loading-spinner loading-xs"></span> :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6'>
                                {
                                    jobs ?
                                        jobs.map(jobData => <JobsCardsByCategory key={jobData._id} jobData={jobData}></JobsCardsByCategory>) :
                                        <p>Sorry , No Jobs available in this moment..</p>
                                }
                            </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobByCategory;