import "./Three.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import cssToJson from "../../../CssToJson";
import { useEffect, useRef, useState } from "react";

const Three = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [boxStyle, setBoxStyle] = useState(null);

  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);

  // For OutPut
  const [isSet, setisSet] = useState(true);

  // For Output refs

  const box = useRef();

  useEffect(() => {
    if (isSet) {
      if (box.current.style.order < 0) {
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(3);
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
              <h2>Order Of Flexible Items</h2>
              <div className="hint-content">
                In the Flexible Container, we can change the order of child elements by using the <span className="css-prop">order</span> property in child elements relative to other elements. It takes a number as value.
                <div className="icard-css-props">
                  <b>Syntax : </b>
                  <p><span className="css-prop">order : {"<number> ;"}</span></p>
                </div>
                <br />
                  <p><b>order : 0</b> - Default value for order property.</p>
                  <p><b>order : {"<negative number>"}</b> - will rearrange the element to beginning relative to other elements. </p>
                  <p><b>order : {"<positive number>"}</b> - will rearrange the element to end relative to other elements. </p>
              </div>
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
                  <h4> 3 . Bring the grey box to the first position.</h4>{" "}
                </div>

                <div
                  title="Help"
                  onClick={() => setisIcardOpen(true)}
                  className="game-icard"
                >
                  <FaExclamationCircle />
                </div>
              </div>
              <div className="game-input-top-row-inputs">
                <p>
                  {'<div class="parent">'}
                  <br />
                  &emsp;&emsp;{'<div class="box box1"></div>'}
                  <br />
                  &emsp;&emsp;{'<div class="box box2"></div>'}
                  <br />
                  &emsp;&emsp;{'<div class="box box3"></div>'}
                  <br />
                  &emsp;&emsp;{'<div class="box box4"></div>'}
                  <br />
                  {"</div>"}
                </p>
              </div>
              <div className="game-input-top-row-inputs">

                .parent {"{"}
                <div className="css">
                  display : flex; <br />
                  gap : 10px;
                  <br />
                </div>
                {"}"}
                <br />
                <br />

                .box {"{"}
                <div className="css">
                  width: 100%;
                  <br />
                  aspect-ratio: 1 ;
                  <br />
                  color: white ;
                  <br />
                </div>
                {"}"}
                <br />
                <br />


                .box1 {"{"}
                <div className="css">
                  background: blue;
                </div>
                {"}"}
                <br />
                <br />


                .box2 {"{"}
                <div className="css">
                  background: orange;
                </div>
                {"}"}
                <br />
                <br />


                .box3{" {"} <br />
                <div className="css">
                  background: grey;
                  <textarea
                    className="parentStyleTextarea"
                    onChange={(e) => setBoxStyle(cssToJson(e.target.value))}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>
                {"}"}
                <br />
                <br />


                .box4 {"{"}
                <div className="css">
                  background: pink;
                </div>
                {"}"}

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
            <div className="lvl3-parent">
              <div className="box1 box">Blue</div>
              <div className="box2 box">Orange</div>
              <div ref={box} style={boxStyle} className="box3 box">Grey</div>
              <div className="box4 box">Pink</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Three;
