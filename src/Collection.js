import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Collection = ({data,setData,setDate,date,author,setAuthor,setNum,num,title,setTitle,edit,setEdit,toggle,setToggle}) => {
const navigate = useNavigate()
const [error,setError] = useState('')
const [errnum,seterrnum] = useState('')
const [errdate,seterrdate] = useState('')
const [erraut,seterrauth] = useState('')

    function handleSubmit(e){
        e.preventDefault()

      if(edit){
        
        let filterEdit = data.find(a=>a.num == edit)
        // console.log(filterEdit);
        let update = data.map(a=> a.num == filterEdit.num?
          ({num,title,date,author}):
          {num:a.num,author:a.author,title:a.title,date:a.date} )
          
         setData(update);
         setAuthor('')
         setDate('')
         setNum('')
         setTitle('')
         setToggle(true)
         setEdit('')
         navigate('/')
      }


      else{

        var submit;
          {
        if(title == '' || author == ''){
          submit = false
          setError('Field is required')
          seterrauth('Field is required')
       
        }
        else if(title.length<3 || author.length<3){
          submit = false
          setError('name should atleast 3character')
          seterrauth('name should atleast 3character')
        }
       
        else{
          submit = true
          setError('✅')
          seterrauth('✅')
        }
      }
      if(date == ''){
        seterrdate('Must required field')
        submit = false
      }
      else{
        seterrdate('✅')
      }
      if(num == ''){
        seterrnum('Must required field')
        submit = false
      }
      else if(num.length < 13){
        seterrnum('Num should Atlest 13digits')
        submit = false
      }
      else{
        seterrnum('✅')
      }
       
      if(submit){
        console.log(submit)
        // const copy = [...data]
        setData([...data,{title:title,author:author,date:date,num:num}])
        setTitle('')
        setAuthor('')
        setDate('')
        setNum('')
        navigate('/')

      }
      }
      
    }

  return (


    <div className='addbook'>
      <h2>ADD NEW BOOK RECORDS </h2>
      <marquee behavior="" direction="">
          <h3>UPDATE NEW BOOKS AND START EARNING TODAY.... </h3>
        </marquee>
        <div className='formData'>
              <Formik>
                    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                      <div className='details'>
                        <label > Book Title:</label>
                        <Field  className='datas' value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='title'/>
                        <p className='error'>{error}</p>
                      </div>


                      <div className='details'>
                        <label >Author:</label>
                        <Field className='datas' value={author}  onChange={(e)=> setAuthor(e.target.value)} type="text" placeholder='author'/>
                        <p className='error'>{erraut}</p>
                      </div>


                      <div className='details'>
                        <label > Publication Date:</label>
                        <Field className='datas' value={date}  onChange={(e)=> setDate(e.target.value)} type="date" placeholder='published date'/>
                        <p className='error'>{errdate}</p>
                      </div>



                      <div className='details'>
                        <label > ISBN No:</label>
                        <Field className='datas' value={num}  onChange={(e)=> setNum(e.target.value)} type="number" placeholder='ISBN number'/>
                        <p className='error'>{errnum}</p>
                      </div>
                        <button className='add' type='submit'>{toggle?'ADD':'UPDATE'}</button>
                    </form>
                    </Formik>
          </div>
    </div>
  )
}

export default Collection