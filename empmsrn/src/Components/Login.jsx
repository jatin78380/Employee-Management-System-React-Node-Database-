import React from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [values,setValues] = useState({
        email: '',
        password: ''
    }) 
    const [error,setError] = useState(null)
const navigate = useNavigate()
axios.defaults.withCredentials = true;
    const handleSubmit = (e)=>{
   e.preventDefault()
   axios.post('http://localhost:3000/auth/adminlogin',values)
   .then(result => {
    if(result.data.loginStatus){
      navigate('/dashboard')
    }
    else{
      setError(result.data.Error)
    }
   })
   .catch(err => console.log(err))
    }
  return (
    <div className='container'>
      <div className='loginPage'>
        <div className='loginForm'>
     <div>
      {error && error}
     </div>
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email"><strong>Email:</strong></label>
              <input type="email" id="email" autoComplete='off' placeholder='Enter Email' required onChange= {(e)=>{setValues({...values,email:e.target.value})}} />
            </div>
            <div className="input-group">
              <label htmlFor="password"><strong>Password:</strong></label>
              <input type="password" id="password" placeholder='Enter Password' required onChange= {(e)=>{setValues({...values,password:e.target.value})}}/>
            </div>
            <button className='btn-success' type='submit'>Login</button>
            <div className='checkbox'>
                <input type="checkbox" name='tick' id='tick' />
                <label htmlFor="">You are agree with terms & conditions</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login