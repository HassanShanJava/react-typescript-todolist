import React from "react";
import "./Styles.css";

import { Todo } from "../model/modal";

interface Props {
  todoos: Todo[];
  setTodoos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoos, setTodoos }: Props) => {
  return (
    <div className="todos">
      {todoos.map((item) => (
        <li>{item.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
