import React from "react";
import data from "./Data";
import Card from "./card";
function Career(){
    const career=data.cardInfo.filter(card=>card.category==="Career")
    return(
        <>
        <h1 style={{padding:"12px"}}>Career</h1>
           {career.map((item,index)=>{
                    return(
                        <Card img={item.img} title={item.title} key={index}/>
                    )
                })}

        </>
    )
}

export default Career