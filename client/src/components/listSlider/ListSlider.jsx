import ListItem from "../listItem/ListItem";
import "./listSlider.css";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRef, useState } from "react";

export default function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const clickHandler = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;
    console.log(distance);
    if (direction === "left" && slideNumber>0) {
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform = `translateX(${distance + 240}px)`;
      console.log(distance+240);
    }
    if (direction === "right" && slideNumber<5){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${distance -240}px)`;
      console.log(distance-240);}
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <FaAngleLeft
          className="sliderBtn left"
          onClick={() => {
            clickHandler("left");
          }}
          style={{display: !isMoved && "none"}}
        />
        <div className="listContainer" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={i} />
          ))}
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
