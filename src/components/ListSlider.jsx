import ListItem from "./ListItem";
import "./listSlider.css";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRef, useState } from "react";

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const clickHandler = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left" && slideNumber>0) {
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform = `translateX(${distance + 240}px)`;
    }
    if (direction === "right" && slideNumber<5){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${distance - 240}px)`;}
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
          style={{display: !isMoved && "none"}}
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
