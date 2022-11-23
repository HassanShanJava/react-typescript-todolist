import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model/modal";

type Prop={
    todo:Todo,
    key:number,
    todoos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


// what r we gona send to this single todo! :-

// we recieve the here
const SingleTodo = ({todo, key, todoos, setTodos}:Prop) => {
  return (
    <form className="todos__single">
        <span className="todos__single--text">{todo.todo}</span>
        <div>
            <span className="icon"><AiFillEdit/></span>
            <span className="icon"><AiFillDelete/></span>
            <span className="icon"><MdDone/></span>
        </div>

    </form>
  )
}

export default SingleTodo