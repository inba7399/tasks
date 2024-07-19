import React from "react"
function SignUP(props){

return(
    <>
    <div id="SignUpBaground">
    <div id="SignUp">
        <h1 id="HeadingForm" >
            {props.Heading}
        </h1>
        <div className="row"  >
            <div className="col-9">
                <input type="email" placeholder="Email Address" className="form-control"id="Form" />
            </div>
            <div className="col-3" >
                <button className="btn btn-primary" id="BtnForm" for="Form">Submit</button>

            </div>

        </div>
            
    </div>

    </div>
   

    </>
)
}
export default SignUP
