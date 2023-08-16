import React, { useState } from 'react'
import { Form,Field,useFormik} from 'formik'
import * as yup from 'yup'
const ContactForm = () => {
    // const [firstName,setFirstName] = useState('')
    // const [lastName,setLastName] = useState('')
    const [detail,setDetail] = useState([])
   
    // function handle(e){
    //     e.preventDefault()
    //     console.log(formik.values);
    //     setDetail(formik.values)
    //     console.log(detail);
    // }

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        validationSchema:yup.object({
            firstName: yup.string()
            .max(15,'must be 15 character or less')
            .required('first name is Required'),
            lastName: yup.string()
            .max(20,'must be 10 character or less')
            .required('date is required'),
            email: yup.string()
            .required('Invalid Email-ID'),

        }),
        onSubmit:(values)=>{
            console.log(values)
            setDetail([...detail,values])
        }
    })

    // console.log(formik.touched);
  return (
   
        <div>
            <form onSubmit={formik.handleSubmit}>
           <div className="container">
            <Field type="text" onChange={formik.handleChange} id='firstName' name='firstName' placeholder='enter first name' 
            
            onBlur = {formik.handleBlur}
            value={formik.values.firstName}/>
            {formik.touched.firstName && formik.errors.firstName ? <p style={{color:'red'}}> {formik.errors.firstName}</p>:null}
            
           </div>

           <div className="container">
            <Field type="date" onChange={formik.handleChange} id='lastName' name='lastName' placeholder='enter last name' 
               onBlur = {formik.handleBlur}
             value={formik.values.lastName}/>
             {formik.touched.lastName && formik.errors.lastName ? <p style={{color:'red'}}>{formik.errors.lastName}</p>:null}
           </div>
           
           <div className="container">
            <Field type="email" onChange={formik.handleChange} id='email' name='email' placeholder='enter email-id' 
               onBlur = {formik.handleBlur}
             value={formik.values.email}/>
             {formik.touched.email && formik.errors.email ? <p style={{color:'red'}}>{formik.errors.email}</p>:null}
           </div>
           <button type='submit'>submit</button>

           </form>
           <div>
            {detail.map((a)=>
            <div style={{backgroundColor:'lightblue'}}>
            <ul>
              <li>{a.firstName}</li>
              <li>{a.lastName}</li>
              <li>{a.email}</li>
            </ul>
            <button>Delete</button>
            <button>Edit</button>
            </div>
             )
            
            }
           
            
           </div>

        </div>
  
  )
}

export default ContactForm