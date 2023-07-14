import {faArrowLeft} from "react-icons/fa"
import { Link, useLocation } from "react-router-dom";
import Trailer from "../../components/OnePieceTrailer.mp4";
import "./watch.css";

function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <>
    <div className="watch">
      <Link to="/">
        <div className="back">
          <faArrowLeft />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={Trailer} />
    </div>
    </>
  );
}

export default Watch;