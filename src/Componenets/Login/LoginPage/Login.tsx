import React from 'react'

import {FaUser} from "react-icons/fa"
import {BiLockAlt} from 'react-icons/bi'
import img from '../../../assests/img/log.svg'
import { FcGoogle } from "react-icons/fc";
import { SiGithub, SiLinkedin } from "react-icons/si";
import './Login.css'
import history from '../../../Pages/History'
import { Link, useHistory } from 'react-router-dom'
const Login = () => {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/signup");
  }
    return (
      <div className="container">
          <div className="form-container">
            <div className="signup-form">
              <form
              className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                  <div className="ui">
                <FaUser/>
                </div>
                <input  placeholder="UserName" id = "username"
                  
                />
                  
              </div>
              <div className="input-field">
                <div className="ui">
                    <BiLockAlt/>
                </div>
                <input  placeholder="Password" 
                  id="password"
                  
                />
                
              </div>
              
              <button className="btn " id="login-btn">
                Log in
                </button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <SiGithub />
                </a>
                <a href="/" className="social-icon">
                  <FcGoogle />
                </a>
              
                <a href="/" className="social-icon">
                    <SiLinkedin />
                </a>
              </div>
            </form>
            </div>
            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>New here ?</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                  </p>
                  <button onClick={handleRoute}className="btn login" id="login-btn">
                    Sign Up
                  </button>
                  
                  
                </div>
                <img src={img} className="image" alt="" />
              </div>
            
          </div>
          </div>
        </div>  

       
    )
}

export default Login
