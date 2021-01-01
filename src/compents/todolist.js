import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from 'react-redux'
function Todolist() {
    let todos = useSelector(state => state)
    return (
        <div> 
           {console.log(todos)}
        {todos.map(el=>{ 
            return <Todoitem key={todos.id} el={el}/>
        })}
           
        </div>
    )
}
export default Todolist
