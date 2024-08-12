import React from "react";
import Img from "./img";
import {useCart} from "react-use-cart"

function Card(props){

    const {addItem}=useCart()

    return(
        <div className="col-11  col-lg-4 col-md-5 col-sm-7 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <Img/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text" style={{fontSize:"10PX"}}>{props.discription}</p>
                        
                     
                </div>
                <div className="card-footer  bg-black bg-opacity-25 ">
                    <div className="row">
                        <div className="col">
                            <h5 className="my-2">$ {props.price}</h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={()=>addItem(props.item)} >Add to cart</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    )
}

export default Card