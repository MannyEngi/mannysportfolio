import React, {useContext} from 'react'
import './Experience.css'
import {themeContext} from "../../Context";
const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='experience' id='Experience'>
            <div className="achievement">
                <div className="circle">2+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">20+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                <span>Companies</span>
                <span>Too Many</span>
            </div>
        </div>
    )
}

export default Experience