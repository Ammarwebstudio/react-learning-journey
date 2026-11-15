import React from "react";
import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const max = 15;
  function handleIncrement() {
    if (count < max) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    count > 0 ? setCount(count - 1) : 0;
  }

  const scale = 0.55 + count * 0.03;
  const showFlower = count >= 15;
  const caption =
    count === 0
      ? "Just a seed"
      : count < 5
        ? "Sprouting"
        : count < 10
          ? "Growing"
          : count < 15
            ? "Thriving"
            : "In full bloom";

  useEffect(() => {
    console.log("Count", count);
  }, [count]);

  useEffect(() => {
    document.title = count ? `Count : ${count}` : "Counter";
  }, [count]);

  return (
    <div className="counter">
      <p className="counter__label">Counter</p>

      <svg className="counter__plant" viewBox="0 0 120 110" aria-hidden="true">
        <g className="plant" style={{ "--s": scale }}>
          <path
            d="M60 72V40"
            stroke="#5f7a4a"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M60 56Q38 54 34 38Q54 36 60 56Z" fill="#7fa05f" />
          <path d="M60 48Q82 46 86 30Q66 28 60 48Z" fill="#6b8e4e" />
          <path d="M60 40Q50 24 60 14Q70 24 60 40Z" fill="#8fb06c" />

          <g
            className={
              showFlower
                ? "plant__flower plant__flower--visible"
                : "plant__flower"
            }
          >
            <circle cx="60" cy="6" r="5" fill="#f2c9a0" />
            <circle cx="53" cy="11" r="5" fill="#f2c9a0" />
            <circle cx="67" cy="11" r="5" fill="#f2c9a0" />
            <circle cx="55" cy="18" r="5" fill="#f2c9a0" />
            <circle cx="65" cy="18" r="5" fill="#f2c9a0" />
            <circle cx="60" cy="12" r="4" fill="#e8b04a" />
          </g>
        </g>

        <rect x="30" y="70" width="60" height="12" rx="6" fill="#b39565" />
        <path
          d="M35 82H85L80 104Q79 108 75 108H45Q41 108 40 104Z"
          fill="#c9ae7e"
        />
        <circle cx="51" cy="92" r="2.4" fill="#5b4a2e" />
        <circle cx="69" cy="92" r="2.4" fill="#5b4a2e" />
        <path
          d="M55 96Q60 101 65 96"
          stroke="#5b4a2e"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="counter__value">{count}</div>
      <span className="counter__caption">{caption}</span>

      <div className="counter__buttons">
        <button className="btn btn--decrement" onClick={handleDecrement}>
          − Decrement
        </button>
        <button className="btn btn--increment" onClick={handleIncrement}>
          + Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
