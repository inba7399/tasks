import React from "react";
import FeadbackCard from "./FeadbackCard";
import img1 from "./assets/FeadbackImg1.jpg"
import img2 from "./assets/FeadbackImg2.jpg"
import img3 from "./assets/FeadbackImg3.jpg"

function Feadback(){
    return(
       
        <div className="row" id="FeadBack">
            <div className="text-center">
                <h1>What people are saying...</h1>
            </div>
        <div className="col text-center">
            <FeadbackCard img={img1}  name="Inba Sagar" fead="This is fantastic! Thanks so much guys!"/>
          </div>

          <div className="col text-center">
            <FeadbackCard img={img2}  name="Fred S" fead="Bootstrap is amazing. I've been using it to create lots of super nice landing pages."/>
          </div>

          <div className="col text-center">
            <FeadbackCard img={img3}  name="Pandi" fead="Thanks so much for making these free resources available to us!"/>
          </div>

        </div>
          
       

      
    )
}

export default Feadback