import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import "./Eight.css";

import content_box from "../../../assets/eight/content-box.png";
import border_box from "../../../assets/eight/border-box.png";

import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import cssToJson from "../../../CssToJson";

const Eight = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);
  const [style, setStyle] = useState(null);

  const [size, setSize] = useState(null);

  const [isSet, setisSet] = useState(true);
  useEffect(() => {
    if (isSet) {
      if (
        size
          ? size.width == "150" &&
            size.height == "150" &&
            size.padding == "50px"
          : false
      ) {
        console.log("succcess");
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(8);
        }, 1000);
      }
    }
  });

  useEffect(() => {
    const ele = document.querySelector(".eight-output-wrapper");
    setSize({
      width: ele.scrollWidth,
      height: ele.scrollHeight,
      padding: getComputedStyle(ele, null).getPropertyValue("padding"),
    });
  }, [style]);

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
              <h2>CSS Box Sizing</h2>

              <div className="hint-content">
                The <span className="css-prop">box-sizing</span> property
                specifies how the total width and height of element is
                calculated, that is whether the padding and border width are to
                be included or not.
                <br />
                <br />
                <h3>content-box (default) :</h3>
                <div className="icard-css-props">
                  This is the default value for{" "}
                  <span className="css-prop">box-sizing</span> property. Here,
                  width and height refers to the width and height of the content
                  excluding padding and borders.
                  <br />
                  <br />
                  Rendered width = width + padding + border
                </div>
              </div>
              <img src={content_box} alt="content-box" />
              <br />
              <br />
              <div className="hint-content">
                <h3>border-box :</h3>
                <div className="icard-css-props">
                Here, width and height refers to the width and height of the content including padding and borders.
                <br /><br />
                width =  content width +  padding + border
                </div>
              </div>
              <img src={border_box} alt="content-box" />

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
                  <h4>
                    8 . The Given wrapper Element has CSS properties, width and height set to 150px.
                    <br />
                    But the actual rendered Width and height of the wrapper Element is
                    250px
                  </h4>
                  <br />
                  Make the width and height of Element to 150px including its
                  padding 50px on each side.
                </div>
                <div
                  title="Help"
                  onClick={() => setisIcardOpen(true)}
                  className="game-icard"
                >
                  <FaExclamationCircle />
                </div>
              </div>
              <div className="game-input-top-row-inputs text-align-center">
                {'<div class="wrapper">'} <br />
                <div className="css"></div>
                <br />
                {"</div>"}
              </div>

              <div className="game-input-top-row-inputs text-align-center">
                .wrapper {"{"}
                <div className="css">
                  width: 150px; <br />
                  height: 150px; <br />
                  padding: 50px; <br />
                  background-color: #096fad; <br />
                  <input
                    spellCheck={false}
                    onChange={(e) => setStyle(cssToJson(e.target.value))}
                    className="eight-input"
                  />
                </div>
                {" }"}
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
        <div className="game-output eight-game-output">
          <div className="output-content eight-output-content">
            {size && (
              <div>
                <b>
                  Rendered Width of the wrapper: {size.width}px <br />
                  Rendered Height of the wrapper: {size.width}px <br />
                  Padding of the wrapper: {size.padding}
                </b>
              </div>
            )}

            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={style}
              className="eight-output-wrapper"
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eight;
