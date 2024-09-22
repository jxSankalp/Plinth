import React, { useEffect } from "react";
import "./Cursor.css"; // External CSS file for styling

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorinner = document.querySelector(".cursor2");

    const onMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorinner.style.left = `${e.clientX}px`;
      cursorinner.style.top = `${e.clientY}px`;
    };

    const onMouseDown = () => {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    };

    const onMouseUp = () => {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default CustomCursor;
