import { Search, AllInclusive } from "@material-ui/icons";
import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
const axios = require('axios');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [search, setSearch] = useState("O");
  const [movie, setMovie] = useState([]);


  async function handleSearch(e){
    try{
      setSearch(e.target.value);
   const res = await axios.get("http://localhost:8800/api/movies/search/O");
    setMovie(res.data);
    console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  }
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <div className="logo"><AllInclusive style={ {color: "red", height: "50px", width: "50px"}}/><h1>Anime</h1></div>
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
        </div>
        <div className="right">
          <div className="searchComponent">
          <div className="searchBar">
            <Search className="icon" />

          <input className="search" type="text" placeholder="Search" onChange={(e)=>{ handleSearch(e)}} />
            </div>    
          <div className="searchResult">
            <span>{search}</span>
          {movie.map((data) => (
          <div>
         <img src={data.imgSm} alt="" />
         <span>{data.title}</span>
         </div>
    ))}
          </div>
          </div>
              <button className="logout" onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
