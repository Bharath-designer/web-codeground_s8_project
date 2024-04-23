import React, { useCallback, useEffect, useState } from "react";
import "./Ide.css";
import { motion } from "framer-motion";

const Ide = ({ navigateToHome }) => {
  const [isHTMLVisible, setIsHTMLVisible] = useState(true);
  const [isCSSVisible, setIsCSSVisible] = useState(true);
  const [isJSVisible, setJSVisible] = useState(true);

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const [htmlText, setHtmlText] = useState(localStorage.getItem("html") || "");
  const [cssText, setcssText] = useState(localStorage.getItem("css") ||"" );
  const [jsText, setjsText] = useState(localStorage.getItem("js") ||"" );

  const onTextAreaChange = (e) => {
    if (e === 1) {
      setHtmlText(document.getElementById("area").value);
    } else if (e === 2) {
      setcssText(document.getElementById("css").value);
    } else {
      setjsText(document.getElementById("js").value);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobileScreen(true);
    }
  }, []);

  const pressEvent = (e) => {
    if (e.ctrlKey && e.key == "Enter") makeContent();
  };
  useEffect(() => {
    window.addEventListener("keypress", pressEvent);
    return () => {
      window.removeEventListener("keypress", pressEvent);
    };
  });

  useEffect(() => {
    localStorage.setItem("html", htmlText);
  }, [htmlText]);

  useEffect(() => {
    localStorage.setItem("css", cssText);
  }, [cssText]);

  useEffect(() => {
    localStorage.setItem("js", jsText);
  }, [jsText]);

  const makeContent = () => {
    let iframe = document.querySelector("iframe");
    let doc = iframe.contentWindow.document;
    doc.head.innerHTML = "";
    doc.body.innerHTML = htmlText;
    let cssEle = document.createElement("style");
    let scritpEle = document.createElement("script");
    doc.head.append(cssEle);
    doc.body.append(scritpEle);
    cssEle.textContent = cssText;
    let wrappedJS = "(function(){" + jsText + "})();";
    scritpEle.textContent = wrappedJS;
  };

  const isVisible = (x) => {
    if (x === 1) {
      setIsHTMLVisible(!isHTMLVisible);
    }
    if (x === 2) {
      setIsCSSVisible(!isCSSVisible);
    }
    if (x === 3) {
      setJSVisible(!isJSVisible);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
    >
      <div className="nav">
        <div className="logo">Web CodeGround</div>
        <div className="actions">
          <button title="ctrl + Enter" onClick={makeContent}>
            Run
          </button>
          <button onClick={navigateToHome}>Back To Play</button>
        </div>
      </div>
      <div className="playGround">
        <div className="top">
          <div onClick={() => isVisible(1)} className="header">
            <div className="header-row">HTML</div>
            <button className="toggleBtn">{isHTMLVisible ? "-" : "+"}</button>
          </div>
          {isHTMLVisible && (
            <textarea
              tabIndex={1}
              spellCheck="false"
              placeholder={isMobileScreen ? "Write HTML here...." : ""}
              value={htmlText}
              className="textArea"
              onChange={() => onTextAreaChange(1)}
              id="area"
            ></textarea>
          )}
          <div onClick={() => isVisible(2)} className="header">
            <div className="header-row">CSS</div>
            <button className="toggleBtn">{isCSSVisible ? "-" : "+"}</button>
          </div>
          {isCSSVisible && (
            <textarea
              tabIndex={2}
              spellCheck="false"
              value={cssText}
              placeholder={isMobileScreen ? "Write CSS here...." : ""}
              className="textArea"
              onChange={() => onTextAreaChange(2)}
              id="css"
            ></textarea>
          )}
          <div onClick={() => isVisible(3)} className="header">
            <div className="header-row">JS</div>
            <button className="toggleBtn">{isJSVisible ? "-" : "+"}</button>
          </div>
          {isJSVisible && (
            <textarea
              tabIndex={3}
              spellCheck="false"
              placeholder={isMobileScreen ? "Write JS here...." : ""}
              value={jsText}
              className="textArea"
              onChange={() => onTextAreaChange(3)}
              id="js"
            ></textarea>
          )}
        </div>
        <iframe title="Content Window" className="iframe"></iframe>
      </div>
    </motion.div>
  );
};

export default Ide;
