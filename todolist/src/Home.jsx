import React from 'react'
import { useState } from 'react';
import Create from './Create'

const Home = () => {
    const [todos, settodos] = useState([]);
  return (
    <div>
      <h2>ToDo List</h2> 
      <Create/>
      {
        todos.length ===0 ?
        <div><h2>No Record</h2> </div>
        :
        todos.map(todo =>{
            return (
                <div>
                    {todo}
                </div>
            );
        })
      }
    </div>
  )
}

export default Home
