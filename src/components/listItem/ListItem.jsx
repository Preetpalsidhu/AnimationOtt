import { useState } from "react";
import Home from "../Home.webp";
import "./listItem.css";
import { FaPlay, FaPlus, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Trailer from "../OnePieceTrailer.mp4";

export default function ListItem({index}){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="listItem" onMouseEnter={() =>setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}>
        <img src={Home} className="cardImg" alt="image"></img>
                  {isHovered && (
        <>
        <video  src={Trailer} autoPlay={true} loop/>
        <div className="itemInfo">
            <div className="icons">
                <FaPlay className="icon"/>
                <FaPlus className="icon" />   
                <FaThumbsUp className="icon" />   
                <FaThumbsDown className="icon" />               
            </div>
            <div className="itemInfoTop">
                <span>30min</span>
                <span className="limit">13+</span>
                </div>
                <div className="desc">
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ratione quasientore.</span>
                    </div>
                    <div className="genre"><span>Adventure</span></div>
            </div>
            </>)}
        </div>
    );
}