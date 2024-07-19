import React from "react";
import img1 from "./assets/Bodyimg1.jpg"
import img2 from "./assets/Bodyimg2.jpg"
import img3 from "./assets/Bodyimg3.jpg"
function Body(){
    return(
        
<div className="BodyContainer">


            <div className="row ">
            <div className="col-6 " id="BodyContent">
                <h2 className="BodyHeading">Fully Responsive Design</h2>
                <p className="BodyP">When you use a theme created by Start Bootstrap,
                 you know that the theme will look great on any device, 
                 whether it's a phone, tablet, or desktop the page will 
                 behave responsively!</p>
            </div>
            <div className="col-6" >
                <img   src={img1} />
            </div>
            
        </div>


        <div className="row ">
        <div className="col-6" >
                <img   src={img2} />
            </div>
            <div className="col-6 " id="BodyContent">
                <h2 className="BodyHeading">Updated For Bootstrap 5</h2>
                <p className="BodyP">Newly improved, and full of great utility classes, 
                             Bootstrap 5 is leading the way in mobile responsive web development! 
                             All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
            </div>
           
            
        </div>

        <div className="row ">
            <div className="col-6 " id="BodyContent">
                <h2 className="BodyHeading">Easy to Use & Customize</h2>
                <p className="BodyP">When you use a theme created by Start Bootstrap, 
                    you know that the theme will look great on any device, whether it's a phone, tablet,
                     or desktop the page will behave responsively!</p>
            </div>
            <div className="col-6" >
                <img   src={img3} />
            </div>
            
        </div>

        
</div>
    )
}
export default Body 