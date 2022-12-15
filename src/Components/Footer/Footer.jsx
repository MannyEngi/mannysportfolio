import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'

const Footer = () => {
    return (
        <div className="footer">
            <img className="f-img" src={Wave} alt="" style={{width: '100%'}} />
            <div className="f-content">
                <div className="f-icons">
                    <Insta color="white" size="2rem"/>
                    <Facebook color="white" size="2rem"/>
                    <Twitter color="white" size="2rem"/>
                </div>
                <span>Copyright &copy; 2022</span>
                <span>San Francisco, California</span>
                <span>talk2cestoni@gmail.com</span>
            </div>
        </div>
    )
}

export default Footer
