import "./One.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

import { FaExclamationCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import cssToJson from "../../../CssToJson";
import { useEffect, useRef, useState } from "react";

import modal from "../../../assets/one/modal.png"


const One = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [styling, setStyling] = useState("");

  const [isIcardOpen, setisIcardOpen] = useState(false);

  // For OutPut
  const refBox = useRef();
  const actualBox = useRef();
  const [isSet, setisSet] = useState(true);

  useEffect(() => {
    if (isSet) {
      let xRef = refBox.current.offsetLeft;
      let yRef = refBox.current.offsetTop;
      let xActual = actualBox.current.offsetLeft;
      let yActual = actualBox.current.offsetTop;
      if (xRef === xActual && yRef === yActual) {
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(1);
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
              <h2>CSS Box Modal</h2>
              <img src={modal} alt="Box-Modal" />

              <div className="hint-content">
                <ul>
                  <li><b>Content</b> : The actual component that contains the text, images and other media.</li>
                  <li><b>Padding</b> : A transparent area that separates the content with its border. Simply, it is area between content and border.

                  <div className="icard-css-props">
                    <h4>CSS Properties :</h4>
                    <p><b>padding</b> : {"<all sides>"}; (Shorthand)</p>
                    <p><b>padding</b> : {"<top> <left> <bottom> <right>"}; (Shorthand)</p>
                    <p><b>padding-left</b> : {"<defines the left padding of an element>"}.</p>
                    <p><b>padding-top</b> : {"<defines the top padding of an element>"}.</p>
                    <p><b>padding-right</b> : {"<defines the right padding of an element>"}.</p>
                    <p><b>padding-bottom</b> : {"<defines the bottom padding of an element>"}.</p>
                  </div>
                  
                  </li>
                  <li><b>Border</b> : A line that is surrounding the content and padding of an element. </li>
                  <div className="icard-css-props">
                    <h4>CSS Properties :</h4>
                    <p><b>border</b> : {"<size> <style> <color>"}; (Shorthand)</p>
                    <p><b>border-left</b> : {"<defines the left border of an element>"}.</p>
                    <p><b>border-top</b> : {"<defines the top border of an element>"}.</p>
                    <p><b>border-right</b> : {"<defines the right border of an element>"}.</p>
                    <p><b>border-bottom</b> : {"<defines the bottom border of an element>"}.</p>
                  </div>
                  <li><b>Margin</b> : A transparent area that surrounds the element. It is used to create a invisible space between the adjacent elements. Margin has property called "auto" which centers the element horizontally.</li>
                  <div className="icard-css-props">
                    <h4>CSS Properties :</h4>
                    <p><b>margin</b> : {"<all sides>"}; (Shorthand)</p>
                    <p><b>margin</b> : {"<top> <left> <bottom> <right>"}; (Shorthand)</p>
                    <p><b>margin</b> : auto;</p>
                    <p><b>margin-left</b> : {"<defines the left margin of an element>"}.</p>
                    <p><b>margin-top</b> : {"<defines the top margin of an element>"}.</p>
                    <p><b>margin-right</b> : {"<defines the right margin of an element>"}.</p>
                    <p><b>margin-bottom</b> : {"<defines the bottom margin of an element>"}.</p>
                  </div>
                </ul>
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
                  <h4> 1. Move the red box to target area. Write the valid CSS to pass level.</h4>


                </div>
                <div
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
                  &emsp;&emsp;{'<div class="child"></div>'}
                  <br />
                  {"</div>"}
                </p>
              </div>
              <div className="game-input-top-row-inputs">
                .child{" {"} <br />
                <div className="css">
                  width:100px; <br />
                  height:100px; <br />
                  background-color : red;
                  <br />
                  <input
                    onChange={(e) => setStyling(cssToJson(e.target.value))}
                    type="text"
                  />
                </div>
                <br />
                {"}"}
                <br />
                <br />
              </div>
            </div>
            <div className="levels-button-row">
              <div className="level-button-box">
                <button onClick={prevLevel}

                  style={{
                    background: "rgb(45, 45, 45)",
                    color: "rgb(142, 142, 142)",
                  }}

                  className="level-shifter">
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
            <div className="ref-output">
              <div ref={refBox} className="ref-box"></div>
            </div>
            <div className="actual-output">
              <motion.div
                ref={actualBox}
                layout
                style={styling}
                className="actual-box"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
