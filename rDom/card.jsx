import React from "react";
import './index.css'
function Card({img,title}){
    return(
        <>
            <div className="col-11  col-lg-4 col-md-5 col-sm-7 mb-4 ">
            <div className="card p-0 overflow-hidden h-100 shadow   cbody ">
                <img className="card-img-top img-fluid p-3" style={{maxHeight:"300px"}} src={img} alt="product img" />
                <div className="card-body" style={{backgroundColor:"#A7BEAE"}}>
                    <h5 className="card-title" style={{fontSize:"18px",textAlign:'center'}}>{title}</h5>
                </div>
            </div>

        </div>
        
        </>
    )
}
export default Card