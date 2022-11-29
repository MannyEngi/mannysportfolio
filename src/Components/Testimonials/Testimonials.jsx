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
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
        },
        {
            img: profilePic2,
            review:
                "Some Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
        },
        {
            img: profilePic3,
            review:
                "Some other Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
        },
        {
            img: profilePic4,
            review:
                "Some Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
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