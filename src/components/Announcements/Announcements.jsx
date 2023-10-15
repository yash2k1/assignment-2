import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './style.css'
const Announcements = () => (
  <div>
    {/* <Parallax
      blur={10}
      bgImage={"https://media.istockphoto.com/id/1395530804/photo/keep-putting-one-foot-in-front-of-the-other.jpg?s=2048x2048&w=is&k=20&c=BREMH5Qm33IWR6GJsillq1AvaSu0tNJcX228nYtkUmE="}
      bgImageAlt="the cat"
      strength={200}
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '200px' }} />
    </Parallax> */}
    {/* <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={"https://media.istockphoto.com/id/1395530804/photo/keep-putting-one-foot-in-front-of-the-other.jpg?s=2048x2048&w=is&k=20&c=BREMH5Qm33IWR6GJsillq1AvaSu0tNJcX228nYtkUmE="}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '200px' }} />
    </Parallax> */}
    <Parallax className="parallaxView" strength={300} >
      <div>Get your fit today</div>
      <Background style={{height:"700px"}}  className="custom-bg">
        <img className='bgImg' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="fill murray" />
      </Background>
    </Parallax>
  </div>
);
export default Announcements;