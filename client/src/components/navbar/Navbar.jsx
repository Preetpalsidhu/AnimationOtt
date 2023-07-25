import { Search, AllInclusive } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

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
          <div className="searchContainer">
          <input className="search" type="text" placeholder="Search" />
          <Search className="icon" />
          </div>
              <button className="logout" onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
