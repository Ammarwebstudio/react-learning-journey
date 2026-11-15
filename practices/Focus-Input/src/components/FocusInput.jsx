import React from "react";
import "./FocusInput.css";
import { useRef, useState } from "react";

const FocusInput = () => {
  const inputRef = useRef(0);
  const [focus, setfocus] = useState(null);

  function handleInputFocus() {
    inputRef.current.focus();
  }

  return (
    <div className="focus-box">
      <input
        className="focus-box__input"
        type="text"
        placeholder="Type something here..."
        ref={inputRef}
        onFocus={() => {
          setfocus(true);
        }}
        onBlur={() => {
          setfocus(false);
        }}
      />

      <button className="focus-box__btn" onClick={handleInputFocus}>
        Focus the input
      </button>

      <p className="focus-box__status">
        Is the input focused? <b>{focus ? "Yes" : "No"}</b>
      </p>
    </div>
  );
};

export default FocusInput;
