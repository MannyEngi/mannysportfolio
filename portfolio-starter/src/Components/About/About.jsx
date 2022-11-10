import React, {useContext} from 'react'
import './About.css'
import Card from "../Card/Card";
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Resume from './Resume.pdf'
import {themeContext} from "../../Context";


const About = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="about" id='About'>

            <div className="awesome">
            {/*    Left Side*/}
                <span style={{color: darkMode? 'white': ''}}>Get to Know</span>
                <span>About Me</span>
                <spane>
                    This is just some fucking writing so fuck you. Letr me add some more text
                    <br />
                    And here is an additional writing. Fuck I neeed these tutorials
                </spane>
                <a href={Resume} download>
                <button className="button s-button">Resume</button>
                </a>
                {/*<div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>*/}
            </div>

            {/*Rigth Side */}
            <div className="cards">
                <div style={{left:'14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Experience'}
                    details = { "2.5+ Years Working Bachelor of Science in Software Engineering"}

                    />
                </div>
                <div style={{top: '12rem', left:'-4rem'}}>
                    <Card
                        emoji = {Glasses}
                        heading = {'Education'}
                        details = { "Bachelor of Science in Software Engineering"}

                    />
                </div>
                <div style={{top: '19rem', left:'12rem'}}>
                    <Card
                        emoji = {Humble}
                        heading = {'Freelance'}
                        details = { "10+ Projects Completed Bachelor of Science in Software Engineering"}

                    />
                </div>
                {/*<div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>*/}
            </div>


        </div>
    )
}

export default About