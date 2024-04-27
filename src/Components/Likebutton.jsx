import React, { useState } from "react";

const Likebutton = () => {
  let [isLicked, setIsLicked] = useState(false);
  let [count, setCount] = useState(0);
  let clicked = () => {
    setIsLicked(!isLicked);
    setCount((currentCount) => {
      return currentCount + 1;
    });
    setCount((currentCount) => {
      return currentCount + 1;
    });
    setCount((currentCount) => {
      return currentCount + 1;
    });
    console.log("we are going to toggle!!");
  };

  let likeStyle = { color: "red" };
  return (
    <div>
      <p>Clicks={count}</p>
      <h4>State in React</h4>
      <p onClick={clicked}>
        {isLicked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i style={likeStyle} className="fa-solid fa-heart"></i>
        )}
      </p>
    </div>
  );
};

export default Likebutton;
