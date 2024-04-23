import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./Ten.css";

import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const Ten = ({
  setisMapOpen,
  prevLevel,
  currentLevel,
  levelsCompleted,
  nextLevel,
  handleLevelUp,
}) => {
  const [isIcardOpen, setisIcardOpen] = useState(false);
  const [isHelpOpen, setisHelpOpen] = useState(false);

  const [userJs, setUserJs] = useState("");

  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [copy, setCopy] = useState(false);

  const [isSet, setisSet] = useState(true);

  const testScript = () => {
    setClick(false);
    setHover(false);
    setCopy(false);
    if (!userJs) return;

    const iframe = document.querySelector(".ten-iframe");
    let doc = iframe.contentWindow.document;
    doc.body.innerHTML = '<div class="container"> Add Event Listeners </div>';
    let src = doc.createElement("script");
    let wrappedJS = "(function(){" + userJs + "})();";
    doc.body.append(src);
    src.textContent = wrappedJS;

    let clickCheck = userJs
      .replaceAll("'", '"')
      .replace(/\s/g, "")
      .includes('.addEventListener("click",(');
    let mouseCheck =
      userJs
        .replace(/\s/g, "")
        .replaceAll("'", '"')
        .includes('.addEventListener("mouseenter",') ||
      userJs
        .replace(/\s/g, "")
        .replaceAll("'", '"')
        .includes('.addEventListener("mouseover",');

    let copyCheck =
      userJs
        .replace(/\s/g, "")
        .replaceAll("'", '"')
        .includes('.addEventListener("copy",') &&
      userJs
        .replace(/\s/g, "")
        .replaceAll("'", '"')
        .includes(".preventDefault()");

    if (clickCheck) {
      setClick(true);
    }

    if (mouseCheck) {
      setHover(true);
    }

    if (copyCheck) {
      setCopy(true);
    }

    if (isSet) {
      let keywords = ["click", "mouse", "copy"];
      let check1 = !keywords.some((key) => !userJs.includes(key));

      if (check1 && clickCheck && mouseCheck && copyCheck) {
        setisSet(false);
        setTimeout(() => {
          handleLevelUp(10);
        }, 1000);
      }
    }
  };

  const [empty, setempty] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setempty((x) => x + 1);

      const iframe = document.querySelector("iframe");
      let doc = iframe.contentWindow.document;
      doc.body.innerHTML = "";
      doc.head.innerHTML = "";
      doc.body.innerHTML = '<div class="container"> Add Event Listeners </div>';
      let sty = doc.createElement("style");
      sty.textContent =
        ".container{width:min(450px,85%);margin:auto;background:#2dc3ffa9;padding:30px;text-align:center;color:white;font-family:sans-serif;cursor:pointer;} ";
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
              <h2>EventListeners</h2>
              <div className="hint-content">
                To add a event handler to a HTML element, we use{" "}
                <span className="css-prop">addEventListener()</span> method on
                the element.
                <br />
                <br />
                We can add any number of EventListeners to an element and that
                won't overwrite existing EventListeners.
                <br />
                <br />
                <b>Syntax :</b>
                <div className="icard-css-props">
                  <div className="code-output">
                    HTMLelement.addEventListener(event, function, useCapture);
                  </div>
                  <br />
                  The first argument is the event to which the EventHandler
                  listen to. "click", "focus", "keypress", "play" are some of
                  events
                  <br />
                  <br />
                  The second argument is callback function, that is what
                  function to be executed when the specified event occurs.
                  <br />
                  <br />
                  The third argument requires a boolean value and it is optional
                  to specify <b>(false by default)</b>. When it is set to true,
                  then the event handler executes in capturing phase. When it
                  false, the handler executes in bubbling phase.
                </div>
                <br />
                <br />
              </div>
              <h2>Few Events</h2>
              <div className="hint-content">
                <ol>
                  <li>
                    <span className="css-prop">click : </span>Triggered when an
                    element is clicked by mouse.
                  </li>
                  <li>
                    <span className="css-prop">dblclick : </span>Triggered when
                    an element is double clicked by mouse.
                  </li>
                  <li>
                    <span className="css-prop">change : </span>Triggered when an
                    element loses its focus after the value of element changed.
                  </li>
                  <li>
                    <span className="css-prop">input : </span>Triggered
                    immediately when value of element changed.
                  </li>
                  <li>
                    <span className="css-prop">submit : </span>Triggered when a
                    form is submitted.
                  </li>
                  <li>
                    <span className="css-prop">focus : </span>Triggered when an
                    element is in focus, like as an input field.
                  </li>
                  <li>
                    <span className="css-prop">blur : </span>Triggered when an
                    element loses its focus.
                  </li>
                  <li>
                    <span className="css-prop">mouseenter : </span>Triggered
                    when mouse pointer enters an element.
                  </li>
                  <li>
                    <span className="css-prop">mouseover : </span>Triggered when
                    mouse pointer moves over an element.
                  </li>
                  <li>
                    <span className="css-prop">keypress : </span>Triggered when
                    keyboard key is pressed.
                  </li>
                  <li>
                    <span className="css-prop">keyup : </span>Triggered when
                    keyboard key is released.
                  </li>
                  <li>
                    <span className="css-prop">copy : </span>Triggered when a
                    copy event is occured, that is when we copy a selected text.
                  </li>
                  <li>
                    <span className="css-prop">resize : </span>Triggered when
                    window is resized.
                  </li>
                  <li>
                    <span className="css-prop">scroll : </span>Triggered when
                    the scroll event occured on a specified event.
                  </li>
                  <li>
                    <span className="css-prop">load : </span>Triggered when the
                    page and all its assests loaded completely.
                  </li>
                </ol>
                <br />
                <br />
              </div>

              <h2>Event Properties and methods</h2>
              <div className="hint-content">
                <div className="sample-code">
                  <code>
                    let form = document.querySelector("form"); <br />
                    form.addEventListener("submit",{"(e)=>{}"});
                  </code>
                </div>
                <br />
                Here, <span className="css-prop">e</span> is the Event Object
                that has Methods and Properties
                <br />
                <br />
                <ol>
                  <li>
                    {" "}
                    <span className="css-prop">target : </span> returns the
                    target element that triggered the event.{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="css-prop">type : </span> returns the type
                    of event, such as "click", "submit".{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="css-prop">preventDefault() : </span> This
                    method is used to prevent the default behaviour of an event,
                    such as prevent a form from submitting, restrict the
                    keypress.{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="css-prop">pageX and pageY : </span> These
                    properties will give the X and Y coordinates of mouse
                    relative to the page.{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="css-prop">
                      clientX and clientY :{" "}
                    </span>{" "}
                    These Properties will return the X and Y coordinates of
                    mouse relative to the browser window.{" "}
                  </li>
                </ol>
                <br />
                <h2>How to use these properties</h2>
                <br />
                <div className="sample-code">
                  <code>
                    let link = document.querySelector("link"); <br />
                    link.addEventListener("click",
                    {"(e)=>{ e.preventDefault() }"});
                  </code>
                </div>
                <br />
                The above example will <b>prevent</b> the link from its default
                behaviour of opening the link.
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
                    10 . Select the div with class name "container". Add the
                    below mentioned Event Listeners on the element.
                    <br />
                    <br />
                    1. Click event
                    <br />
                    2. Hover event <br />
                    3. Restrict the user not to Copy a selected text.

                  </h4>
                </div>

                <div
                  title="Help"
                  onClick={() => setisIcardOpen(true)}
                  className="game-icard"
                >
                  <FaExclamationCircle  />
                </div>
              </div>

              <div className="game-input-top-row-inputs text-align-center">
                {`<div class="container"> Add Event Listeners </div>`}
              </div>
              <div className="game-input-top-row-inputs text-align-center">
                <textarea
                  onChange={(e) => setUserJs(e.target.value)}
                  className="ten-textarea"
                  type="text"
                />

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
            <iframe className="ten-iframe"></iframe>

            <div className="ten-output-table">
              <table>
                <tbody>
                  <tr>
                    <td>Click Event Added</td>
                    <td>
                      {click ? (
                        <TiTick color="green" size={30} />
                      ) : (
                        <RiCloseFill color="red" size={30} />
                      )}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Hover Event Added</td>
                    <td>
                      {hover ? (
                        <TiTick color="green" size={30} />
                      ) : (
                        <RiCloseFill color="red" size={30} />
                      )}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Copy Disabled</td>
                    <td>
                      {copy ? (
                        <TiTick color="green" size={30} />
                      ) : (
                        <RiCloseFill color="red" size={30} />
                      )}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ten;
