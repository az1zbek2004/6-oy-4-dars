import React, { useState } from "react";
import { getValue } from "../../function.js";
import "./index.css";
import trash from "../../assets/Vector.svg";

function List(props) {
  const [todos, setTodos] = useState(getValue());

  function handleDelete(e) {
    const confrm = confirm("Rostdan ham o'chirmoqchimisiz?");
    let copied = JSON.parse(JSON.stringify(todos))
    let ids = e.target.getAttribute("data_id");

    if (confrm) {
      let copied2 = copied.filter((el) => {
        return String(el.id) !== ids;
      });
      localStorage.setItem("value", JSON.stringify(copied2));
      console.log(copied2);
    }

  }

  function handleChange(e) {

    if (e.target.checked) {
      return(
        e.target.parentNode.parentNode.setAttribute('class', 'list-group text')
        )
    } else {
      return(
        e.target.parentNode.parentNode.setAttribute('class', 'list-group')
        )
    }
  }

  return (
    <div className="list-group">
      <div className="task-text">
        <input
          value={props.name}
          className="task-checkbox"
          type="checkbox"
          name="task"
          id="task"
          onChange={handleChange}
        />
        <p className="task-title">{props.name}</p>
        <span className="task-category">{props.category}</span>
      </div>
      <img
        className="trash-icon"
        data_id={props.id}
        onClick={handleDelete}
        src={trash}
        alt="trash icon"
      />
    </div>
  );
}

export default List;
