import React from 'react'
import {Link} from 'react-router-dom'
function Dashboard() {
  return (
    <div className='login'>
        <div className='loginform'>
            <div className='navbar'>
            <Link to="/dashboard"  className='brand'>JPRK</Link>
           
           <div>
           <ul>
                <li>
                   <Link to="/dashbaord" className='nav-item'> Dashboard</Link> 
                </li>
                <li>
               <Link to="/dashboard"> Manage Employees</Link>
                </li>
                <li>
               <Link to="/dashboard"> Category</Link>
                </li>
                <li>
               <Link to="/dashboard"> Profile</Link>
                </li>
                <li>
               <Link to="/dashboard"> Logout</Link>
                </li>
            </ul>

           </div>
           </div>
           <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Dashboard</h1>
                    <p>Welcome to your dashboard.</p>
                </div>
            </div>

           </div>
           
        </div>
        <div className='empsss'>
            <h4>Employee Management System</h4>
            </div> 
    </div>
  )
}

export default Dashboard