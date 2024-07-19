import React from "react"
function FeaturesCard(props){
    return(
        <>
        <div id="FeaturesContainer">
            <img src={props.img} />
            <h2 id="FeaturesTitle">{props.Title}</h2>
            <p id="FeaturesDisc">{props.Disc}</p>

        </div>

        </>
    )
}
export default FeaturesCard 