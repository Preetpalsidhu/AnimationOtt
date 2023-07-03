import "./home.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/listSlider/ListSlider";

function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
