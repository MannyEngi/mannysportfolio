import React, {useContext} from 'react'
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import {themeContext} from "../../Context";
import './Services.css'

const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='services'>
            <div className='m-headings'>
                <span style={{color: darkMode? 'white': ''}}>Technical</span>
                <span>Skills</span>
            </div>
            <div className="m-cards">
                <div>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Experience'}
                        details = { "Javascript"}

                    />
                </div>
                <div>
                    <Card
                        emoji = {Glasses}
                        heading = {'Education'}
                        details = { "Bachelor of Science in Software Engineering"}

                    />
                </div>
                <div>
                    <Card
                        emoji = {Humble}
                        heading = {'Frontend'}
                        details = { "Javascript" +
                            "Reactjs" + "HTML"}

                    />
                </div>
            </div>
        </div>
    )
}

export default Services