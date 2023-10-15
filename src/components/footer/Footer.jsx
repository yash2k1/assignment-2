import React from "react"
import "./FooterStyle.css"
import shoe from "../../assets/shoe.png"
// import Top from '../Header/Top.jsx'
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const handleClick=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    
      <div id="footer" className="footer">
      {/* constainer 1*/}
      <div className="footerContainer">
      <a className="fotterSiren hover" href="#home">
      {/* <div className="navbarLogo"> */}
          <img className="footerLogoImg" src={shoe} alt="Not found" />
          <h1 className="LogoText">Bhagam Bhag</h1>
        {/* </div> */}
      </a>
      <div className="fotterBlogExplaine">“I would say that a good shoe is exactly like a good wine. These shoes are going to stay and last for a long time. –Unknown”</div>
      <div className="fotterSocialMedia">
        <Instagram/> <Facebook/> <LinkedIn/> <Twitter/>
      </div>
  
      </div>
          {/* constainer 2*/}
          <div className="footerContainer">
      <h1 className="fotterSiren">Services</h1>
      <a id='1' onClick={handleClick} href='#home'  className="navbarBtn">Home</a>
        <a id='2' onClick={handleClick} href='#arival'  className="navbarBtn">new Arival</a>
        <a id='3' onClick={handleClick} href='#categories'  className="navbarBtn">categories</a>
        <a id='4' onClick={handleClick} href='#services'  className="navbarBtn">services</a>
      </div>
      {/* constainer 3 */}
      <div className="footerContainer">
      <h1 className="Resources">Resources</h1>
      <div className="help">Help</div>
      <div className="help">About</div>
      <div className="help">Contact Us</div>
      </div>
      {/* constainer 4*/}
      <div className="footerContainer">
      <h1 className='readMore'>More</h1>
       <a href="tel:23233244" target="_blank">+9123456789</a>
       <a href="mailto:@yashgupta1mole@gmail.com" target="_blank">mail us</a>
      <div className="copyRight"> <CopyrightIcon/>Made by Yash Gupta</div>
      </div>
      </div>
  
  )
}

export default Footer
