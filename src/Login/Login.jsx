import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import {creatUserWithEmailandPassword} from "firebase/auth"
const Login = (props) => {
  const getval = (e) => {
    e.preventDefault()
    const email =e.target.email.value
    const password =e.target.password.value
    creatUserWithEmailandPassword(auth,email,password).then(data=>console.log(data,"AuthData"))
  }
  return (
    <div style={{
      backgroundColor: "skyblue", width: "100vw", height: "100vh", display: "flex",
      justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ width: "400px", backgroundColor: "aliceblue", height: '300px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h3 style={{ color: "orangered", marginBottom: "10px" }}>{props.msg}</h3>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Login</h1>
        <form action="" onSubmit={(e) => getval(e)}>
          <input name='email' type="email" placeholder='Enter Email' style={{ width: "300px", height: "30px" }} /><br />
          <input type="Password" placeholder='Enter Password' style={{ width: "300px", height: "30px" }} /><br />
          <button style={{ width: "300px", height: "30px", backgroundColor: "ButtonHighlight", border: "none", cursor: "pointer" }}>login</button>
        </form>
        <br />
        <p>Don't have an account? <Link to="/Signup">Sign Up</Link> </p>
      </div>


    </div>
  )
}

export default Login