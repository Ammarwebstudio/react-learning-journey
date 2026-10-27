import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case 1: Run on every Render
  useEffect(() => {
    alert("Hey i will run on every Render");
  });

  // Case 2: Run only on first Render
  useEffect(() => {
    alert("Hey Welcom to my site. This is the first render");
  }, []);

  // Case 3: Run only when certain value change
  useEffect(() => {
    alert("Hey i am running beacuse color was changed");
  }, [color]);

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey Welcom to my site. This is the first render of App.jsx");

    return () => {
      alert("Component was unmounted");
    };
  }, []);

  return <div>i am navbar of {color} color hee hee</div>;
};

export default Navbar;
