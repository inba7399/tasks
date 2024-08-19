import { useState, useEffect } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Addusers from './Addusers'
import { Modal } from 'bootstrap'

function App() {
  const url = "https://jsonplaceholder.typicode.com/users"
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchUser, setSearchUser] = useState([])
  const [editUser,setEditUser]=useState({})

  useEffect(() => {
    axios.get(url)
      .then(data => {
        setData(data.data)
        setSearchUser(data.data)
      })
      .catch(error => console.log(error));
  }, [])

  function search(e) {
    const Stext = e.target.value.toLowerCase()
    const users = data.filter((user) => user.name.toLowerCase().includes(Stext) || user.username.toLowerCase().includes(Stext)
      || user.email.toLowerCase().includes(Stext) || user.address.street.toLowerCase().includes(Stext)
      || user.address.suite.toLowerCase().includes(Stext) || user.address.city.toLowerCase().includes(Stext)
      || user.address.zipcode.includes(Stext) || user.phone.includes(Stext) || user.website.toLowerCase().includes(Stext)
      || user.company.name.toLowerCase().includes(Stext) || user.company.catchPhrase.toLowerCase().includes(Stext)
      || user.company.bs.toLowerCase().includes(Stext))
    setSearchUser(users)
  }

  function deleteUser(index) {
    axios.delete(`${url}/${index + 1}`)
    setSearchUser(t => {
      return t.filter((_, i) => index !== i)
    })
    setData(t => {
      return t.filter((_, i) => index !== i)
    })
  }

  function add(tempuser) {
    if ((tempuser.username === "" || tempuser.name === "" || tempuser.email === "" || tempuser.phone === "" || tempuser.websit === "" || tempuser.address.street === "")
      || tempuser.address.suite === "" || tempuser.address.city === "" || tempuser.address.zipcode === "" || tempuser.company.name === ""
      || tempuser.company.bs === "" || tempuser.company.catchPhrase === "") {
      window.alert("please fill in all the info box")
    } else {

      axios.post(url, tempuser)
      setData(d => [...d, { ...tempuser }])
      setSearchUser(d => [...d, { ...tempuser }])
      setIsOpen(!isOpen)
    }
  }

  function edit(index) {
    let temp=data[index]
    setEditUser({name:temp.name,userName:temp.username,bs:temp.company.bs,catchPhrase:temp.company.catchPhrase,city:temp.address.city,cname:temp.company.name,email:temp.name,phone:temp.phone,street:temp.address.street,suite:temp.address.suite,website:temp.website,zipcode:temp.address.zipcode})

  }

  function handleEdit(e){
    let name=e.target.name
    const value=e.target.value
     setEditUser ({...editUser,[name]:value})
  }
 
  function updateEdit(index){
    let tempuser={
      name:editUser.name,
      username:editUser.userName,
      email:editUser.email,
      address:{
        street:editUser.street,
        suite:editUser.suite,
        city:editUser.city,
        zipcode:editUser.zipcode
      },
      phone:editUser.phone,
      website:editUser.website,
      company:{
        name:editUser.cname,
        catchPhrase:editUser.catchPhrase,
        bs:editUser.bs
      }
    }
   const temp=data
   temp[index]=tempuser
   console.log(temp)
   setSearchUser(temp)
axios.put(`${url}/${index+1},${tempuser}`)


  }
  return (
    <>
      <div>
        <div style={{backgroundColor:"#06402B"}} className='container rounded p-4 my-3 '>
          <h1 style={{textAlign:"center",color:"white"}} >User Info</h1>
        </div>

        <div className='container p-2 tableBase'>
          <div className='row g-2 py-4'>
            <div className=' col-9'>
              <div className='form-floating'>
                <input type="text" id='T' placeholder='_' className='form-control' name='search' onChange={search} />
                <label htmlFor="T">search...</label>
              </div>
            </div>
            <div className='col-3'>
              <button onClick={() => setIsOpen(!isOpen)} style={{ width: "100%", height: "100%", padding: "0", fontSize: "30px" }} className="btn btn-success">{isOpen ? "Close" : "Add"}</button>
            </div>
          </div>

          <Addusers isOpen={isOpen} add={add} />
          <div className='table-responsive-xl'>
            <table className='table table-hover table-bordered table-sm table-success'>
              <thead>
                <tr className='table-primary'>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Website</th>
                  <th>Edit</th>
                  <th>Delet</th>
                </tr>
              </thead>
              <tbody className='table-group-divider'>
                {searchUser && searchUser.map((user, index) => {
                  return (
                    <>
                      <tr key={user.id} >
                        <td><p>{user.name}</p></td >
                        <td ><p>{user.username}</p></td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street} ,<br /> {user.address.suite} , <br />
                          {user.address.city} ,
                          Code:{user.address.zipcode}</td>
                        <td><h6>{user.company.name}</h6>({user.company.bs} ) <br />
                          <p style={{ fontSize: "13px" }}> "{user.company.catchPhrase}"</p>
                        </td>
                        <td><a href={user.website}>{user.website}</a></td>
                        <td>
                          <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#edit" onClick={()=>edit(index)} >Edit</button>
                          <div className='modal fade modal-xl' id='edit'>
                            <div className='modal-dialog modal-fullscreen-md-down'>
                              <div className='modal-content'>
                                <div className='modal-header'>
                                  <h2>Edit</h2>
                                  <button className='btn-close' data-bs-dismiss="modal" data-bs-target="#edit" ></button>
                                </div>
                                <div className='modal-body'>
                                  <div className="container">
                                    <h5 style={{ textAlign: "center", paddingTop: '12px' }}>User info</h5>
                                    <div className='row g-2 px-3 py-2'>
                                      <div className=' col-sm-6 col-lg-3'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='name' value={editUser.name} onChange={handleEdit}/>
                                          <label htmlFor="T">Name</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-6 col-lg-3'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='userName' value={editUser.userName} onChange={handleEdit} />
                                          <label htmlFor="T">User name</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-12 col-lg-6'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='email' value={editUser.email} onChange={handleEdit}/>
                                          <label htmlFor="T">Email</label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row g-2 px-3 pb-2" >
                                      <div className=' col-sm-6 col-lg-6'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='phone' value={editUser.phone} onChange={handleEdit} />
                                          <label htmlFor="T">Phone</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-6 col-lg-6'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='website' value={editUser.website} onChange={handleEdit}/>
                                          <label htmlFor="T">website</label>
                                        </div>
                                      </div>
                                    </div>
                                    <h5 style={{ textAlign: "center" }}>Adress</h5>
                                    <div className="row g-2 px-3 py-2 ">
                                      <div className=' col-sm-6 col-lg-3'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='street' value={editUser.street} onChange={handleEdit}/>
                                          <label htmlFor="T">street</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-6 col-lg-3'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='suite' value={editUser.suite} onChange={handleEdit}/>
                                          <label htmlFor="T">suite</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-6 col-lg-3'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='city' value={editUser.city} onChange={handleEdit}/>
                                          <label htmlFor="T">city</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-6 col-lg-3'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='zipcode' value={editUser.zipcode} onChange={handleEdit} />
                                          <label htmlFor="T">zipcode</label>
                                        </div>
                                      </div>
                                    </div>
                                    <h5 style={{ textAlign: "center" }}>Company info</h5>
                                    <div className="row g-2 px-3 py-2 pb-2">
                                      <div className=' col-sm-6 col-lg-6'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='cname' value={editUser.cname} onChange={handleEdit}/>
                                          <label htmlFor="T">company name</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-6 col-lg-6'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='bs' value={editUser.bs} onChange={handleEdit}/>
                                          <label htmlFor="T">type of busness</label>
                                        </div>
                                      </div>
                                      <div className=' col-sm-12 col-lg-12'>
                                        <div className='form-floating'>
                                          <input type="text" id='T' placeholder='_' className='form-control' name='catchPhrase' value={editUser.catchPhrase}  onChange={handleEdit}/>
                                          <label htmlFor="T">catch phrase</label>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                <div className='modal-footer'>
                                  <button style={{width:'100%',fontSize:"20px"}} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#edit" onClick={()=>updateEdit(index)}>Update</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td><button className='btn btn-danger' onClick={() => deleteUser(index)}>Delete</button></td>
                      </tr>
                    </>
                  )
                })}

              </tbody>
            </table>
          </div>

        </div>
        <br />
        <br />

      </div>

    </>
  )
}

export default App
