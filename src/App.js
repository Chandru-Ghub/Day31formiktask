import './App.css';
import { Formik } from 'formik';
import ContactForm from './components/ContactForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Collection from './Collection';
import Header from './Header';
import { useState } from 'react';
function App() {
  const [data,setData] = useState([{title:'Game of thrones',author:'George R.R. Martin',date:'01-08-1996',num:'9780553573404'}])
  const [title,setTitle] = useState();
  const [author,setAuthor] = useState();
  const [date,setDate] = useState();
  const [num,setNum] = useState();
  const [edit,setEdit] = useState('');
  const [toggle ,setToggle] = useState(true)
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Dashboard
            data = {data}
            setData = {setData}
            setTitle = {setTitle}
            setAuthor = {setAuthor}
            setDate = {setDate}
            setNum = {setNum}
            setEdit = {setEdit}
            setToggle = {setToggle}
            title={title}
            author={author}
            num={num}
            date={date}
            edit = {edit}
            toggle = {toggle}

            />}/>
            <Route path='/add' element={<Collection
            data = {data}
            setData ={setData}
            setDate = {setDate}
            setTitle={setTitle}
            setNum={setNum}
            setAuthor={setAuthor}
            setEdit={setEdit}
            setToggle = {setToggle}
            title = {title}
            author = {author}
            date = {date}
            num = {num}
            edit = {edit}
            toggle = {toggle}
            />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
