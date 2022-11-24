import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model/modal";
import TodoList from "./TodoList";

type Prop = {
  todo: Todo;
  key: number;
  todoos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// what r we gona send to this single todo! :-

// we recieve the here
const SingleTodo = ({ todo, key, todoos, setTodos }: Prop) => {


    const  handleDone=(id:number)=>{
        setTodos(todoos.map((todo)=>todo.id===id?{...todo, isDone:!todo.isDone} :todo) )
        
    }

    const  handleDelete=()=>{

    }

    const  handleEdit=()=>{

    }
  return (
    <form className="todos__single">

        {/* / check if done? */}
        {
            todo.isDone?(

                <s className="todos__single--text">{todo.todo}</s>
                ):(
                    
                    <span className="todos__single--text">{todo.todo}</span>
            )
        }
      <div>
        <span className="icon" onClick={()=>handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={()=>handleDelete}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
