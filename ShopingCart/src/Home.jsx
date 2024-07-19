import React from "react"
import ItemsCard from "./ItemsCard"
import data from "./Data"
function Home(){
    

    return(
        <>
         <h1 className="text-center mt-3">All products</h1>
         <section className="py-4 container">
            <div className="row justify-container-center">
                {data.ProductData.map((item)=>{
                    return(
                        <ItemsCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={item.id}/>

                    )
                })}
                
                
               

            </div>
         </section>
        </>
    )
}
export default Home