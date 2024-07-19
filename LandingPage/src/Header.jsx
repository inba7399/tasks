import React from "react"
function Header(){
  return(
    <>
      <div className="row " id="header">
        <div className="col">
            <h1 id="heading">My Webpage</h1>
        </div>
        <div className="col">
            <button className="btn btn-primary"id="btn-contact">Contact</button>
        </div>

      </div>
    </>
  )
}
export default Header