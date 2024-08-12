import { useState } from 'react'
import Popup from './Popup'

function App() {
 const [newTask,setNewTask]=useState({})
 const [toDos,setToDos]=useState([])
 const [display,setDisplay]=useState([])
 const [modal ,setModal]=useState(false)
 
 function toggle(){
   setModal(!modal)
}

 function updateNewTask(e){
    let name=e.target.name
    const value=e.target.value
     setNewTask ({...newTask,[name]:value,isCompleated:false})
 }

 function addToDos (){
  if(newTask.Title && newTask.Discription !==""){
    setToDos(t=>[...t,{...newTask} ])
    setDisplay(d=>[...d,{...newTask}])
    setNewTask({Title:"",Discription:""})}
 }

 function updateIsCompleated (index,isCompleated){
  setToDos  (t=>{
    return t.map((todo,i)=>{
      if(index===i){
        return{...todo,isCompleated}
      }
      return todo
    })
  })
  setDisplay (t=>{
    return t.map((todo,i)=>{
      if(index===i){
        return{...todo,isCompleated}
      }
      return todo
    })
  })
}

function deleteTask (index) {
  setToDos(t=>{
    return t.filter((_,i) => index !==i)
  })
  setDisplay(t=>{
    return t.filter((_,i) => index !==i)
  })
}

function compleated () {
  let Ctodos=toDos.filter((to) => to.isCompleated === true)
  setDisplay(()=>{
    return Ctodos
  })
}

function all(){
  setDisplay(toDos)
}

function notCompleated () {
  let Ctodos=toDos.filter((to) => to.isCompleated !== true)
  setDisplay(()=>{
    return Ctodos
  })
}

function editTask(utask,index){
 let tempdisp=display
 tempdisp[index]=utask
 setDisplay(tempdisp)
 
}
 
  return (
    <>
      <div>

          <h1 style={{textAlign:"center",padding:"40px",fontSize:"50px"}}>
            Todos
          </h1>

         <div className=' container'>
           <div className='row g-3'>
             <div className=' col-sm-12 col-lg-5'>
               <div className='form-floating'>
                 <input type="text" id='Title' placeholder='_' className='form-control' onChange={updateNewTask} value={newTask.Title} name='Title' />
                 <label htmlFor="Title">Title</label>
               </div>
             </div>

          <div className='col-sm-12 col-lg-5'>
            <div className='form-floating'>
              <input type="text" id='Discription' placeholder='_' className='form-control' onChange={updateNewTask} value={newTask.Discription} name='Discription' />
              <label htmlFor="Discription" >Discription</label>
            </div>
          </div>

         <div className='col-12 col-sm-12 col-lg-2'>
            <button className='btn btn-primary' onClick={addToDos} style={{width:"100%",padding:"9px",fontSize:"25px"}}>
            Add
            </button>
          </div>
       </div> 

       <div className='p-3 my-4 bg-info bg-opacity-75 rounded container'>
         <div className='row'>
          <div className='col'>
            <h2>Filter</h2>
         </div>
        <div className='col d-flex justify-content-end'>
          <div className='btn-group'>
               <button className='btn btn-success' onClick={compleated} >Compleated</button>
               <button className='btn btn-primary' onClick={all} style={{paddingLeft:'15px' , paddingRight:"15px"}}>All</button>
               <button className='btn btn-warning' onClick={notCompleated} >Incompleate</button>
            </div>
          </div>
        </div>
       </div>
         <div className='py-4 container'>
           <div className='row justify-container-center d-flex '>
            {display.map((todo,index)=>{
              return(
                <div className="col-12  col-lg-4 col-md-5 col-sm-7 mb-4" key={index}>
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <div className="card-header bg-primary bg-opacity-50">
                       <h4 style={{textAlign:"center"}}>{todo.Title}</h4>
                    </div>
                    <div className="card-body bg-success bg-opacity-50">
                      <div className="card-text">
                         <h6>Discription</h6>
                         <p>{todo.Discription}</p>
                      </div>
                    </div>
                    <div className="card-footer  bg-primary bg-opacity-25">
                      <div className="row ">
                        <div className="col-6">
                          <div className="btn-group">
                            <button className="btn btn-outline-danger"onClick={()=>deleteTask(index)} >
                                Delete
                            </button>
                            <button onClick={()=> setModal(true)} className="btn btn-outline-primary">
                                Edit
                            </button>
                          </div>
                        </div>
                        <div className="col-6  form-check form-switch " >
                          <input  type="checkbox" id="check" checked={todo.isCompleated} onChange={e=>updateIsCompleated(index,e.target.checked)} className="form-check-input"/>
                          <label htmlFor="check" style={{fontSize:"12px"}} >Compleated Status</label>
                        </div>
                        <div>
                            <Popup toggle={toggle} modal={modal} task={todo} index={index} updatetask={editTask}  />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              )
              })}
           </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default App
