import React, { useState,useEffect } from 'react'
import {useFormik} from 'formik'
import axios from "axios"
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Edit from './Edit';


function Author() {
  const [user,setUser]=useState([
    {
      id:1,
      name:"Johnson",
      dob:12-3-1994,
      biography:"He  writes books about carriages, corsets, and smartwatches. Her books have received starred reviews in Publishers Weekly, Library Journal, and Booklist."
    },
    {
      id:2,
      name:"Moore LLc",
      dob:10-4-1993,
      biography:"his pens a weekly newsletter about tea, books, and basically anything and everything"
    }

  ]);
  const [isLoading, setLoading] = useState(true);
  const [update,setUpdate]=useState(-1);
   const formvalidationSchema = yup.object({

    name: yup
        .string()
        .required().min(4),
        biography: yup
        .string()
        .required().min(4),
    dob: yup
        .number()
        .required(),
       
   
})

 

const  formik=useFormik({
  initialValues:{
    name:"",
    dob:"",
    biography:"",
   
  },
  
  validationSchema: formvalidationSchema,
  onSubmit:values=>{
     console.log("form data",formik.values)
   console.log("outpt",values)
    setUser([...user,values]);
     setLoading(false);


   
     },

  
})
 console.log("form-values",formik.values)
 const deleteUser=(id)=>{
    const removeUser=user.filter((user)=>user.id!=id);
   setUser(removeUser);
   } 
 
    
    
  return (
    <div>
      <form className='container' onSubmit={formik.handleSubmit}>
        <div className='row mt-4 ps-5'>
          <div className='col-lg-5 mt-5 m-auto'>
            <input typ="text" className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : "is-valid"}`}
             placeholder='enter  author name' name='name'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
            <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.name && formik.errors.name ? formik.errors.name: null}</span><br />
            
            <input typ="text" className={`form-control ${formik.touched.dob && formik.errors.dob ? "is-invalid" : "is-valid"}`}
             placeholder='enter  author  dob' name='dob'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.dob}/>
                  <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.dob && formik.errors.dob ? formik.errors.dob: null}</span><br />
            
            <input typ="text" className={`form-control ${formik.touched.biography && formik.errors.biography ? "is-invalid" : "is-valid"}`}
             placeholder='enter  author Biography' name='biography' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.biography}/>
                   <span style={{ color: "red", fontSize: ".5" }} >{formik.touched.biography && formik.errors.biography? formik.errors.biography: null}</span><br />
          
      
                   <button  type="submit" className="btn btn-primary create-btn">
                                  Add
                            </button>
            <div>
              
            </div>


          </div>

        </div>
      </form>
      
      <div className="table-responsive">
      
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Book title</th>
                                    <th>Author</th>
                                    <th>ISBN</th>
                                    
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                              {
                    user.map((item, index) => (
                      
                               <tr  className="table-success" key={index}> 
                            <td >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.dob}</td>
                            <td>{item.biography}</td>
                           
                      
                            {/* <td>{`${item.address.suite} ${item.address.street} ${item.address.city}`}</td> */}
                            <td><button type="submit" className="btn btn-success"  onClick={()=>deleteUser(item.id)} >delete</button>
                            {/* <Link type="submit" className='btn btn-success' to="/edit/${id}" >Edit</Link></td> */}
                         </td>   </tr>
                    ))}
                            </tbody>
                        </table>
 
                    </div>
    </div>
                    
  )
}

export default Author