import React, { useState } from "react";

function Spread() {
  const [input, setInput] = useState("");

  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    //e.preventDefault()
    // console.log("clicked")
    setTodo([...todo, { title: input }]);
  };
  return (
    <>
      <h1>Todo</h1>
      <input type="text" placeholder="enter todo" onChange={handleChange} />

      <button type="submit" onClick={handleClick}>
        Submit
      </button>
      <div>
        {todo.map((el) => {
          return el.title;
        })}
      </div>
    </>
  );
}
export default Spread;
