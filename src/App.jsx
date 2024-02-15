import Form from './components/form'
import List from './components/list'
import {getValue} from './function.js'
import './App.css'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState("Uncategorized");
  
  function handleClick(e) {
    let cat = e.target.getAttribute("value");
    
    setCategory(cat);

  }


  return (
    <>
     <div className="card-wrapper">
      <div className="category">
        <h2 value="Uncategorized" onClick={handleClick}>All</h2>
        <h2 value="Groceries" onClick={handleClick}>Groceries</h2>
        <h2 value="College" onClick={handleClick}>College</h2>
        <h2 value="Payments" onClick={handleClick}>Payments</h2>
      </div>
      
      <div className="tasks">
        <h1>All Tasks</h1>

        <Form category={category}/>

      </div>
     </div>
    </>
  )
}

export default App
