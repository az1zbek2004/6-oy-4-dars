import React, { useState } from 'react'
import {getValue, validate} from '../../function.js'
import List from "../list"
import './index.css'

function Form(props) {
  const {category} = props
  const [name, setName] = useState("");
  let todos = getValue();

  function handleSubmit(e) {
    e.preventDefault();
        
    if (validate(name)) {
      let obj = {
        id:Date.now(),
        name:name,
        category:category,
        status:"active"
      }

      todos.push(obj);

      localStorage.setItem("value", JSON.stringify(todos));
    }

    setName("");
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="name" placeholder='Add a new task insdie ‘All’ category'/>
    </form>

      {
        todos.map((el, index) => {
          return(
            <List name = {el.name} category={el.category} key={index} id={el.id}/>
            )
        })
      }
    </>
  )
}

export default Form