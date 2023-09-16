import { useState } from "react";
import Form from "./Form";
import "./App.css";
import List from "./List";

function App() {
  const [list, setList] = useState([]);
  function getData(data) {
    setList([...list, data]);
  }
  function deleteHandler(id){
    console.log(id);
    setList((prevList) => prevList.filter((_, i) => i !== id));
  }
  return (
    <>
      <Form onSubmit={getData} />
      <List list={list} onDelete={deleteHandler}/>
    </>
  );
}

export default App;
