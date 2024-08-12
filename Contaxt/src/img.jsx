import React from "react";
import { useContext } from "react";
import { imgContaxt } from "./List";

function Img(){
    const img=useContext(imgContaxt)
    return(
        <>
        <div className="row p-3" style={{maxWidth:'300px',maxHeight:'200px'}}>
         <img src={img} alt="product Image" style={{height:"100%",width:"100%",objectFit:"contain"}} />
        </div> 
        </>
    )
}
export default Img