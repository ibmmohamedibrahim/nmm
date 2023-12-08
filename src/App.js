import React from "react";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Routes,  BrowserRouter } from 'react-router-dom';
import Mobile from "./component/Mobile";
import Navbar from "./component/Navbar";



function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
   <Routes>
  <Route exact path="/" Component={Login}/> 
  <Route exact path="/mobile" Component={Mobile}/> 

    
   </Routes>

   
    </BrowserRouter>



 

    </div>

  );
}

export default App;
