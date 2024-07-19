import React from "react";
import img1 from "./assets/Footerimg.jpg"
function Footer(){
return(
   <div className="row" id="Footer">
      <div className="col">
        <a href="#" className="FootE">About</a>.<a href="#" className="FootE">Contact</a>.<a href="#" className="FootE">Terms of use</a>
        .<a href="#" className="FootE">Privacy Polacy</a> <br />
        <p>© Your Website 2024. All Rights Reserved.</p>
      </div>
      <div className="col">
        <img id="Footerimg" src={img1}  />
      </div>
   </div>
)
}
export default Footer