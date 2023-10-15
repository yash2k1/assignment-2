import React, { createContext, useState } from "react";
const Data=[
    {
        id:1,
        imgSrc:"https://images.unsplash.com/photo-1544754565-5655962dc338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Bhag beta bhag",
        description:"Tightly stretched tensile fibres are knitted inside a pressurised Nike Air unit, giving the Zoom Air cushioning its snappy responsiveness. Each time an athlete's foot touches down, the fibres compress to cushion the impact before quickly springing back to their original state, generating an explosive, powerful response off the ground. Whether elite athletes are racing or training, they look to Zoom Air for a fast, responsive ride and that snappy, quick-off-the-ground feel that helps optimise their quest for speed."   ,
        price:4780,   

    },
    {
        id:2,
        imgSrc:"https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Nike Air Max 90",
        description:"Nothing as fly, nothing as comfortable, nothing as proven.The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.Classic colours celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
        price:5436,   

    },
    {
        id:3,
        imgSrc:"https://images.unsplash.com/photo-1519810409043-b6d44921bfa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Nike Air Max 90 Futura SE",
        description:"This special edition Air Max 90 Futura is party-ready. Sawtooth edging around the toe and a partially floating Swoosh deliver crafted luxury while iridescent overlays bring on the fun. Of course, our trusted Nike Air cushioning keeps you comfortable all day long. It's playful, sporty and whatever else you want it to be.",
        price:3044,   
    }
    ,
    {
        id:4,
        imgSrc:"https://images.unsplash.com/photo-1603808033587-935942847de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Air Jordan 1 Mid SE",
        description:"New colours and fresh textures give you an updated AJ1 without losing that forever great look and familiar feel. This all-time favourite is made from premium materials and decked out with subtle accents (check that elephant-print Swoosh and Gold logo) to give you a staple sneaker with modern expression.",   
        price:5555,   

    }
    ,
    {
        id:5,
        imgSrc:"https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Jumpman MVP",
        description:"We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own."  , 
        price:4350,   

    }
]
 const sliderData=createContext();
const SliderDatas=({ children })=>{
return(
<>
<sliderData.Provider value={Data}>
    {children}
</sliderData.Provider>
</>
)
}
export default SliderDatas;
export {sliderData};