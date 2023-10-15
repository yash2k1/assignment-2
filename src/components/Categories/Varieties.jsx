import { useContext } from "react";
import "./Varieties.css"
import { sliderData } from "../SliderData";
const  Varieties=()=>{
const SliderData=useContext(sliderData);
console.log("fds",SliderData)
return(
    <div  id="categories">
        <h1 className="varietieHeading">Categories <hr/></h1>
        <div className="varieties">
 { SliderData.slice(0,4).map(item=> {
   return (
    <div className="varietiesContainer"  key={item.id}> 
            <img src={item.imgSrc} className="varietiesImages"/>
            <button className="varietiesBtn hover">
            <div className="varietiesBg" ></div>
               <span className="varietiesBrnText" >View Product</span>
                </button>
    </div>
   )
}

)
}
</div>
       
    </div>
)
}
export default Varieties;