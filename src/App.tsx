import React, { useState } from 'react';
import './App.css'
import InputField from './component/InputField';
import TodoList from './component/TodoList';
import { Todo } from './model/modal';

// react functional component
// reactnode supports all types
const App:React.FC=()=> {

  // here is the state for the first todo
  // state must hv types
  const [todo,setTodo]= useState<string>('')

  console.log(todo);


  // state that contains all of our todo's
  // array of interface type
  const [todoos, setTodoos] = useState<Todo[]>([])



  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //to stop page reload


    // set toodos
    if(todo){
      setTodoos([...todoos, {id:Date.now(),todo, isDone:false}])
      setTodo("")
    }
    
  }
  
  console.log(todoos);
  

  // to remove the shadow on submit, use react hook useRef




  // useRef are like document.getElementId etc.we are hook an html element property
  return (
    <div className='App'>
      <span className='heading'>TYPE TASK!</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

      {/* TodoList to render component */}

      {/* temporaliry */}
      <TodoList todoos={todoos} setTodoos={setTodoos}/>
      
    </div>
  );
}

export default App;
