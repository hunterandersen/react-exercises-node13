import { useState } from "react";
import "../App.css";

function HomePage(props) {

  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    setList([...list, text]);
  }

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="listInput" id="listInput"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={item+index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
