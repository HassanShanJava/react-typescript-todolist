import React from "react";
import "./Styles.css";

import { Todo } from "../model/modal";
import SingleTodo from "./SingleTodo";

interface Props {
  todoos: Todo[];
  setTodoos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoos, setTodoos }: Props) => {
  return (
    <div className="todos">
      {todoos.map((item) => ( 
        //  we are also sending all of the todo's for deleting, editing and other stuff
        <SingleTodo todo={item} 
            key={item.id}  
            todoos={todoos}
            setTodos={setTodoos}
        />
      ))}
    </div>
  );
};

export default TodoList;
