import React, {useContext} from 'react'
import './Works.css'
import UpWork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {themeContext} from "../../Context";


const Works = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                {/*    Left Side*/}
                <span style={{color: darkMode? 'white': ''}}>Work Experience</span>
                <span>Clients</span>
                <spane>
                    This is just some fucking writing so fuck you. Letr me add some more text
                    <br />
                    And here is an additional writing. Fuck I neeed these tutorials
                    <br/>
                    Some more additional text this is not my full website just yet.
                    <br/>
                    When you know you can do better, you will! Do not let anyone stop you down.
                </spane>
                    <button className="button s-button">Hire Me</button>
                {/*<div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>*/}
            </div>
            {/*Right Side*/}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={UpWork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>

                {/*background circles*/}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}

export default Works