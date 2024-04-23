import React, {  useState } from "react";

import "./Components/levels/Comman.css";

import crypt from "./Encryption";

import Modal from "./Components/Modal/Modal";
import { AnimatePresence } from "framer-motion";




import One from "./Components/levels/One/One";
import Two from "./Components/levels/Two/Two";
import Three from "./Components/levels/Three/Three";
import Four from "./Components/levels/Four/Four";
import Five from "./Components/levels/Five/Five";
import Six from "./Components/levels/Six/Six";
import Seven from "./Components/levels/Seven/Seven";
import Eight from "./Components/levels/Eight/Eight";
import Nine from "./Components/levels/Nine/Nine";
import Ten from "./Components/levels/Ten/Ten";
import Eleven from "./Components/levels/Eleven/Eleven";
// import Twelve from "./Components/levels/Twelve/Twelve";
// import Thirteen from "./Components/levels/Thirteen/Thirteen";
// import Fourteen from "./Components/levels/Fourteen/Fourteen";
// import Fifteen from "./Components/levels/Fifteen/Fifteen";
// import Sixteen from "./Components/levels/Sixteen/Sixteen";
// import Seventeen from "./Components/levels/Seventeen/Seventeen";
// import Eighteen from "./Components/levels/Eighteen/Eighteen";
// import Nineteen from "./Components/levels/Nineteen/Nineteen";
// import Twenty from "./Components/levels/Twenty/Twenty";
// import TwentyOne from "./Components/levels/TwentyOne/TwentyOne";






const Game = () => {
  const [levelsCompleted, setLevelsCompleted] = useState(() => {
    let localVal = localStorage.getItem("level")
      ? isNaN(parseInt(crypt.decrypt(localStorage.getItem("level"))))
        ? 1
        : parseInt(crypt.decrypt(localStorage.getItem("level")))
      : 1;
    return localVal || 1;
  });
  const level = [1,2,3,4,5,6,7,8,9,10] 
  const [currentLevel, setCurrentLevel] = useState(levelsCompleted);

  const nextLevel = () => {
    if (currentLevel < levelsCompleted) {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const prevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel((prev) => prev - 1);
    }
  };

  const selectLevelUsingMap = (parameter) => {
    if (parameter <= levelsCompleted) {
      setCurrentLevel(parameter);
    }
  };

  const [isMapOpen, setisMapOpen] = useState(false)

  const handleLevelUp = (completedLevel) => {
    if (completedLevel === levelsCompleted) {
      setLevelsCompleted((prev) => {
        localStorage.setItem("level", crypt.encrypt(prev + 1));
        return prev + 1;
      });
    }
  };


  const testhandleLevelUp = (test) => {
      setLevelsCompleted(() => {
        localStorage.setItem("level", crypt.encrypt(test));
        return test;
      });
  };



  // testhandleLevelUp(10)  



  return (
    <>
    <AnimatePresence>
    {isMapOpen && <Modal level={level} levelsCompleted={levelsCompleted} selectLevelUsingMap={selectLevelUsingMap} setisMapOpen={setisMapOpen} currentLevel={currentLevel} /> }

    </AnimatePresence>

         { currentLevel === 1  && <One setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 2 && <Two setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 3 && <Three setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 4 && <Four setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 5 && <Five setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 6 && <Six setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 7 && <Seven setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 8 && <Eight setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 9 && <Nine setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 10 && <Ten setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }

         { currentLevel === 11 && <Eleven setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         {/* { currentLevel === 12 && <Twelve setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 13 && <Thirteen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 14 && <Fourteen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 15 && <Fifteen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 16 && <Sixteen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 17 && <Seventeen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 18 && <Eighteen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 19 && <Nineteen setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 20 && <Twenty setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
         { currentLevel === 21 && <TwentyOne setisMapOpen={setisMapOpen}  prevLevel={prevLevel} currentLevel={currentLevel} levelsCompleted={levelsCompleted} nextLevel={nextLevel} handleLevelUp={handleLevelUp} /> }
 */}

    </>
  );
};

export default Game;
