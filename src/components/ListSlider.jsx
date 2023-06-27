import ListItem from "./ListItem";
import "./listSlider.css";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

export default function List() {
  const listRef = useRef();
  const clickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left") {
      listRef.current.style.transform = `translateX({distance + 230}px)`;
      alert("left $");
    }
    if (direction === "right")
      listRef.current.style.tranform = `translateX(-230px)`;
  };
  return (
    <div className="list">
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <FaAngleLeft
          className="sliderBtn left"
          onClick={() => {
            clickHandler("left");
          }}
        />
        <div className="listContiner" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <FaAngleRight
          className="sliderBtn right"
          onClick={() => {
            clickHandler("right");
          }}
        />
      </div>
    </div>
  );
}
