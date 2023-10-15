import React, { useContext } from 'react'
import './HeaderStyle.css'
import Navbar from '../Navbar/Navbar'
import headerBg from "../../assets/header-bg.svg"
import Carousel from "../Main Image Slider/Carousel"
import {sliderData} from '../SliderData'
const Header = () => {
  const data=useContext(sliderData);
  console.log(data);
  return (
    <>
    <div className='header'>
        <img className='header-image' src={headerBg} alt="not found" />
      <Navbar/>
      <Carousel/>
    
    </div>
    </>
  )
}

export default Header
