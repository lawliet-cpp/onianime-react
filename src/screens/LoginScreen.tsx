import React from 'react'
import {  Button, Input } from 'rsuite';
export default function LoginScreen() {
  return (
    <div className="home" style={{width:"30%",marginTop:"100px",backgroundColor:"#22212c",padding:"80px",borderRadius:"20px"}}>
      <h2 style={{marginTop:"30px",marginBottom:"40px"}}>Login </h2>
      <form>
        <div style={{marginBottom:"30px",textAlign:"left"}}>
          
        <Input style={{backgroundColor:"#101017",border:"none",height:"40px"}}  placeholder="Email"/>

        </div>
        <div style={{marginBottom:"40px",textAlign:"left"}}>
         
        <Input style={{backgroundColor:"#101017", border:"none",height:"40px"}}  placeholder="Password"/>

        </div>
        <div style={{width:"60%",textAlign:"center",margin:"auto"}}>
        <Button appearance='primary'>Login</Button>
        </div>

      </form>
   
    </div>
  )
}
