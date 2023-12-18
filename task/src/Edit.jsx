import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useFormik} from 'formik'
import axios from "axios"
import * as yup from "yup";

function Edit() { 
  const [user,setUser]=useState([]);
  const [isLoading, setLoading] = useState(false);
    const navigate=useNavigate();
    const {id} = useParams();
    console.log({id});
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
      axios.get(`https://6579bdf41acd268f9af9ebcb.mockapi.io/book/5/book/${id}`)
          .then(res => {
              
             formik. setValues(res.data);
              console.log("Use data:", res.data);
              localStorage.setItem("data",JSON.stringify(res.data));
              setLoading(false);
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
      console.log("form data",values)
      axios.put(`https://6579bdf41acd268f9af9ebcb.mockapi.io/book/5/book/${id}`,values)
      .then(res => {
  
   console.log("update",res.data);
  setUser([...user,res.data])
  setLoading(true);
  navigate("/book") ; 
      
       } 
       
       )},
  
   
  })
  console.log("form-values",formik.values)

   
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
                                {isLoading ? "isLoading" : "Update"}
                            </button>
              <div>
                
              </div>
  
  
            </div>
  
          </div>
        </form>
        </div>
    )
}

export default Edit