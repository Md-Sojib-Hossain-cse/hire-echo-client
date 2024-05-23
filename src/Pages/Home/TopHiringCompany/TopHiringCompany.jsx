import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';


const TopHiringCompany = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/companies")
            .then(res => {
                setCompanies(res.data);
            })
    }, [])



    return (
        <div className="pt-8 md:pt-12 lg:pt-16">
            <p className="text-sm text-blue-500 font-medium text-center mb-3">Popular Companies</p>
            <h4 className="text-3xl md:text-4xl font-medium text-center">Top Hiring Company</h4>
            <div className="pt-6 md:pt-8 lg:pt-10">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper bg-white shadow-2xl rounded-lg"
                >
                    {
                        companies.length > 0 ?
                            companies.map(companyData => <SwiperSlide key={companyData._id}>
                                <div className='flex justify-center items-center gap-2 md:flex-col py-8 md:py-12 lg:py-16'>
                                    <img src={companyData.companyImage} alt="companyImage" className='h-7 md:h-10 lg:h-12 w-auto' />
                                    <p>{companyData.companyName}</p>
                                </div>
                            </SwiperSlide>) :
                            ""
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TopHiringCompany;