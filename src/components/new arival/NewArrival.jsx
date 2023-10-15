import { useContext } from "react";
import "./NewArrivalStyle.css";
import { sliderData } from "../SliderData";
const NewArrival=()=>{
    const SliderData=useContext(sliderData); 
return(
    <div  className="arival" id="arival" >
  
    <h1 className="newArrivalHeading">new arrival <hr/></h1>
    <div className="newArrivals">
        <div className="newArrivalContainer">
        <img src={SliderData[0].imgSrc} className="newArrivalImages"/>

                <div className="newArrivalDes">{SliderData[0].title}</div>
        </div>
       
        <div className="newArrivalContainer">
        <img src={SliderData[1].imgSrc} className="newArrivalImages"/>
                <div className="newArrivalDes">{SliderData[1].title}</div>
        </div>

        <div className="newArrivalContainer">
        <img src={SliderData[2].imgSrc} className="newArrivalImages"/>
                <div className="newArrivalDes">{SliderData[2].title}</div>
        </div>

        <div className="newArrivalContainer">
        <img src={SliderData[3].imgSrc} className="newArrivalImages"/>
                <div className="newArrivalDes">{SliderData[3].title}</div>
        </div>
      
    </div>
  
    </div>
)
}
export default NewArrival;