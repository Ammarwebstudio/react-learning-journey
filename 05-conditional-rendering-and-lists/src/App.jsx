import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too",
    },
    {
      title: "Hey i am a grocery todo",
      desc: "I am a good todo but i am a grocery todo",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <div className="border border-purple-500 m-4">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   );
  // };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setshowbtn(!showbtn)}
        >
          Toggle ShowBtn
        </button>
        {showbtn ? (
          <button>showbtn is true</button>
        ) : (
          <button>showbtn is false</button>
        )}
        {/* {showbtn && <button>showbtn is true</button>} */}
      </section>
      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo} />;
        return (
          <div key={todo.title} className="border border-purple-500 m-4">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
