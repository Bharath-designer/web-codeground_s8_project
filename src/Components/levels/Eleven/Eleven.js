import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import "./Winning.css";

import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Eleven = ({
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
      <div className="game-container">
        <div className="game-input">
          <div className="winning-page-input-content">
            <div className="winning-page">
              <h2>Congratulations !</h2>
              <div className="party-paper">
                <span>🎉</span>
              </div>
              <div>
                You have crossed the first milestone in the beautiful journey of
                Web Development.
              </div>
              <div>
                By completing these 10 levels, you could have got some basic
                understanding of HTML, CSS and JavaScript.
              </div>
              <div className="winning-quote">
                <b>
                  <code>
                    Don't stop the journey... <br /> Direction is more important
                    than speed
                  </code>
                </b>
              </div>
              <div>
                You can practice more on the <Link className="editor-link" to="/editor">
                  Editor
                </Link>
              </div>
              <div>
                Stay tuned, this CodeGround doesn't stop with 10 levels.
              </div>
              <div className="happy-coding">Happy Coding!!</div>
              <button onClick={prevLevel}>
                <FaAngleDoubleLeft />
                Back To Levels
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eleven;
