// import { useState } from "react";
import Todo from "./Todo";
export default function List({ list,onDelete }) {
  
  return (
    <ul className=" mt-12 ">
      {list.map((item, index) => (
        <Todo item={item} key={index} id={index} onDelete={onDelete}/>
      ))}
    </ul>
  );
}

