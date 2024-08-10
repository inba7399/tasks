import React from "react";
import data from "./Data";
import Card from "./card";
function DataScience(){
    const ds=data.cardInfo.filter(ds=>ds.category==="data science")
    return(
        <> 
        <h1 style={{padding:"12px"}}>Data Science</h1>
           {ds.map((item,index)=>{
                    return(
                        <Card img={item.img} title={item.title} key={index}/>
                    )
                })}

        </>
    )
}

export default DataScience