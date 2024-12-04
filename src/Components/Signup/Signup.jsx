import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Button, Input, DatePicker } from "antd"

const Signup=()=>{
const navigate= useNavigate()
 const [error, setError]=useState("")
const [password, setPassword]= useState("")
const [confirmPassword, setConfirmPassword]=useState("")
const Check=()=>{
    if (password.length<6){
        setError("Length of password must be greater than 6")
        return
    }
    if (password!=confirmPassword){
        setError("Password didn't match")
        return
    }
    
    
}

const handlePasswordChange=(e)=>{  
 setPassword(e.target.value)
}
const handleConfirmPassword=(e)=>{
    setConfirmPassword(e.target.value)
}

    return(
        <div style={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Card title="Signup" styles={{header:{background:"#1574EF", color:"white"}}} style={{width:"500px"}}>
                <p style={{ marginBottom:"5px"}}>Full Name</p>
                <Input placeholder="Name"/>
                <p style={{marginBottom:"5px"}}>Email</p>
                <Input placeholder="Email"/>
                <p style={{marginBottom:"5px"}}>Phone Number</p>
                <Input placeholder="+977 ********"/>
                <p>Date Of Birth</p>
                <DatePicker/>
                <p>Password</p>
                <Input.Password placeholder="input password" value={password} onChange={handlePasswordChange}/>
                <p>Confirm Password</p>
                <Input.Password placeholder="input password" value={confirmPassword} onChange={handleConfirmPassword} />

                <Button type="primary" onClick={Check} style={{marginTop:"10px"}}>Signup</Button>
                <p>Your account exist? <Button type="link" onClick={(()=>{
                    navigate("/login")
                })}>Login</Button></p>
                <p>{error}</p>
            </Card>
        </div>
    )
}

export default Signup