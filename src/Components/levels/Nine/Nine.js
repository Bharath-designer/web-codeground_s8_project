import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./Nine.css";

import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Nine = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);

  const [userJs, setUserJs] = useState(null);

  const [isSet, setisSet] = useState(true);

  const testScript = () => {
    if (!userJs) return;
    if (userJs.includes("div") || userJs.includes("container")) {
      const iframe = document.querySelector(".nine-iframe");
      let doc = iframe.contentWindow.document;
      doc.body.innerHTML = '<div class="container"> Sample text . </div>';
      let src = doc.createElement("script");
      let wrappedJS = "(function(){" + userJs + "})();";
      doc.body.append(src);
      src.textContent = wrappedJS;

      if (isSet) {
        if (
          getComputedStyle(doc.querySelector(".container")).getPropertyValue(
            "border"
          ) === "2px solid rgb(20, 26, 53)"
        ) {
          setisSet(false);
          setTimeout(() => {
            handleLevelUp(9);
          }, 1000);
        }
      }
    }
  };

  // For OutPut
  const [empty, setempty] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setempty((x) => x + 1);

      const iframe = document.querySelector(".nine-iframe");
      let doc = iframe.contentWindow.document;
      doc.body.innerHTML = "";
      doc.head.innerHTML = "";
      doc.body.innerHTML = '<div class="container"> Sample text . </div>';
      let sty = doc.createElement("style");
      sty.textContent =
        ".container{width:100px;height:100px;box-sizing: content-box} ";
      doc.head.append(sty);
    }, 0);
  }, []);

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
              <h2>Javascript Element Selectors</h2>
              <br />
              <div className="hint-content">
                <h3>1. querySelector()</h3>
                <div className="icard-css-props">
                  The <span className="css-prop">querySelector()</span> method
                  will return the first element that matches the CSS selector.
                  <br />
                  <br />
                  The following code will select the first element that has class "parent".
                  <div className="sample-code">
                    <code>
                      let element = document.querySelector(".parent");
                    </code>
                  </div>
                </div>
              </div>
              <br /><br />
              <div className="hint-content">
                <h3>2. querySelectorAll()</h3>
                <div className="icard-css-props">
                  The <span className="css-prop">querySelectorAll()</span> method
                  will return the HTML Collection of elements that matches the CSS selector.
                  <br />
                  <br />
                  The following code will select all elements that have class "child" and returns a HTML Collection.
                  <div className="sample-code">
                    <code>
                      let elements = document.querySelectorAll(".child");
                    </code>
                  </div>
                </div>
              </div>
              <br /><br />
              <div className="hint-content">
                <h3>3. getElementById()</h3>
                <div className="icard-css-props">
                  The <span className="css-prop">getElementById()</span> method
                  will return the element which has the given ID.

                  <br />
                  <br />
                  The following code will select the element which have ID "nav-list".
                  <div className="sample-code">
                    <code>
                      let element = document.getElementById("nav-item");
                    </code>
                  </div>
                </div>
              </div>
              <br /><br />
              <div className="hint-content">
                <h3>4. getElementsByTagName()</h3>
                <div className="icard-css-props">
                  The <span className="css-prop">getElementsByTagName()</span> method
                  will return the HTML Collection of elements with specified tagnames .
                  <br />
                  <br />
                  The following code will select all the div elements and returns as HTML Collection.
                  <div className="sample-code">
                    <code>
                      let elements = document.getElementsByTagName("div");
                    </code>
                  </div>
                </div>
              </div>
              <br /><br />
              <div className="hint-content">
                <h3>5.  getElementsByClassName()</h3>
                <div className="icard-css-props">
                  The <span className="css-prop">getElementsByClassName()</span> method
                  will return the HTML Collection of elements that have given class.
                  <br />
                  <br />
                  The following code will select every elements that have class "nav-item" and "primary".
                  <div className="sample-code">
                    <code>
                      let elements = document.getElementsByClassName("nav-item primary");
                    </code>
                  </div>
                </div>
              </div>
              
              <h2><br /><br />
                DOM manipulation
              </h2>
              <div  className="hint-content">
                To modify the style of an element, first select the element using any of the above methods. The selected element will have a property called <span className="css-prop">style</span> which return a <span className="css-prop">CSSStyleDeclaration</span> object through which we can style the element by setting the new values.
                <div className="icard-css-props">
                  <b>For example,</b> the below example will change the color of a paragraph element to red.
                  <div className="sample-code">
                    <code>
                      let p = document.querySelector("p");
                      <br />
                      p.style.color = "red";
                    </code>
                  </div>
                  <br />
                  <b>Note :</b> In the above code <span className="css-prop">p.style = "color : red";</span> won't work. 
                  <br />
                  <br />
                </div>
              </div>
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
                  <h4>
                    9 . Select the div with class "container" using javascript and
                    set the border 2px of solid, #141a35 color
                  </h4>
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
                {'<div class="container">'}
                <div className="css">Sample text .</div>
                {"</div>"}
              </div>

              <div className="game-input-top-row-inputs text-align-center">
                .container {" {"}
                <div className="css">
                  width : 100px; <br />
                  height : 100px;
                </div>
                {"}"}
              </div>

              <div className="game-input-top-row-inputs text-align-center">
                Write valid Javascript here
                <br /> <br />
                <textarea
                  spellCheck={false}
                  onChange={(e) => {
                    setUserJs(e.target.value);
                  }}
                  className="nine-textarea"
                ></textarea>
                <center>
                  <button onClick={testScript} className="nine-btn">
                    Test Script
                  </button>
                </center>
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
            <iframe className="nine-iframe"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nine;
