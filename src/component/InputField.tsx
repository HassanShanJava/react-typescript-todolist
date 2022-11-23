import React, { useRef } from 'react'
import './Styles.css' 

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent)=>void
}


const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}:Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{
            handleAdd(e)
            // and it will also this this
            inputRef.current?.blur()
        } }>
        <input
         ref={inputRef}
         type="text"
         value={todo}
         onChange={(e)=>setTodo(e.target.value)}
         placeholder='Enter a task' className='input__box'/>
        <button className='input_submit' type='submit'>GO</button>
    </form>
  )
}

export default InputField