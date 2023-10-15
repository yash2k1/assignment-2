import { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderData, { sliderData } from '../SliderData';
import 'bootstrap/dist/css/bootstrap.css'
import './CarouselStyle.css'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const SliderData=useContext(sliderData);
  return (
    <Carousel id='home' activeIndex={index} onSelect={handleSelect}>
    {  SliderData&&SliderData.map(item=>{
         return(
            <Carousel.Item  key={item.id}>
            <img className='sliderImages' src={item.imgSrc} text="First slide" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description.slice(0,50)+"..."}</p>
            </Carousel.Caption>
          </Carousel.Item>
         
        )
    })  
     }
     
    </Carousel>
  );
}

export default ControlledCarousel;