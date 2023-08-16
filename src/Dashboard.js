import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
const Dashboard = ({data,setData,setDate,setAuthor,setNum,setTitle,edit,setEdit,setToggle}) => {
const navigate = useNavigate()

    function handleEdit(num){
      setToggle(false)
      const ed = data.find(a=>a.num == num)
      console.log(ed);
        setAuthor(ed.author)
        setDate(ed.date)
        setNum(ed.num)
        setTitle(ed.title)
        navigate('/add')
        setEdit(num)
        
    }
    function handleDelete(num){
        console.log('deleted',num);
        const filter = data.filter(a=>a.num != num)
        setData(filter)
    }
  return (
    <div>
      <div className='sluder'>

        <marquee behavior="" direction="">
          <h3>A BOOK IS A GIFT YOU CAN OPEN AGAIN AND AGAIN </h3>
        </marquee>
      </div>
      <div className='board'>

        <div className='imges'>
          <img className='lgns' src="https://i.pinimg.com/originals/90/82/0b/90820bdd2d81849629800e4ab9d22380.jpg" alt="" />
        </div>
        <div className='collection'>
            {
                data.map((a,i)=>

            <div>

            <ul key={i=i+1}>
                <li>TITLE: <span> {a.title}</span></li>
                <li>AUTHOR: <span> {a.author}</span> </li>
              <li>PUBLISHED:<span>{a.date}</span>  </li>
              <li>ISBN NO: <span> {a.num}</span> </li>
              
              <button className='e' onClick={()=>handleEdit(a.num)}><FaEdit/></button> 
              <button className='d' onClick={()=>handleDelete(a.num)}><TiDelete/></button>
            </ul>
            </div>
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Dashboard