import React, { useState,useEffect } from 'react'
import {useFormik} from 'formik'
import axios from "axios"
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Edit from './Edit';

function Book() {
  const [user,setUser]=useState([]);
  const [isLoading, setLoading] = useState(true);
  const [update,setUpdate]=useState(-1);
  const navigate=useNavigate();
  const formvalidationSchema = yup.object({

    title: yup
        .string()
        .required().min(4),
        author: yup
        .string()
        .required().min(4),
    isbn: yup
        .number()
        .required(),
        publication_date: yup
        .number()
        .required()
   
})

 
  useEffect(() => {
    axios.get(`https://6579bdf41acd268f9af9ebcb.mockapi.io/book/5/book/`)
        .then(res => {
            
            setUser(res.data);
            setLoading(false);
            // console.log("Use data:", res.data);
            localStorage.setItem("data",JSON.stringify(res.data));
        })
}, []);
const  formik=useFormik({
  initialValues:{
    title:"",
    author:"",
    isbn:"",
    publication_date:""
  },
  validationSchema: formvalidationSchema,
  onSubmit:values=>{
    // console.log("form data",values)
    axios.post(`https://6579bdf41acd268f9af9ebcb.mockapi.io/book/5/book`,values)
    .then(res => {

    setUser([res.data]);
    setLoading(false);


   
     } )},

  
})
// console.log("form-values",formik.values)
const deleteUser=(id)=>{
  axios.delete(`https://6579bdf41acd268f9af9ebcb.mockapi.io/book/5/book/${id}`,)
  .then(res => {
      console.log("delete",res.data);
  const removeUser=user.filter((user)=>user.id!=id);
  setUser(removeUser);
   } )}
 
    
    
  return (
    <div>
      <form className='container' onSubmit={formik.handleSubmit}>
        <div className='row mt-4 ps-5'>
          <div className='col-lg-5 mt-5 m-auto'>
            <input typ="text" className={`form-control ${formik.touched.title && formik.errors.title ? "is-invalid" : "is-valid"}`}
             placeholder='enter  book title' name='title'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title}/>
            <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.title && formik.errors.title ? formik.errors.title: null}</span><br />
            
            <input typ="text" className={`form-control ${formik.touched.author && formik.errors.author ? "is-invalid" : "is-valid"}`}
             placeholder='enter  book author' name='author'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.author}/>
                  <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.title && formik.errors.author ? formik.errors.author: null}</span><br />
            
            <input typ="text" className={`form-control ${formik.touched.isbn && formik.errors.isbn ? "is-invalid" : "is-valid"}`}
             placeholder='enter  book isbn' name='isbn' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.isbn}/>
                   <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.isbn && formik.errors.isbn? formik.errors.isbn: null}</span><br />
          
            <input typ="text" className={`form-control ${formik.touched.publication_date && formik.errors.publication_date ? "is-invalid" : "is-valid"}`}
             placeholder='enter  book publication Date' name='publication_date'  onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.publication_date}/>
                   <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.publication_date && formik.errors.publication_date ? formik.errors.publication_date: null}</span><br />
                   <button disabled={isLoading} type="submit" className="btn btn-primary create-btn">
                                {isLoading ? "isLoading" : "Add"}
                            </button>
            <div>
              
            </div>


          </div>

        </div>
      </form>
      
      <div className="table-responsive">
      {isLoading ? <h1>Loading...</h1> :
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Book title</th>
                                    <th>Author</th>
                                    <th>ISBN</th>
                                    <th>PublicationDate</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                              {
                    user.map((item, index) => (
                      update===item.id?<Edit id={id} item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                               <tr  className="table-success" key={index}> 
                            <td >{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.isbn}</td>
                            <td>{item.releaseDate}</td>
                      
                            {/* <td>{`${item.address.suite} ${item.address.street} ${item.address.city}`}</td> */}
                            <td><button type="submit" className="btn btn-success"  onClick={()=>deleteUser(item.id)} >delete</button>
                            <Link type="submit" className='btn btn-success' to={`/edit/${item.id}`} >Edit</Link></td>                            </tr>
                    ))}
                            </tbody>
                        </table>
}
                    </div>
    </div>
                    
  )
}

export default Book