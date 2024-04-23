import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import { motion } from "framer-motion";
import Game from "./Game";

const App = ({navigateToEditor}) => {


  const [isInitial, setisInitial] = useState(()=>{
    return localStorage.getItem('initial') || 'yes'
  })

  useEffect(() => {
    localStorage.setItem('initial','no')
  
  }, [isInitial])
  


  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}

    className="app-container">
      <Navbar navigateToEditor={navigateToEditor} />
      <div className="main-frame">
        {isInitial==='yes' ? <Welcome setisInitial={setisInitial}/> :
        <Game/>
        }
      </div>
    </motion.div>
  );
};

export default App;
