import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import CustomInput from '../CustomInput'

let schema = yup.object().shape({
    email:yup.string().nullable().required("Email Address is Required"),
    password:yup.string().required("Password is Required")
})


const Login = () => {

    const navigate = useNavigate()


    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:schema,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:(values)=>{
           
        }
    })
  return (
    <>
        <div className="row backgroundsignup">
                        <div className="col-12">
                            <div className='login-card'>
                            <h3 className='text-center fs-2'>Sign In</h3>
                        <form action="" className='gap-15 d-flex flex-column' onSubmit={formik.handleSubmit}>
                            <CustomInput type="email" name='email' className='form-control' id='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/>

                                 <div className='error'>
                                    {
                                        formik.touched.email && formik.errors.email
                                    }
                                </div>

                            <CustomInput type="password" name='password' className='form-control' placeholder='Password' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/>

                                 <div className='error'>
                                    {
                                        formik.touched.password && formik.errors.password
                                    }
                                </div>

                            <div>
                                <Link to={"/forgot-password"} className='text-dark' style={{textDecoration:"underline"}} color='red'>Forgot Password?</Link>
                                <div className='d-flex justify-content-center align-items-center gap-15 mt-4'>
                                    <button className='btn button' type='submit'>Login</button>
                                    <Link className='btn button' to={"/signup"}>SignUp</Link>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Login