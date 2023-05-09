import React, {useState} from 'react'
import admin from "../../assets/admin.jpg"
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();

    const userObj = {
      email,
      password
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
        navigate("/dashboard");
      } else {
        res.json().then((err) => setErrors(err.errors));

      }
    });
    setEmail("")
    setPassword("")
  }

  console.log(errors)
  
  return (
    <div className="login">
      
        <div className="login-l">
            <img src={admin} alt="" />
        </div>
        <div className="login-r">
          <h3>Please login to continue</h3>


<form onSubmit={handleSubmit}>
      <div className='wrapper'>
        <div>
        <label htmlFor="username">Username <span>*</span></label>
        <input
          type="email" 
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password <span>*</span></label>
        <input
           type="password" 
           required
           id="password" 
           value={password} 
           onChange={(e) => setPassword(e.target.value)} />
      </div>
      {errors.map((err) => (
          <span key={err} className="errors">{err}.</span>
        ))}
      <button type="submit" className='login-btn'>Log In</button>
      </div>
    </form>
        </div>
  
    </div>
  )
}

export default Login