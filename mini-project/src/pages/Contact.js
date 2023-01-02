import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState ,useEffect} from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import '../styles/Contact.css'
import {useNavigate} from "react-router-dom"







function Contact() {
 

 
    const [users, setUsers] = useState([
      {
        id: '43',
        name: 'amir',
        number: '0234235345',
        email: 'dibni@gmail.com',
      },
      {
        id: '32',
        name: 'ahmed',
        number: '0234235345',
        email: 'foloko@gmail.com',
      },
      {
        id: '10',
        name: 'marwa',
        number: '075445345',
        email: 'mar45@gmail.com',
      },
      {
        id: '67',
        name: 'sofiane',
        number: '0534335345',
        email: 'sou25@gmail.com',
      },

    ]);
 
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const [email,setEmail] = useState("")


    let history = useNavigate();

const handleSubmit = (e)=>{
       e.preventDefault()
       users.push({
        id:id,
        name:name,
        number :number ,
        email:email,
       })


       history("/contact")
       setShow(false)


}

function deleteUser(userId) {
  const newData = users.filter(user => user.id !== userId);
  setUsers(newData);
}


/// store data in localstorge

useEffect(() => {
  const userFromStorage = localStorage.getItem('users');
  if (userFromStorage) {
    setUsers(JSON.parse(userFromStorage));
  }
}, []);

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(users));
}, [users]);



/// search bar 


const [query,setQuery] = useState("");

const search = (data) =>{

return data.filter(item=>item.name.toLowerCase().includes(query) || 
item.id.toLowerCase().includes(query) || 
item.number.toLowerCase().includes(query) || 
item.email.toLowerCase().includes(query))

};




console.log(search(users))








    return (

      <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5  rounded">
          <div class="row ">

            <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">

                <form class="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search Contact"  onChange={e=>setQuery(e.target.value)} />

                </form>
              </div>
            </div>
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "" }}><h2><b>Contact Details</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Student
              </Button>
            </div>
          </div>
          
          <div class="row">
            <div class="table-responsive " >
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name </th>
                    <th>Phone</th>
                    <th>Email </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {

                    users && users.length > 0
                      ?
                      users.map((item) => {

                        return (

                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name} </td>
                            <td>{item.number}</td>
                            <td>{item.email}</td>
                            <td>

                              <a style={{color:"red", cursor: 'pointer'}}  onClick={() => deleteUser(item.id)}><i class="material-icons">&#xE872;</i></a>


                            </td>
                          </tr>


                        );


                      }) : "No Data Available"

                  }


                </tbody>
              </table>
            </div>
          </div>



          {/* <!--- Model Box ---> */}
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div class="form-group">
                    <input type="number" class="form-control" onChange={(e)=> setId(e.target.value)}  placeholder="Enter ID" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control"  onChange={(e)=> setName(e.target.value)}   placeholder="Enter Name" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="number" class="form-control"  onChange={(e)=> setNumber(e.target.value)} placeholder="Entre Phone Number" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control"  onChange={(e)=> setEmail (e.target.value)}  placeholder="Enter Email" />
                  </div>

                  <button type="submit" class="btn btn-success mt-4" onClick={(e)=> handleSubmit(e)} >Add New contact</button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </Modal.Footer>
            </Modal>

            {/* Model Box Finsihs */}
          </div>
        </div>
      </div>
    );
  }


export default Contact;
