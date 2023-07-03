import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter as Router, Routes, Route, link} from "react-router-dom";

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
    </Routes>
  </Router>
  );
}

export default App;
