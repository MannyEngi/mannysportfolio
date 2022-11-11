import React, {useContext} from 'react'
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import {themeContext} from "../../Context";

const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='services'>
            <span style={{color: darkMode? 'white': ''}}>Technical</span>
            <span>Skills</span>
            <div className="cards">
                <div className="skills">
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Experience'}
                        details = { "Javascript"}

                    />
                </div>
                <div className="skills">
                    <Card
                        emoji = {Glasses}
                        heading = {'Education'}
                        details = { "Bachelor of Science in Software Engineering"}

                    />
                </div>
                <div className="skills">
                    <Card
                        emoji = {Humble}
                        heading = {'Freelance'}
                        details = { "Javascript"}

                    />
                </div>
            </div>
        </div>
    )
}

export default Services