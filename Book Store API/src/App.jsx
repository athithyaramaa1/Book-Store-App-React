import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
const[data, setData] = useState([])

const FetchingData = async () => {
  try {
    const{
      data : {books},
    } = await axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    console.log(books)
    setData(books)
  } catch (error) {
    console.log(error.message)
  }
}

useEffect(() => {
  FetchingData();
}, [])
  return (
    <>
      {data.map((ele, idx) => {
        return(<div key={data.id}>
          <h1 style={{textAlign: 'center', color:'red'}}>{idx+1}. {ele.title}</h1>
          <div className='flex'>
          <img src={ele.imageLinks.thumbnail} alt="" />
          <p style={{marginLeft: '14px', textAlign:'center'}}>{ele.description}</p>
          </div>
          <hr />
        </div>)
        
      })}
      
    </>
  )
}

export default App
