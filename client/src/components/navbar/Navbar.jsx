import "./navbar.css";
import { FaSearch } from 'react-icons/fa';
import { FaInfinity } from 'react-icons/fa';
import { useState } from "react";

export default function Navbar(){
    const [showSearch, setShowSearch]= useState(false);
    const [ inputHover, setInputHover]= useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

 window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

    return(
        <nav className={isScrolled ? "navbarScrolled" : "navbar"}>
            <div className="start">
            <div className="logo">
            <FaInfinity className="logoSvg"/><a href="#" ><h1 className="logoTitle">Anime</h1></a>
            </div>
            <div className="link">
            <ul className="navli">
                <li><a href="#">Home</a></li>
                <li><a href="#">Anime</a></li>
                <li><a href="#">Manga</a></li>
    </ul>
         {/*   <ul className="link">
                {links.map(({name, link}) => {
                    return(<li key={name}>
                        <Link to={link}>{name}</Link>
                    </li>);
                })}
                
            </ul>*/}
            </div>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" className="searchBar"/>
                <button className="searchBtn"><FaSearch className="searchSvg"/></button>
            </div>
        </nav>
    );
}


