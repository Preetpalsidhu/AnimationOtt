import "./home.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/listSlider/ListSlider";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(
          `lists`,
          {headers : {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWY0ZjcwYTc3MDdiMGYwZDVmNzE3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQyMjIxOSwiZXhwIjoxNjg4ODU0MjE5fQ.Lv8w02b_4w5V-AWyz0-QTYeh1ZUH1lFEhsGKC0lurS4"},},
          );
        console.log(res);
        //setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  }, [type,genre]);
  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <List />
    </div>
  );
}

export default Home;
