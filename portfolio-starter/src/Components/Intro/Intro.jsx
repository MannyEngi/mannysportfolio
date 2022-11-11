import React, {useContext} from 'react'
import './Intro.css'
import LinkedIn from '../../img/linkedin.png'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Manny from '../../img/Manny.png'
import {themeContext} from "../../Context";
// import {motion} from 'framer-motion'


const Intro = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    // const transition = {duration: 2, type: 'spring'}

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}> Hi! I Am </span>
                    <span> Manny Cestoni</span>
                    <span> A Full Stack Software Engineer with enterprise level experience
                     in Software Development and Web Design. My goal is to ensure I provide you with
                    the best quality service at the highest industry standards.</span>
                </div>
                <button className="button i-button"> Hire Me</button>
                <div className="i-icons">
                    <a href="https://www.linkedin.com/in/emmanuel-cestoni-5a7128b1/">
                        <img src={LinkedIn} alt="https://www.linkedin.com/in/emmanuel-cestoni-5a7128b1/" />
                    </a>
                    <a href="https://github.com/MannyEngi">
                        <img src={Github} alt="https://github.com/MannyEngi" />
                    </a>
                    <img src={Instagram} alt="" />
                </div>
            </div>


            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Manny} alt="" />
                {/*<img src={glassesimoji} alt="" />*/}

                {/*<div className='floating-div' style={{top: '-4%', left: '68%'}}>*/}
                {/*    <FloatingDiv  image={Crown} txt1='Full Stack' txt2='Developer'/>*/}
                {/*</div>*/}
                {/*<div className='floating-div' style={{top: '18rem', left: '0.1rem'}}>*/}
                {/*    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />*/}
                {/*</div>*/}

            </div>
        </div>
    )
}

export default Intro

// import React from 'react'
//
// const Intro = () => {
//     return (
//         <div>Intro</div>
//     )
// }
//
// export default Intro