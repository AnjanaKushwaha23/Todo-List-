import { useState } from "react";
export default function Form({ onSubmit }) {
  const [input, setInput] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (!input) return;
    onSubmit(input);
    setInput("");
   
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center justify-center mt-12"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 ..."
      />
      <button className="bg-zinc-200 text-gray-950 p-2 ...">➕</button>
    </form>
  );
}
