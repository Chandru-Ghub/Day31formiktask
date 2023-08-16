import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
      <img className='icon' src="https://img.freepik.com/premium-photo/stack-books_172429-164.jpg?w=360" alt="" />
      <h1>bOOKify</h1>
    </div>
    <div className='links'>
        <Link className='ac' to = '/'>Dashboard</Link>     
        <Link className='ac' to = '/add'>Add New Book</Link>    
    </div> 
        
    </div>
  )
}

export default Header