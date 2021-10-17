import React, { useCallback } from 'react'
import img1 from '../../../assests/img/register.svg'
import bs from'../../../assests/img/4.avif'
import {MdOutlineEmail} from 'react-icons/md'
import {FaUser} from "react-icons/fa"
import {BiLockAlt} from 'react-icons/bi'
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import './SignUp.css'
import * as yup from "yup"
const SignUp = () => {
    const history = useHistory();
    const formik = useFormik({
      initialValues : {
        username:'',
        email:'',
        password:''
      },
      
     
      onSubmit: values => {
        console.log(values);
        
      },
    });
    
  const handleRoute = () =>{ 
    history.push("/login");
  }
    return (
        <div className="container" >
          <div className="form-container">
             <div className="signup-form">
                <form 
                   onSubmit={formik.handleSubmit}
                   
                >
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                <div className="ui"><FaUser/></div>
                
                <input  placeholder="UserName" name ="username" onChange={formik.handleChange} value={formik.values.username} />
                </div>
                <div className="input-field">
                <div className="ui"><MdOutlineEmail/></div>
                <input placeholder="Email" name = "email" onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div className="input-field">
                <div className="ui"><BiLockAlt/></div>
                <input  placeholder="Password" name ="password" onChange={formik.handleChange} value = {formik.values.password} />
                </div>
                <button className="btn" id="login-btn">
                Sign up
                </button>
                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                <a href="/" className="social-icon">
                    <SiGithub/>
                </a>
                
                <a href="/" className="social-icon">
                    <FcGoogle/>
                </a>
                <a href="/" className="social-icon">
                    <SiLinkedin/>
                </a>
                </div>
            </form>
          </div>
          </div>
          <div className="panels-container">
             <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                        </p>
                        <button onClick={handleRoute} className="btn signup" id="sign-in-btn" >
                        Sign in
                        </button>
                    </div>
                    <img src={img1} className="image" alt="" />
                </div>
          </div>
        </div>
    )
}

export default SignUp
