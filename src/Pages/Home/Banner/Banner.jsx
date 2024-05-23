const Banner = () => {
    return (
        <div className="relative  h-96 md:h-[480px]">
            <div className="absolute w-full h-full -z-10">
                <img src="https://i.ibb.co/Kb0ZKw3/banner1.jpg" alt="banner-bg" className="h-full w-full opacity-80" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 h-full w-full">
                <div className="md:col-span-2 flex justify-center items-start flex-col p-4 md:p-6 lg:p-8">
                    <h2 className="text-center mx-auto md:text-left text-3xl md:text-4xl lg:text-5xl font-semibold leading-10 md:leading-[50px] lg:leading-[70px]">Unlock Your Dream Career with HireEcho</h2>
                    <p className="text-center md:text-left">Join HireEcho today and connect with top employers. Discover opportunities that match your skills and ambitions. Your future starts here!</p>
                    <div className="flex justify-around w-full  pt-12 pb-8">
                        <button className="btn">
                            Companies
                            <div className="badge">+99</div>
                        </button>
                        <button className="btn">
                            Live Jobs
                            <div className="badge">+99</div>
                        </button>
                        <button className="btn hidden md:flex">
                            Total Jobs
                            <div className="badge">+99</div>
                        </button>
                    </div>
                </div>
                <img src="https://i.ibb.co/64z0t4G/bannerman.png" alt="" className="hidden md:flex h-full w-full object-cover"/>
            </div>
        </div>
    );
};

export default Banner;