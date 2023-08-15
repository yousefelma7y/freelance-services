import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServicesSlider = () => {

    const services = [
        {
            id: 1,
            name: ' Accounting Projects',
            photo: './images/1.jpg',
            infos: " We assist businesses in developing and implementing accounting projects, ensuring accurate financial management and compliance with industry standards."

        },
        {
            id: 2,
            name: 'Statistical Analysis',
            photo: './images/2.jpg',
            infos: "With expertise in statistical methods, we provide accurate and insightful data analysis to support your research findings and decision-making processes."
        },
        {
            id: 3,
            name: ' Graduation Projects',
            photo: './images/3.jpg',
            infos: "We assist students in developing impactful and well-executed graduation projects across various disciplines. Our guidance ensures the successful completion of your academic requirements"

        },
        {
            id: 4,
            name: 'Outstanding Presentations',
            photo: './images/4.jpeg',
            infos: "We create compelling and visually appealing presentations that captivate your audience. Our designs are tailored to effectively convey your message and leave a lasting impression."

        },
        {
            id: 5,
            name: 'Academic Publishing',
            photo: './images/1.jpg',
            infos: "We offer support in getting your research published in reputable scientific journals, ensuring wider dissemination of your work and enhancing your academic reputation."

        },
        {
            id: 6,
            name: 'Tutorials and Summaries',
            photo: './images/1.jpg',
            infos: "Our team provides comprehensive explanations and concise summaries for all subjects, helping you grasp complex concepts and excel in your studies."

        },
        {
            id: 7,
            name: 'Programming Services',
            photo: './images/1.jpg',
            infos: "From web development to software solutions, our programming experts deliver efficient and customized solutions to meet your specific requirements."

        },
        {
            id: 8,
            name: 'Thesis and Dissertation Writing',
            photo: './images/1.jpg',
            infos: "Our team specializes in crafting high-quality research papers for master's and doctoral degrees. We ensure thorough analysis and adherence to academic standards."

        },
        {
            id: 9,
            name: 'Feasibility Studies',
            photo: './images/1.jpg',
            infos: "Our team conducts thorough feasibility studies to assess the viability and potential risks of your projects, enabling you to make informed decisions."

        },
        {
            id: 10,
            name: 'Engineering Projects',
            photo: './images/1.jpg',
            infos: "We provide comprehensive support for engineering projects, from conceptualization to implementation, ensuring successful outcomes and adherence to industry standards."

        },
    ];
    return (
        <>
            <Swiper className='p-0 m-0 '
                breakpoints={{
                    300: {

                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1180: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                }}
                // pagination={true}
                spaceBetween={100}
                slidesPerView={3}
                navigation
                loop={true}

            >
                {services.map(service => (
                    <SwiperSlide key={service.id} style={{backgroundImage:`url(${service.photo})`}}  className="card" >
                        <div className="overlay-div row m-0 p-5">
                            <h3 className='overlay-h'>{service.name}</h3>
                            <div className='overlay py-2'>
                                <p className='fw-bold'>
                                   {service.infos}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>
        </>
    )
}

export default ServicesSlider
