import React from "react";
import "./Styles.css";

import { Todo } from "../model/modal";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todoos: Todo[];
  setTodoos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodo: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodo: Array<Todo>;
}

const TodoList: React.FC<Props> = ({
  todoos,
  setTodoos,
  completedTodo,
  setCompletedTodo,
}: Props) => {
  return (
    <div className="container">
      {/* need clasback then shift the code in */}
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todoos.map((item, index) => (
              <SingleTodo
                index={index}
                todo={item}
                key={item.id}
                todoos={todoos}
                setTodos={setTodoos}
              />
            ))}
            
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>

            {completedTodo?.map((item, index) => (
              <SingleTodo
                index={index}
                todoos={completedTodo}
                todo={item}
                key={item.id}
                setTodos={setCompletedTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>

    // <div className="todos">
    //   {todoos.map((item) => (
    //     //  we are also sending all of the todo's for deleting, editing and other stuff
    //     <SingleTodo todo={item}
    //         key={item.id}
    //         todoos={todoos}
    //         setTodos={setTodoos}
    //     />
    //   ))}

    //   {/* now gona work on drag-and-drop */}
    // </div>
  );
};

export default TodoList;
