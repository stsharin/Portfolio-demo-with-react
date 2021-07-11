import React from "react";
import './App.css'
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Services/>
    </div>
  );
}

export default App;
