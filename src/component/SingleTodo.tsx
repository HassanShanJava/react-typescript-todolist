import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model/modal";
// import TodoList from "./TodoList";

type Prop = {
  index: number;
  todo: Todo;
  key: number;
  todoos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// what r we gona send to this single todo! :-

// we recieve the here
const SingleTodo = ({ index, todo, key, todoos, setTodos }: Prop) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todoos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todoos.filter((todo) => todo.id !== id));
  };

  // use useRef hook to autofocus on edit input field
  const inputRef = useRef<HTMLInputElement>(null);

  //   use useeffect so whenever edit changes it fires of
  useEffect(() => {
    inputRef.current?.focus();
    // whenever the edit changess, it focuses
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todoos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    // setTodos(todos.map)
    setEdit(false);
  };
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided)=>(

      <form 
        className="todos__single"
        onSubmit={(e) => handleEdit(e, todo.id)}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
        {/* if edit mode is on, display input box */}
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
        ) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              } else {
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
        )
      }
      
    </Draggable>
  );
};

export default SingleTodo;
