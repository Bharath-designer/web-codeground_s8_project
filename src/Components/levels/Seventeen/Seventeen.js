import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Seventeen = ({
    setisMapOpen,
    prevLevel,
    currentLevel,
    levelsCompleted,
    nextLevel,
    handleLevelUp,
}) => {



    
    const [isIcardOpen, setisIcardOpen] = useState(false);
    const [isHelpOpen, setisHelpOpen] = useState(false);



    const [isSet, setisSet] = useState(true);
    useEffect(() => {
        if (isSet) {


            if (false) {
                setisSet(false);
                setTimeout(() => {
                    handleLevelUp(6);
                }, 1000);
            }
        }
    });
    
  return (
    <>

    <AnimatePresence>
        {isIcardOpen && (
            <div className="icard-container">
                <div
                    onClick={() => setisIcardOpen(false)}
                    className="icard-close"
                ></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="icard"
                >
                    Icard
                </motion.div>
            </div>
        )}

        {isHelpOpen && (
            <div className="icard-container">
                <div
                    onClick={() => setisHelpOpen(false)}
                    className="icard-close"
                ></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="icard"
                >
                    Help
                </motion.div>
            </div>
        )}
    </AnimatePresence>
    <div className="game-container">
        <div className="game-input">
            <div className="game-input-content">
                <div className="game-input-top">
                    <div className="game-input-top-row-one">
                        <div className="game-input-title">
                            <h4> 8. </h4>{" "}
                        </div>

                        <div
                            title="Help"
                            onClick={() => setisIcardOpen(true)}
                            className="game-icard"
                        >
                            <FaExclamationCircle size="80%" />
                        </div>
                    </div>
                    <div className="game-input-top-row-inputs text-align-center">
                        
                    </div>


                </div>
                <div className="levels-button-row">
                    <div className="level-button-box">
                        <button onClick={prevLevel} className="level-shifter">
                            <FaAngleDoubleLeft />
                        </button>
                        <button
                            onClick={() => setisMapOpen(true)}
                            className="level-selector"
                        >
                            Level {currentLevel}
                            <span className="arrow-up">
                                <MdKeyboardArrowUp />
                            </span>
                        </button>
                        <button
                            onClick={nextLevel}
                            style={
                                currentLevel === levelsCompleted
                                    ? {
                                        background: "rgb(45, 45, 45)",
                                        color: "rgb(142, 142, 142)",
                                    }
                                    : {}
                            }
                            id={currentLevel === levelsCompleted ? "hide" : ""}
                            className="level-shifter"
                        >
                            <FaAngleDoubleRight />
                            <span className="tooltiptext">Finish level to enable</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="game-output">
            <div className="output-content">
                
            </div>
        </div>
    </div>

</>
  )
}

export default Seventeen