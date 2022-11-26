
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}


// import { useReducer } from "react";
// type Action = { type: 'add', payload: string} | { type: 'remove', payload: number}| { type: 'done', payload: number}

// const TodoReducer = (state: Todo[], action:Action) => {
//   switch (action.type){}
//     case 'add':
//       return [
//         ...state,
//         {id: Date.now(), todo:action.payload, isDone:false}
//       ];
//     case ('remove'):


//   }
// }

// export const ReducerExample = () => {

//   const [state, dispatch] = useReducer(TodoReducer, [])
  
// }
