import { useState } from "react";
export default function Todo({ item,id,onDelete }) {
  const[check,setCheck] = useState(false);
  function changeHandler(){
    setCheck(!check);
  }
  function deleteHandler(){
    onDelete(id);
    
  }
  return (
    <>
      <li key={id} className="flex items-center justify-center space-x-2 text-2xl text-slate-200">
        <input type="checkbox" onChange={changeHandler} value={check} className="check"></input>
        <span className ={check === true? "line-through":""}>{item}</span>
        <button onClick={deleteHandler}>❌</button>
      </li>
    </>
  );
}
