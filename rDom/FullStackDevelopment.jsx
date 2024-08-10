import React from "react";
import data from "./Data";
import Card from "./card";
function FullStackDevelopmen(){
    const fsd=data.cardInfo.filter(card=>card.category==="full stack development")
    return(
        <>
        <h1 style={{padding:"12px"}}>Full Stack Developmen</h1>
           {fsd.map((item,index)=>{
                    return(
                        <Card img={item.img} title={item.title} key={index}/>
                    )
                })}

        </>
    )
}

export default FullStackDevelopmen