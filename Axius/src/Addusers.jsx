import React, { useState } from 'react';
import { Collapse,  } from 'reactstrap';

function Addusers({isOpen,add}) {

const [userInfo,setUserInfo]=useState({name:"",userName:"",bs:"",catchPhrase:"",city:"",cname:"",email:"",phone:"",street:"",suite:"",website:"",zipcode:""})

function handleUserInfo(e){
  let name=e.target.name
  const value=e.target.value
   setUserInfo ({...userInfo,[name]:value})
}

 
function handleAdd(){

let tempuser={
  name:userInfo.name,
  username:userInfo.userName,
  email:userInfo.email,
  address:{
    street:userInfo.street,
    suite:userInfo.suite,
    city:userInfo.city,
    zipcode:userInfo.zipcode
  },
  phone:userInfo.phone,
  website:userInfo.website,
  company:{
    name:userInfo.cname,
    catchPhrase:userInfo.catchPhrase,
    bs:userInfo.bs
  }
}
add(tempuser)
setUserInfo({name:"",userName:"",bs:"",catchPhrase:"",city:"",cname:"",email:"",phone:"",street:"",suite:"",website:"",zipcode:""})
}
  return (
      <Collapse isOpen={isOpen}>
       <div className="container  bg-success my-3  rounded">
           <h5 style={{textAlign:"center",paddingTop:'12px'}}>User info</h5>
           <div className='row g-2 px-3 py-2'>
             <div className=' col-sm-6 col-lg-3'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='name' value={userInfo.name} onChange={handleUserInfo}/>
                 <label htmlFor="T">Name</label>
               </div>
             </div>
             <div className=' col-sm-6 col-lg-3'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='userName' value={userInfo.userName} onChange={handleUserInfo} />
                 <label htmlFor="T">User name</label>
               </div>
             </div>
             <div className=' col-sm-12 col-lg-6'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='email' value={userInfo.email} onChange={handleUserInfo} />
                 <label htmlFor="T">Email</label>
               </div>
             </div>
           </div>
           <div className="row g-2 px-3 pb-2" >
              <div className=' col-sm-6 col-lg-6'>
               <div className='form-floating'>
                 <input type="number" id='T' placeholder='_' className='form-control' name='phone' value={userInfo.phone} onChange={handleUserInfo}/>
                 <label htmlFor="T">Phone</label>
               </div>
              </div>
              <div className=' col-sm-6 col-lg-6'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='website'value={userInfo.website} onChange={handleUserInfo} />
                 <label htmlFor="T">website</label>
               </div>
              </div>
           </div>
           <h5 style={{textAlign:"center"}}>Adress</h5>
           <div className="row g-2 px-3 py-2 ">
              <div className=' col-sm-6 col-lg-3'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='street' value={userInfo.street} onChange={handleUserInfo}/>
                 <label htmlFor="T">street</label>
               </div>
              </div>
              <div className=' col-sm-6 col-lg-3'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='suite' value={userInfo.suite} onChange={handleUserInfo}/>
                 <label htmlFor="T">suite</label>
               </div>
              </div>
              <div className=' col-sm-6 col-lg-3'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='city' value={userInfo.city} onChange={handleUserInfo} />
                 <label htmlFor="T">city</label>
               </div>
              </div>
              <div className=' col-sm-6 col-lg-3'>
               <div className='form-floating'>
                 <input type="number" id='T' placeholder='_' className='form-control' name='zipcode' value={userInfo.zipcode} onChange={handleUserInfo} />
                 <label htmlFor="T">zipcode</label>
               </div>
              </div>
           </div>
           <h5 style={{textAlign:"center"}}>Company info</h5>
           <div className="row g-2 px-3 py-2 pb-2">
              <div className=' col-sm-6 col-lg-6'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='cname' value={userInfo.cname} onChange={handleUserInfo} />
                 <label htmlFor="T">company name</label>
               </div>
              </div>
              <div className=' col-sm-6 col-lg-6'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='bs' value={userInfo.bs} onChange={handleUserInfo} />
                 <label htmlFor="T">type of busness</label>
               </div>
              </div>
              <div className=' col-sm-12 col-lg-12'>
               <div className='form-floating'>
                 <input type="text" id='T' placeholder='_' className='form-control' name='catchPhrase' value={userInfo.catchPhrase} onChange={handleUserInfo}/>
                 <label htmlFor="T">catch phrase</label>
               </div>
              </div>
           </div>
           <div className="row g-2 px-3 py-2 pb-4"><button onClick={handleAdd} className="btn p-2" style={{backgroundColor:"#96d9c0",fontSize:"25px",fontWeight:'bold'}}>Add</button></div>
       </div>
      </Collapse>

  );
}

export default Addusers;