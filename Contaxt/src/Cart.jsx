import React from "react";
import { useCart } from "react-use-cart";
import { Modal } from "bootstrap";


 function Cart(){
    const{isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart()

       let a=<h1>Your Cart is Empty </h1>
       let  b=<h1>In Cart({totalUniqueItems})</h1>
   
 
    return(
        <div className="container bg-primary rounded my-4">

            <div className="row">
                <div className="col">
                    <h1>My Shope</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <div className="btn btn-success p-2 my-1 ps-3 pe-3 " data-bs-toggle="modal"
                    data-bs-target='#Cart'>🛒Cart ({totalUniqueItems})</div>
                    <div className="modal modal-lg fade" id="Cart">
                        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down">
                            <div className="modal-content">
                                <div className="modal-header">
                                    {isEmpty?a:b}
                                 <button className="btn-close" data-bs-toggle="modal" ></button>
                                </div>
                                <div className="modal-body">
                                    <section className="py-4 container">
                                        <div className="row justify-content-center">
                                            <div className="col-12">
                                

                                                <table className="table table-light table-hover m-0">
                                                    <tbody>
                                                        {items.map((ite,index)=>{
                                                        return(
                                                            <tr key={index}>
                                                                <td>
                                                                    <div>
                                                                       <img src={ite.image} alt="Prodect imge" style={{height:"5rem"}} />
                                                                    </div>
                                                                    
                                                                </td>
                                                                <td>{ite.title}: ({ite.quantity})</td>
                                                                <td>$ {ite.price}</td>
                                                                <td>
                                                                    <div className="btn-group">
                                                                      <button className="btn btn-outline-success" onClick={()=>updateItemQuantity(ite.id,ite.quantity-1)}>-</button>
                                                                      <button className="btn btn-outline-success" onClick={()=>updateItemQuantity(ite.id,ite.quantity+1)}>+</button>
                                                                      <button className="btn btn-outline-danger" onClick={()=>removeItem(ite.id)}>🗑️</button>
                                                                    </div>
                                                                    
                                                                </td>
                                                        

                                                            </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                               </table>
                                        
                                            </div>
                                            <div className="col">
                                                <h3 style={{marginTop:"14px"}}>Total Items:{totalItems}</h3>

                                            </div>
                                            <div className="col-auto ms-auto">
                                                <h2 style={{marginTop:"9px"}}>Total price: ${parseFloat(cartTotal).toFixed(2)}</h2>

                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-danger m-2" onClick={emptyCart}>Clear cart</button>
                                                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target='#Cart' >Check out</button>
                                             </div>

                                        </div>

                                    </section>
                                    
                                    
                                    
                                     </div>
                                <div className="modal-footer"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
        
    )
 }
 export default Cart