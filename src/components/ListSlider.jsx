import ListItem from "./ListItem";
import "./listSlider.css";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function List(){
    return(
    <div className="list">
        <span className="listTitle">Continue watching</span>
        <div className="wrapper">
        <FaAngleLeft/>
    <div className="listContiner">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
    </div>
    <FaAngleRight/>
    </div>
    </div>
    );
}