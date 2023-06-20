
import "./banner.css";
import backgroundImage from "./Home.webp";
import logo from "./Home_logo.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";;


export default function Banner(){
    return( 
    <div  className="banner">
        <img
          className="background-image"
          src={backgroundImage}
          alt="background"
        />
        <div className="container">
        <img
          src={logo}
          alt="logo"
          className="logoImage"
        />
        <div className="buttons">
        <button className="play"><FaPlay className="playSvg"/>Play</button>
        <button className="info"><AiOutlineInfoCircle className="infoSvg"/>More Info</button>
        </div>
        </div>
        </div>
    );
}