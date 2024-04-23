import "./Four.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Four = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [style, setStyle] = useState(null);
  const [parentSelector, setParentSelector] = useState(null);
  const [empty, setempty] = useState(null);
  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);

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
    let iframe = document.querySelector("iframe");
    let doc = iframe.contentWindow.document;
    doc.head.innerHTML = "";
    doc.body.innerHTML =
      '<div class="parent"><h4> I m a child of parent (div) </h4><h4> I am a child of parent (div) </h4><section><h4> I\'m a child of section </h4></section></div>';
    let cssEle = document.createElement("style");
    doc.head.append(cssEle);
    cssEle.textContent = `${parentSelector}{ ${style} }`;

    if (isSet) {
      const parentValid =
        (parentSelector && parentSelector.replaceAll(" ", "")) ==
          ".parent>h4" ||
        (parentSelector ? parentSelector.replaceAll(" ", "") : "") ===
          "div>h4" ||
        (parentSelector && parentSelector.replaceAll(" ", "")) ==
          "div.parent>h4";

      const childh4 = doc.querySelector(".parent>h4");
      const check2 =
        getComputedStyle(childh4, null).getPropertyValue("text-transform") ==
        "uppercase";

      if (parentValid && check2) {
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(4);
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
              <h2>CSS Selectors</h2>

              <div className="hint-content">
              CSS selectors are helpful in selecting the HTML elements to style them.
              <br /><br />
              <h4>BASIC SELECTORS :</h4>
              
              <div className="icard-css-props">
              <ol>
                <li><b>Universal selector</b> <span className="css-prop">*</span> - Selects every HTML element.</li>
                <li><b>Type selector</b> <span className="css-prop">{"<tag name>"}</span> - Eg : <b>div</b> selects every HTML element.</li>
                <li><b>Class selector</b> <span className="css-prop">{".className"}</span> - Eg : <b>.parent</b> selects all elements with the class name "parent".</li>
                <li><b>Id selector</b> <span className="css-prop">{"#idName"}</span> - Id is unique and can refer only one element. Eg : <b>#textbox1</b> selects the element which has the id "textbox1".</li>
                <li><b>Attribute selector</b> <span className="css-prop">{"[attribute = value]"}</span> - Eg : <b>input{'[type = "email"]'}</b> selects all the input fields which has type as "email".</li>
              </ol>
              </div>

              <br />
              <h4>COMBINATOR SELECTOR :</h4>
              
              <div className="icard-css-props">
              <ol>
                <li><b>Descendant combinator</b> <span className="css-prop">{"<space>"}</span> Eg : <b>div p</b> selects all paragraphs inside the div.</li>
                <li><b>Child combinator</b> <span className="css-prop">{">"}</span> - Selects the direct children of the given element. Eg : <b>div {">"} span</b> selects all the span that are direct child of the div.</li>
                <li><b>General sibling combinator</b> <span className="css-prop">{"~"}</span> - Eg : <b>div ~ p</b> selects all the paragraphs that are next to div.</li>
                <li><b>Adjacent sibling combinator</b> <span className="css-prop">{"+"}</span> - Eg : <b>div + p</b> selects the paragraph if it is present immediately next to div.</li>
              </ol>
              </div>

              </div>

            <br />
              <h2>CSS Text-Transform</h2>
              <div className="hint-content">
                The <span className="css-prop">text-transform</span> property is used to modify the case of the text in an element.
                <div className="icard-css-props">
              <ol>
                <li><b>text-transform : capitalize </b> - will capitalize each word in the element</li>
                <li><b>text-transform : uppercase </b> - will change all letter to uppercase</li>
                <li><b>text-transform : lowercase </b> - will change all letter to lowercase</li>
                <li><b>text-transform : none </b> - This is the default value and it will render the text as it is. </li>
              </ol>
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
                  <h4> 4 . Select the h4 elements that are direct child of div
                    (class="parent") and convert it into Uppercase.
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
              <div className="game-input-top-row-inputs">
                <p>
                  {'<div class="parent">'}
                  <br />
                  &emsp;&emsp;{"<h4> I'm a child of parent (div) </h4>"}
                  <br />
                  &emsp;&emsp;{"<h4> I'm a child of parent (div) </h4>"}
                  <br />
                  &emsp;&emsp;{"<section>"} <br /> &emsp;&emsp;&emsp;&emsp;{" "}
                  {"<h4>  I'm a child of section  </h4>"}
                  <br />
                  &emsp;&emsp;{"</section>"}
                  <br />
                  {"</div>"}
                </p>
              </div>
              <div className="game-input-top-row-inputs">
                <textarea
                  style={{ width: "100px" }}
                  className="parentStyleTextarea"
                  onChange={(e) => setParentSelector(e.target.value)}
                  cols="30"
                  rows="1"
                ></textarea>
                {" {"} <br />
                <div className="css">
                  <textarea
                    className="parentStyleTextarea"
                    onChange={(e) => setStyle(e.target.value)}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>
                {"}"}
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
            <iframe
              style={{ border: "none", outline: "none", width: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Four;
