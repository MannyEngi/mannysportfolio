import React, {useContext} from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
import {themeContext} from "../../Context";

const Testimonials = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: profilePic1,
            review:
            "Manny is a hard-working and keen developer. He brings a willingness to do work, paired with a strong desire to learn and produce. Manny embraced every challenge, and graciously accepted all feedback. Manny is the relentless positive influence that you want on your team. " +
                "Mike Epps, CTO, Direct Manager"
        },
        {
            img: profilePic2,
            review:
            "Manny is the only person I have ever hired full time from the thousands of students I have taught over a decade of teaching at San Jose State. His collaboration extended to 4 different software teams including one group in the masters’ program and another where he was their advisor after graduating. " +
                "Keith Perry, CEO "
        },
        {
            img: profilePic4,
            review:
                "Manny played a key leadership role in my company conceptualizing and leading the development of a backend using Django frontend engineering using ReactJS, MySQL, UiPath, and AWS Cloud Services as part of tech stack. " +
                "Software Engineer, Paypal"
        },
        {
            img: profilePic3,
            review:
                "Manny Cestoni is one of the most hardworking person I have met. I have known Manny for almost eight years. We attended San Jose State, worked at two companies. Manny is brilliant who gives his all in any situation. He is the creator and the innovator in many successes. " +
                "Business Analyst, MBA Graduate SJSU."
        },
    ]
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span style={{color: darkMode? 'white': ''}}>Customer</span>
                <span>Reviews</span>
            {/*<div className="blur t-blur1" style={{background: "var(--purple)"}}></div>*/}
            {/*<div className="blur t-blur1" style={{background: "skyblue"}}></div>*/}
            </div>

            {/*Slider*/}
            <Swiper

            modules={[Pagination]}
            sildesPerView={1}
            pagination={{clickable: true}}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>


        </div>
    )
}

export default Testimonials