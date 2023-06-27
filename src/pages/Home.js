import "./home.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import List from "../components/ListSlider";

function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <List />
    </div>
  );
}

export default Home;
