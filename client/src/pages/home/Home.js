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
          "lists/",
          {headers : {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWY0ZjcwYTc3MDdiMGYwZDVmNzE3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODkzMDMyNCwiZXhwIjoxNjg5MzYyMzI0fQ.LVs9D7QSSMB-l3FbKsPSmR4OlzQq-H0ogOvK6dLYRFk"},},
          );
        setLists(res.data);
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
      {lists.map((list, i) => (
        <List list={list} key={i}/>
      ))} 
    </div>
  );
}

export default Home;
