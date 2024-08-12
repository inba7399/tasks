import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from "react";
export default function Popup({modal , toggle,task ,index,updatetask}) {

const [Title,setTitle]=useState(task.Title)
const [Discription,setDiscription]=useState(task.Discription)
 
function edit (e){
    const {name,value}=e.target
    if(name==="Title"){
        setTitle(value)
    }else{
        setDiscription(value)
    }
} 

function update(e){
   e.preventDefault()
    let utask={}
    utask["Title"]=Title
    utask["Discription"]=Discription
    updatetask(utask,index)
    toggle(false)
}

  return (
    <div>
         <Modal isOpen={modal} toggle={toggle} >
             <ModalHeader toggle={toggle}>Edit</ModalHeader>
             <ModalBody>
             <div className='row g-3'>
             <div className=' col-12'>
               <div className='form-floating'>
                 <input type="text" id='Title' placeholder='_' className='form-control' name='Title' value={Title} onChange={edit} />
                 <label htmlFor="Title">Title</label>
               </div>
             </div>

          <div className='col-12'>
            <div className='form-floating'>
              <input type="text" id='Discription' placeholder='_' className='form-control'  name='Discription' value={Discription} onChange={edit} />
              <label htmlFor="Discription" >Discription</label>
            </div>
          </div>
       </div> 
            </ModalBody>
            <ModalFooter>
          <Button color="primary" onClick={update}>
           Edit task
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
         </Modal>
    </div>
  )
}
