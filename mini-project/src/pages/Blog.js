import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState ,useEffect} from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import '../styles/Contact.css'
import {useNavigate} from "react-router-dom"







function Blog() {
 

 
    const [blog, setBlogs] = useState([
      {
        id: '43',
        subject: 'Dolo',
        description: 'Deşi expresia este un nonsens, are o lungă istorie. Expresia a fost utilizată de-a lungul a câteva secole de către tipografi pentru a expune caracteristicile cele',
        date: '12/01/2022',
      },
      {
        id: '40',
        subject: 'Dolo',
        description: 'Deşi expresia este un nonsens, are o lungă istorie. Expresia a fost utilizată de-a lungul a câteva secole de către tipografi pentru a expune caracteristicile cele',
        date: '12/03/2022',
      },
      {
        id: '12',
        subject: 'Dolo',
        description: 'Deşi expresia este un nonsens, are o lungă istorie. Expresia a fost utilizată de-a lungul a câteva secole de către tipografi pentru a expune caracteristicile cele',
        date: '12/04/2022',
      },

    ]);
 
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [id,setId] = useState("")
    const [subject,setSubject] = useState("")
    const [description,setDescription] = useState("")
    const [date,setDate] = useState("")



    let history = useNavigate();

const handleSubmit = (e)=>{
       e.preventDefault()
       blog.push({
        id:id,
        subject:subject,
        description :description ,
        date:date,

       })


       history("/contact")
       setShow(false)


}

function deleteBlog(Id) {
  const newData = blog.filter(Blog => Blog.id !== Id);
  setBlogs(newData);
}


/// store data in localstorge bloger

useEffect(() => {
  const userFromStorage = localStorage.getItem('blog');
  if (userFromStorage) {
    setBlogs(JSON.parse(userFromStorage));
  }
}, []);

useEffect(() => {
  localStorage.setItem('blog', JSON.stringify(blog));
}, [blog]);



/// search bar 


const [query,setQuery] = useState("");

const search = (data) =>{

return data.filter(item=>item.id.toLowerCase().includes(query) || 
item.subject.toLowerCase().includes(query) || 
item.date.toLowerCase().includes(query))

};



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
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "" }}><h2><b>Blog Poste</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Poste
              </Button>
            </div>
          </div>
          
          <div class="row">
            <div class="table-responsive " >
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Subject </th>
                    <th>Description</th>
                    <th>Date </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {

                    blog && blog.length > 0
                      ?
                      blog.map((item) => {

                        return (

                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.subject} </td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>

                              <a style={{color:"red", cursor: 'pointer'}}  onClick={() => deleteBlog(item.id)}><i class="material-icons">&#xE872;</i></a>


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
                    <input type="text" class="form-control"  onChange={(e)=> setSubject(e.target.value)}   placeholder="Enter Subject" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control"  onChange={(e)=> setDescription(e.target.value)} placeholder="Entre Description" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="Date" class="form-control"  onChange={(e)=> setDate (e.target.value)}  placeholder="Enter Date" />
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


export default Blog;
