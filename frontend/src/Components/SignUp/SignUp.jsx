import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  return (
    <>
     <div className="main-container">
      <h1>Create Account</h1>
      <form>
       <label htmlFor="user-name">Name</label>
       <input type="text" className="user-name" value={name} required onChange={(e) => setName(e.target.value)}/>
       <label htmlFor="user-email">Email</label>
       <input type="email" className="user-email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
       <label htmlFor="user-password">Password</label>
       <input type="password" className="user-password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
       <label htmlFor="confirm-password">Confirm Password</label>
       <input type="password" className="confirm-password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}/>
       <button type="submit">Create</button>
      </form>
     </div>
    </>
  )
}

export default SignUp