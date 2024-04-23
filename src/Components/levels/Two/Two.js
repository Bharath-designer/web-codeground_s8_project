import "./Two.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import cssToJson from "../../../CssToJson";
import { useEffect, useRef, useState } from "react";

import block from "../../../assets/Two/block.png"
import flex from "../../../assets/Two/flex.png"
import flex_wrap from "../../../assets/Two/flex-wrap.png"


const Two = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [parentStyle, setParentStyle] = useState(null);
  const [nodeStyle, setNodeStyle] = useState(null);



  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);

  // For OutPut


  // For Output refs

  const parentRef = useRef()
  const node3Ref = useRef()


  const [isSet, setisSet] = useState(true);
  useEffect(() => {
    if (isSet) {

      const condition1 = parentRef.current.style.display == 'flex'
      const condition2 = node3Ref.current.style['flex-grow'] >= 1;
      if (condition1 && condition2) {
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(2);
        }, 1000);
      }
    }
  });


  return (
    <>
      <AnimatePresence>
        {isIcardOpen && (
          <div

            className="icard-container"
          >
            <div
              onClick={() => setisIcardOpen(false)}
              className="icard-close"
            ></div>
            <motion.div

              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}

              className="icard">

              <h2>CSS Display Property</h2>


              <div className="hint-content">
                <br />
                <h3>display : block</h3>

              </div>
              <img src={block} alt="display : block" />

              <div className="hint-content">
                The <span className="css-prop">display : block</span> will make the element to occupy the available space on left and right side (full-width available) and always starts on a new line.

              </div>

              <br />
              <br />

              <div className="hint-content">
                <h3>display : flex</h3>

              </div>
              <img src={flex} alt="display : block" />

              <div className="hint-content">
                The <span className="css-prop">display : flex</span> property in parent element make the child elements to shrink its width to fit its content, that is automatically align like rows or columns with dynamic width and height.

              </div>

              <br />
              <br />

              <div className="hint-content">
                <h3>flex-grow</h3>
                <br />
                The <span className="css-prop">flex-grow</span> property specifies how much the element should stretch relative to number of remaining elements in the same flex box container.
                <p className="icard-css-props"><b>For example,</b> <span className="css-prop">flex-grow : 1;</span> on the child elements will make the elements to stretch completely to occupy the width available.</p>
              </div>
              <img src={flex_wrap} alt="" />


              <br />
              <br />

              <div className="hint-content">
                <h3>flex-shrink</h3>
                <br />
                The <span className="css-prop">flex-shrink</span> property specifies how much the element should shrink relative to number of remaining elements in the same flex box container.
              </div>
              <br />
              <br />
              <div className="hint-content">
                <h3>flex-basis</h3>
                <br />
                The <span className="css-prop">flex-basis</span> property specifies the initial width of the flexible element
              </div>
              <br /><br />
              <div className="hint-content">
                <h3>flex</h3>
                <div className="icard-css-props">
                  <b>CSS Property,</b>
                  <p><span className="css-prop">flex : {"<flex-grow> <flex-shrink> <flex-basis>"}</span>(Shorthand property)</p>
                </div>
              </div>


            </motion.div>
          </div>
        )}

        {isHelpOpen && (
          <div

            className="icard-container"
          >
            <div
              onClick={() => setisHelpOpen(false)}
              className="icard-close"
            ></div>
            <motion.div

              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}

              className="icard">

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
                <div className="game-input-title"><h4> 2. Display the four nodes in single row and let the node3 stretch out to occupy the available space.</h4> </div>

                <div title="Help" onClick={() => setisIcardOpen(true)} className="game-icard">
                  <FaExclamationCircle />
                </div>
              </div>
              <div className="game-input-top-row-inputs">
                <p>
                  {'<div class="parent">'}
                  <br />
                  &emsp;&emsp;{'<div class="node node1">Home</div>'}
                  <br />
                  &emsp;&emsp;{'<div class="node node2">About</div>'}
                  <br />
                  &emsp;&emsp;{'<div class="node node3">Profile</div>'}
                  <br />
                  &emsp;&emsp;{'<div class="node node4">Login</div>'}
                  <br />
                  {"</div>"}
                </p>
              </div>
              <div className="game-input-top-row-inputs">
                .parent{" {"} <br />
                <div className="css">


                  <textarea className="parentStyleTextarea" onChange={(e) => setParentStyle(cssToJson(e.target.value))} cols="30" rows='1'></textarea>

                </div>
                {"}"}
                <br />
                <br />
                .node {"{"}

                <div className="css">
                  text-align : center;
                  <br />
                  background : orange;
                  <br />
                  border : 1px solid black;
                  <br />
                  padding: 10px;

                </div>
                {"}"}

                <br />
                <br />
                .node3 {"{"}
                <div className="css">
                  border : 1px solid black;

                  <textarea className="nodeStyleTextarea" onChange={(e) => setNodeStyle(cssToJson(e.target.value))} cols="30" rows='1'></textarea>


                </div>

                <br />
                <br />
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
            <div ref={parentRef} style={parentStyle} className="lvl2-parent">
              <div style={{ textAlign: 'center', background: "#89a5ff", padding: '10px', border: "1px solid black" }} className="lvl2-node">Home</div>
              <div style={{ textAlign: 'center', background: "#89a5ff", padding: '10px', border: "1px solid black" }} className="lvl2-node">About</div>
              <div ref={node3Ref} style={{ ...nodeStyle, textAlign: 'center', background: '#89a5ff', padding: '10px', border: "1px solid black" }} className="lvl2-node"><p >Profile</p></div>
              <div style={{ textAlign: 'center', background: "#89a5ff", padding: '10px', border: "1px solid black" }} className="lvl2-node">Login</div >
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Two;
