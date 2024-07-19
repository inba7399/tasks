import React from "react"
import{useCart} from "react-use-cart"
function ItemsCard(props){

    const{ addItem}= useCart()
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-ing-top img-fluid" />
                  <div className="card-body text-center">
                    <h3 className="card-title">{props.title}</h3>
                    <h4 className="card-title">₹{props.price}</h4>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" onClick={()=>addItem(props.item)}>Add to Cart</button>     
                  </div>
            </div>
        </div>
    )

}
export default ItemsCard