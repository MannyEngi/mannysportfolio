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
                    {/*A San Francisco native with a passion for science, technology, engineering,*/}
                    {/*<br />*/}
                    {/*and mathematics. A graduate from San Jose State University, the capital of*/}
                    {/*<br />*/}
                    {/*Silicon Valley. A huge passion for new technologies and start up environment.*/}
                    {/*<br />*/}
                    {/*and great experience in software development and design.*/}
                    Born and raised in San Francisco, CA, a passion for science, technology, engineering,
                    <br/>
                    and mathematics. Graduated from San Jose State University with a Bachelor in
                    <br/>
                    Science in SoftwareEngineering. While at San Jose State, the capital of Silicon
                    <br/>
                    Valley, worked in very high levelprojects with other student engineers that led
                    <br />
                    to rewarding outcomes of having participating in national competitions.
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
                    details = { "3+ Years Working Enterprise Level Software Companies"}

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
                        details = { "Over 10+ Projects Completed with Excellent Satisfactory"}

                    />
                </div>
            </div>


        </div>
    )
}

export default About