import React, { useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import TodoList from "./component/TodoList";
import { Todo } from "./model/modal";
// install type dependices

import { DragDropContext, DropResult } from "react-beautiful-dnd";
// react functional component
// reactnode supports all types
const App: React.FC = () => {
  // here is the state for the first todo
  // state must hv types
  const [todo, setTodo] = useState<string>("");

  console.log(todo);

  // state that contains all of our todo's
  // array of interface type
  const [todoos, setTodoos] = useState<Todo[]>([]);

  const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //to stop page reload

    // set toodos
    if (todo) {
      setTodoos([...todoos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todoos);

  // to remove the shadow on submit, use react hook useRef

  const onDragEnd=(result:DropResult)=>{
    // console.log(result);
    const { destination, source } = result;

    // If not in desniation
    if (!destination) {
      return;
    }

    // if at same place as before
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    let add;
    let active = todoos;
    let complete = completedTodo;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodo(complete);
    setTodoos(active);
  };

    

  

  // useRef are like document.getElementId etc.we are hook an html element property
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className="heading">TYPE TASK!</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {/* TodoList to render component */}

      {/* temporaliry */}
      <TodoList
        todoos={todoos}
        setTodoos={setTodoos}
        completedTodo={completedTodo}
        setCompletedTodo={setCompletedTodo}
      />
    </div>
    </DragDropContext>
  );
};

export default App;
