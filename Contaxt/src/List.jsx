import React from "react";
import Card from "./Card";
import data from "./products";
import { createContext } from "react";

export const imgContaxt = createContext()
function List(){

    
 

    return(
        <>
         <section className="py-4 container">
            <div className="row justify-content-center">
                {data.products.map((item,index)=>{
                    return(
                        <> 
                         <imgContaxt.Provider value={item.image} >
                            <Card  title={item.title} discription={item.description} price={item.price}  item={item} key={index}/>
                         </imgContaxt.Provider>
                        </>
                    )
                })}

            </div>

         </section>
        </>
    )
}
export default List 