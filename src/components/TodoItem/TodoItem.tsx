import React from 'react'
import {ITodo} from '../../types/data'

interface ITodoItem extends ITodo{
    toggleTodo:(id:number)=>void;
    removeTodo:(id:number)=>void
} 

const TodoItem:React.FC<ITodoItem> = (props) => {
    const{id,title,completed,removeTodo,toggleTodo}=props
  return (
    <div>
        <input type="checkbox" checked={completed} onChange={()=>toggleTodo(id)}/>
      <span style={{display:"inline-block", margin:"0 10px"}}>{title}</span>  
        <button style={{color:"red",backgroundColor:"transparent",outline:"none",border:"none",cursor:"pointer"}} onClick={()=> removeTodo(id)} >X</button>
    </div>
  )
}

export default TodoItem