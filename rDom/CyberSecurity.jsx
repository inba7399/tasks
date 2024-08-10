import React from "react";
import data from "./Data";
import Card from "./card";
function CyberSecurity(){
    const cyber=data.cardInfo.filter(card=>card.category==="Cyber Security")
    return(
        <>
         <h1 style={{padding:"12px"}}>Cyber Security</h1>
           {cyber.map((item,index)=>{
                    return(
                        <Card img={item.img} title={item.title} key={index}/>
                    )
                })}

        </>
    )
}

export default CyberSecurity