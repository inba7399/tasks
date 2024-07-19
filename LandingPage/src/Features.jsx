import React from "react";
import './index.css'
import FeaturesCard from "./FeaturesCard";
import img1 from "./assets/FeaturesCardImg1.png"
import img2 from "./assets/FeaturesCardImg2.png"
import img3 from "./assets/FeaturesCardImg3.png"

function Features(){
     
    return(
       
        <div className="row " >
            <div className="col text-center">
            <FeaturesCard img={img1} Title="Fully Responsive" Disc="This theme will look great on any device, no matter the size!"/>
            </div>
            <div className="col text-center">
            <FeaturesCard img={img2} Title="Bootstrap 5 Ready" Disc="Featuring the latest build of the new Bootstrap 5 framework!"/>
            </div>
            <div className="col text-center">
            <FeaturesCard img={img3} Title="Easy to Use" Disc="Ready to use with your own content, or customize the source files!"/>
            </div>
        </div>
       
        
    )
}
export default Features