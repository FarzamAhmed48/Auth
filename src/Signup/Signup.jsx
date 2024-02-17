import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  

  return (
    <div style={{backgroundColor:"skyblue", width:"100vw", height:"100vh", display:"flex",
    justifyContent:"center", alignItems:"center"} }>
        <div style={{width:"400px", backgroundColor:"aliceblue", height:'300px', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h1 style={{textAlign:"center", marginBottom:"10px"}}>SignUp</h1>
            <input  type="text" placeholder='Enter Email' style={{width:"300px", height:"30px"}}/><br />
            <input type="Password" placeholder='Enter Password' style={{width:"300px", height:"30px"}}/><br />
            <button style={{width:"300px", height:"30px", backgroundColor:"ButtonHighlight", border:"none", cursor:"pointer"}}><Link to="/" style={{padding:"8px 130px"}}>SignUp</Link></button><br />
            <p>Already have an account?<Link to="/" >Login</Link> </p>
        </div>
        

    </div>
  )
}

export default Signup