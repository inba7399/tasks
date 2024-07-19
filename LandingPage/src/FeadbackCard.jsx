import React from "react";
function FeadbackCard(props){
    return(
        <>
        <div id="FeaturesContainer">
            <img className="Feadbackimg" src={props.img} />
            <h2 id="FeaturesTitle">{props.name}</h2>
            <p id="FeaturesDisc">"{props.fead}"</p>

        </div>
        </>
    )
}
export default FeadbackCard