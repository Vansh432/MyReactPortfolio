import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import './App.scss'
import Home from './Pages/Home';
import Project from './Pages/Projects';
import Experience from './Pages/Experience';
import Skill from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './Components/Footer'
import { useState } from "react";

function App(){
  let [checkNav,setNavBar]=useState(true);
  function showClose(){
    setNavBar(false);
  }

  function showMenu(){
    setNavBar(true);
  }
  return <>
     <Router>
      <nav className={checkNav?"flex items-center justify-center h-20 border-b-[1px] max-md:h-fit":"navMobileView"}>

           <ul className="flex w-3/5 justify-around w-2/4 max-md:block max-md:w-[100%]">
            <li><NavLink to="/" >HOME</NavLink></li>
            <li><NavLink to="/project" >PROJECTS</NavLink></li>
            <li><NavLink to="/experience" >EXPERIENCES</NavLink></li>
            <li><NavLink to="/skill" >SKILLS</NavLink></li>
            <li><NavLink to="/contact" >CONTACT</NavLink></li>
            <div>
          
           </div>
           </ul>
          
      </nav>
      {checkNav?<ion-icon name="menu-outline" id="menu" onClick={showClose}></ion-icon>:<ion-icon name="close-outline" id="close" onClick={showMenu}></ion-icon>}
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/skill" element={<Skill/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
     </Router>
     <Footer/>
  </>
}


export default App