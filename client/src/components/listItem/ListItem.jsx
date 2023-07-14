import { useState, useEffect } from "react";
import Home from "../Home.webp";
import "./listItem.css";
import { FaPlay, FaPlus, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Trailer from "../OnePieceTrailer.mp4";
import axios from "axios";

export default function ListItem({item, index}){
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () =>{
            try{
                console.log("request sent"+ item)
                const res = await axios.get("http://localhost:8800/api/movies/"+item,  {headers : {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWY0ZjcwYTc3MDdiMGYwZDVmNzE3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQyMjIxOSwiZXhwIjoxNjg4ODU0MjE5fQ.Lv8w02b_4w5V-AWyz0-QTYeh1ZUH1lFEhsGKC0lurS4"},},
                );
            console.log(res.data);
            setMovie(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
    }, [item])

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
                <span>movie.duration</span>
                <span className="limit">{movie.limit}</span>
                </div>
                <div className="desc">
                    <span>{movie.desc}</span>
                    </div>
                    <div className="genre"><span>{movie.genre}</span></div>
            </div>
            </>)}
        </div>
    );
}