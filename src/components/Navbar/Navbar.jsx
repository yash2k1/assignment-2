
import React, { useEffect, useRef, useState } from 'react'
import "./NavbarStyle.css"
import shoe from "../../assets/shoe.png"
import headerBg from "../../assets/header-bg.svg"
const Navbar = () => {
  const[navigationBtn,setNavigationBtn]=useState("closeNavigationBtn")
  const[navigationBtnId,setNavigationBtnId]=useState("openNavigationBtn")
  const[hamburgerLogo,setHamburgerLogo]=useState("closeHamburgerLogo")
  const[resposiveNavbarLogo,setResposiveNavbarLogo]=useState("hideResposiveNavbarLogo")
  const[navLogo,setNavLogo]=useState("showNavLogo")
  let navbarBtn ="navBtn anchor";
 let selectNavbarBtn= "selectNavBtn anchor";

const ref1=useRef();
const ref2=useRef();
const ref3=useRef();
const ref4=useRef();
const navRef=useRef();
//on clicking nav btn highlight it
const handleClick=(e)=>{
  console.log(ref1.current);
  console.log(e.target.className);
  ref1.current.className=navbarBtn;
  ref2.current.className=navbarBtn;
  ref3.current.className=navbarBtn;
  ref4.current.className=navbarBtn;
  e.target.className=selectNavbarBtn;


  setNavigationBtn("closeNavigationBtn");
  setHamburgerLogo("closeHamburgerLogo");
  setResposiveNavbarLogo("hideResposiveNavbarLogo");
  setNavLogo("showNavLogo");
}
// handle Hamburger function
// closeNavigationBtn
const handleHamburger=()=>{
  setHamburgerLogo(()=>hamburgerLogo==="openHamburgerLogo"?"closeHamburgerLogo":"openHamburgerLogo");
  setResposiveNavbarLogo(()=>resposiveNavbarLogo==="hideResposiveNavbarLogo"?"showResposiveNavbarLogo":"hideResposiveNavbarLogo");
  setNavLogo(()=>navLogo==="showNavLogo"?"hideNavLogo":"showNavLogo");
  setNavigationBtn(()=>navigationBtn==="openNavigationBtn"?"closeNavigationBtn":"openNavigationBtn");
  if(navigationBtn==="closeNavigationBtn"){
    navRef.current.style.display= "flex";  //this is managing when page refresh closing not show up
  }

}
useEffect(()=>{
  if(navigationBtn==="closeNavigationBtn"){
   setTimeout(()=>{  console.log("openNavigationBtnId")
   setNavigationBtnId("openNavigationBtnId");},1000);
console.log("closeNavigationBtnId")  
setNavigationBtnId("closeNavigationBtnId");
  setNavigationBtnId("openNavigationBtnId");
  }
},[navigationBtn])
  return (
    <div className='nav'>
        <img className='header-image' src={headerBg} alt="not found" />
      <div className="navbarLogo">
          <img className="LogoImg" src={shoe} alt="Not found" />
          <span className="LogoText">Bhagam Bhag</span>
        </div>
        <div onClick={handleHamburger} className={hamburgerLogo}>
          <span className='hamburgerStrip1'></span>
          <span className='hamburgerStrip2'></span>
          <span className='hamburgerStrip3'></span>
        </div>
      <div id={navigationBtnId} ref={navRef} className={navigationBtn}>
        <a id='1' onClick={handleClick} href='#home' ref={ref1} className={selectNavbarBtn}>Home</a>
        <a id='2' onClick={handleClick} href='#arival'  ref={ref2} className={navbarBtn}>new Arival</a>
        <a id='3' onClick={handleClick} href='#categories'  ref={ref3} className={navbarBtn}>categories</a>
        <a id='4' onClick={handleClick} href='#services'  ref={ref4} className={navbarBtn}>services</a>
      </div>
    </div> 
  )
}

export default Navbar