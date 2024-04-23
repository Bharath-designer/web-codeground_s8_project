import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

import "./Five.css";

const Five = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);
  const [empty, setempty] = useState(null);

  const [style1, setStyle1] = useState(null);
  const [style2, setStyle2] = useState(null);
  const [selector1, setSelector1] = useState(null);
  const [selector2, setSelector2] = useState(null);

  // For OutPut
  function fnBrowserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "edge";
    } else {
      browserName = "No browser detection";
    }
    return browserName;
  }

  useEffect(() => {
    const browser = fnBrowserDetect();
    if (browser == "firefox") {
      setTimeout(() => {
        setempty("initiated");
      }, 0);
    }
  }, []);

  const [isSet, setisSet] = useState(true);
  useEffect(() => {
    if (isSet) {
      let iframe = document.querySelector("iframe");
      let doc = iframe.contentWindow.document;
      doc.head.innerHTML = "";
      doc.body.innerHTML =
        '<form> <input type="text" name="name" placeholder=" Enter Name " > <input type="number" name="number" placeholder=" Enter Number " > </form>';
      let cssEle = document.createElement("style");
      doc.head.append(cssEle);
      cssEle.textContent = `input{display: block; margin: 10px; padding: 5px ; outline: none; border: 1px solid black; background-color: white;}  ${selector1}{ ${style1} }  ${selector2}{ ${style2} } `;

      const form = doc.querySelector("form");

      const input1 = form.children[0];
      const input2 = form.children[1];

      const result =
        getComputedStyle(input1).getPropertyValue("background-color") ==
          "rgb(159, 211, 199)" &&
        getComputedStyle(input2).getPropertyValue("background-color") ==
          "rgb(255, 203, 203)";

      if (result) {
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(5);
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
              <h2>BASIC SELECTORS</h2>
              <div className="hint-content">
                <ol>
                  <li>
                    <b>Universal selector</b>{" "}
                    <span className="css-prop">*</span> - Selects every HTML
                    element.
                  </li>
                  <li>
                    <b>Type selector</b>{" "}
                    <span className="css-prop">{"<tag name>"}</span> - Eg :{" "}
                    <b>div</b> selects every HTML element.
                  </li>
                  <li>
                    <b>Class selector</b>{" "}
                    <span className="css-prop">{".className"}</span> - Eg :{" "}
                    <b>.parent</b> selects all elements with the class name
                    "parent".
                  </li>
                  <li>
                    <b>Id selector</b>{" "}
                    <span className="css-prop">{"#idName"}</span> - Id is unique
                    and can refer only one element. Eg : <b>#textbox1</b>{" "}
                    selects the element which has the id "textbox1".
                  </li>
                  <li>
                    <b>Attribute selector</b>{" "}
                    <span className="css-prop">{"[attribute = value]"}</span> -
                    Eg : <b>input{'[type = "email"]'}</b> selects all the input
                    fields which has type as "email".
                  </li>
                </ol>
              </div>
              <br />
              <br />
              <h2>BACKGROUND PROPERTY</h2>

              <div className="hint-content">
                The <span className="css-prop">background</span> property is
                shorthand for,
                <ol className="icard-css-props">
                  <li>background-color</li>
                  <li>background-image</li>
                  <li>background-position</li>
                  <li>background-size</li>
                  <li>background-repeat</li>
                  <li>background-origin</li>
                  <li>background-clip</li>
                  <li>background-attachment</li>
                </ol>
                <br />
                <div>
                  <span className="css-prop">background : #DC0000;</span> will
                  make the background to red color. The color can be specified
                  in any format like hex value - #DC0000, rgb value - rgb(255, 0, 0) and color name -red, blue etc.
                </div>
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
                  <h4> 5 . Select both the input separetely and Style based on the
                    following Conditions.
                  </h4>
                  <br />
                  <p>
                    Set Background Color #9fd3c7 for the First input element.{" "}
                  </p>
                  <p>
                    Set Background Color #ffcbcb for the Second input element.{" "}
                  </p>
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
                {"<form>"} <br />
                <div className="css">
                  {
                    '<input type="text" name="name" placeholder=" Enter Name  " >'
                  }{" "}
                  <br /> <br />
                  {
                    '<input type="number" name="number" placeholder=" Enter Number  " >'
                  }
                </div>
                {"</form>"}
              </div>

              <div className="game-input-top-row-inputs text-align-center">
                {"input {"}
                <div className="css">
                  display: block; <br />
                  margin: 10px; <br />
                  padding: 5px ; <br />
                  outline: none; <br />
                  border: 1px solid black; <br />
                  background-color: white; <br />
                </div>
                {" }"} <br /> <br />
                <input
                  className="level4-selector-input"
                  onChange={(e) => setSelector1(e.target.value)}
                  type="text"
                />{" "}
                {" { "}
                <div className="css">
                  <input
                    type="text"
                    onChange={(e) => setStyle1(e.target.value)}
                  />
                </div>
                {" }"} <br /> <br />
                <input
                  className="level4-selector-input"
                  onChange={(e) => setSelector2(e.target.value)}
                  type="text"
                />{" "}
                {" {"}
                <div className="css">
                  <input
                    type="text"
                    onChange={(e) => setStyle2(e.target.value)}
                  />
                </div>
                {" }"} <br /> <br />
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
            <iframe
              style={{ border: "none", outline: "none", width: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Five;
