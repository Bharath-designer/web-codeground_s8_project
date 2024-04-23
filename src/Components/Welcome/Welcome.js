import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./Welcome.css";
import { FaExclamationCircle } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Welcome = ({ setisInitial }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-row-2">
          <div className="welcome-heading">
            

            <Typewriter
              
              onInit={(typewriter) => {
                typewriter
                  .typeString("<span class='welcome-heading'>Welcome to Web Codeground !!</span>")
                  .pauseFor(2500)
                  .start()
                  
              }}
            />



          </div>

          <div>
            Web Developement is fun!! but it doesn't stop when you think
            you have mastered it. The more you explore, the more you will fall
            in love with Developement.
          </div>

          <div>
            The first step is always harder. Since you are already here, let's
            kick-start the journey with front-end. Our goal is to make you comfortable with HTML, CSS and JavaScript.
            Solve the levels to unlock the next.
          </div>

          <div>
            Stuck somewhere? Take a hint {" "}
            <sub>
              <FaExclamationCircle size={"20px"} />
            </sub>{" "}
            and learn the concept.
            Design your imaginations in the Editor. Finally,{" "}
            <b>TRUST THE PROCESS</b>.
          </div>
          <div className="developers">
            <b>Developers :- </b> 
            <div>
            <p><b>Bharath V</b> - concepts and validation logics for levels, responsive design and overall development. </p> 
           <p> <b>Rasika R</b> - content writer and designer for hints, level management and overall development.  </p>
            </div>
          </div>
        </div>
        <div className="welcome-row-1">
          <button onClick={() => setisInitial("no")}>
            Lets Start....
            <span className="icon">
              <FiArrowRight size="20" color="red" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
