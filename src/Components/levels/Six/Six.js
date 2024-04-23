import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import './Six.css'

import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import cssToJson from '../../../CssToJson';


import flex_row from "../../../assets/six/flex-row.png"
import flex_column from "../../../assets/six/flex-column.png"
import flex_no_wrap from "../../../assets/six/flex-no-wrap.png"
import flex_wrap from "../../../assets/six/flex-wrap.png"
import jus_center from "../../../assets/six/jus-center.png"
import jus_start from "../../../assets/six/jus-start.png"
import jus_end from "../../../assets/six/jus-end.png"
import space_between from "../../../assets/six/space-between.png"
import space_around from "../../../assets/six/space-around.png"
import space_evenly from "../../../assets/six/space-evenly.png"


const Six = ({
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

            const container = document.querySelector(".six-output-container-relative")
            const result = container.style.display === "flex" && container.style.flexWrap === "wrap"

            if (result) {
                setisSet(false);
                setTimeout(() => {
                    handleLevelUp(6);
                }, 1000);
            }
        }
    });


    const [style, setStyle] = useState(null)

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
                            <h2>CSS Flexbox Properties</h2>

                            <div className="hint-content">

                                We can use the following Flexbox properties in a flexible container. Flexible container is a HTML element which has <span className='css-prop'>display : flex;</span>

                                <br /><br />
                                <br />
                                <h3>1. flex-direction : row (default)</h3>
                            </div>
                            <img src={flex_row} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    The <span className='css-prop'>flex-direction : row</span> property is the default value for flex-direction which arrange the items in a horizontal axis from left to right.
                                    <br />
                                    <br />
                                    We can arrange items from right to left as well using <span className='css-prop'>flex-direction : row-reverse</span> property.
                                </div>
                            </div>
                            <br />
                            <div className="hint-content">
                                <h3>2. flex-direction : column</h3>
                            </div>
                            <img src={flex_column} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    The <span className='css-prop'>flex-direction : column</span> property arranges the items in a vertical axis from top to bottom.
                                    <br />
                                    <br />
                                    We can arrange items from bottom to top as well using <span className='css-prop'>flex-direction : column-reverse</span> property.
                                </div>
                            </div>
                            <br />
                            <div className="hint-content">
                                <h3>3. flex-wrap : no-wrap (default)</h3>
                            </div>
                            <img src={flex_no_wrap} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    The <span className='css-prop'>flex-wrap : no-wrap</span> property forces the items to arrange onto <b>single line</b> and it may overflow from the parent.
                                </div>
                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>4. flex-wrap : wrap</h3>
                            </div>
                            <img src={flex_wrap} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    The <span className='css-prop'>flex-wrap : wrap</span> property wraps the items onto multiple lines so that it will fit into the container.
                                </div>
                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>5. justify-content : flex-start (default)</h3>
                            </div>
                            <img src={jus_start} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    Justify Content specifies the alignment of items along the main axis.
                                    <br /><br />
                                    If <span className="css-prop">flex-direction : row</span> then the <b>main axis</b> will be <b>row</b> (horizontal axis). And if <span className="css-prop">flex-direction : column</span> then the <b>main axis</b> will be <b>column</b> (vertical axis).
                                    <br /><br />
                                    The <span className="css-prop">justify-content : flex-start</span> property will group the items towards start.
                                </div>
                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>6. justify-content : center</h3>
                            </div>
                            <img src={jus_center} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    The <span className="css-prop">justify-content : center</span> property will group the items at center.

                                </div>
                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>7. justify-content : flex-end</h3>
                            </div>
                            <img src={jus_end} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                The <span className="css-prop">justify-content : flex-end</span> property will group the items towards end. 

                                     </div>
                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>8. justify-content : space-between</h3>
                            </div>
                            <img src={space_between} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                    The <span className="css-prop">justify-content : space-between</span> property will place the first item on startline and last item on end and distribute the remaining items evenly.
                                </div>
                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>9. justify-content : space-around</h3>
                            </div>
                            <img src={space_around} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                The <span className="css-prop">justify-content : space-around</span> property will distribute the items evenly with equal space around them. 
                                     </div>

                            </div>
                            <br />

                            <div className="hint-content">
                                <h3>10. justify-content : space-evenly</h3>
                            </div>
                            <img src={space_evenly} alt="flex-direction : row" />
                            <div className="hint-content">
                                <div className="icard-css-props">
                                The <span className="css-prop">justify-content : space-evenly</span> property will distribute the items such that the space between any two adjacent items is same. 
                                </div>
                            </div>
                            <br />

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
                                    <h4> 6 . Position the boxes in their respective place. </h4>{" "}
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
                                {"<div class=\"container\">"}
                                <div className="css">
                                    {"<div class=\"box\"> Box 1 </div>"} <br />
                                    {"<div class=\"box\"> Box 2 </div>"} <br />
                                    {"<div class=\"box\"> Box 3 </div>"} <br />
                                    {"<div class=\"box\"> Box 4 </div>"} <br />
                                    {"<div class=\"box\"> Box 5 </div>"} <br />
                                    {"<div class=\"box\"> Box 6 </div>"} <br />
                                    {"<div class=\"box\"> Box 7 </div>"} <br />
                                    {"<div class=\"box\"> Box 8 </div>"} <br />
                                    {"<div class=\"box\"> Box 9 </div>"} <br />
                                    {"<div class=\"box\"> Box 10 </div>"} <br />
                                </div>

                                {"</div>"}
                            </div>

                            <div className="game-input-top-row-inputs text-align-center">
                                .container {" {"}
                                <div className="css">
                                    <textarea onChange={(e) => setStyle(cssToJson(e.target.value))} className='six-textarea' />

                                </div>
                                {"}"}
                                <br />
                                <br />
                                .box {" {"}
                                <div className="css">
                                    width : 100px; <br />
                                    min-width : 100px; <br />
                                    height : 100px; <br />
                                    background-color : #3aafa9; <br />
                                    display: grid; <br />
                                    place-items: center; <br />
                                    margin: 10px; <br />
                                </div>
                                {"}"}
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
                <div className="game-output six-game-output">
                    <div className="output-content">
                        <div style={style} className="six-output-container-relative">
                            <div className='six-container-box-relative'> Box 1 </div>
                            <div className='six-container-box-relative'> Box 2 </div>
                            <div className='six-container-box-relative'> Box 3 </div>
                            <div className='six-container-box-relative'> Box 4 </div>
                            <div className='six-container-box-relative'> Box 5 </div>
                            <div className='six-container-box-relative'> Box 6 </div>
                            <div className='six-container-box-relative'> Box 7 </div>
                            <div className='six-container-box-relative'> Box 8 </div>
                            <div className='six-container-box-relative'> Box 9 </div>
                            <div className='six-container-box-relative'> Box 10 </div>
                        </div>
                        <div className="six-output-container-absolute">
                            <div className='six-container-box-absolute'> Box 1 </div>
                            <div className='six-container-box-absolute'> Box 2 </div>
                            <div className='six-container-box-absolute'> Box 3 </div>
                            <div className='six-container-box-absolute'> Box 4 </div>
                            <div className='six-container-box-absolute'> Box 5 </div>
                            <div className='six-container-box-absolute'> Box 6 </div>
                            <div className='six-container-box-absolute'> Box 7 </div>
                            <div className='six-container-box-absolute'> Box 8 </div>
                            <div className='six-container-box-absolute'> Box 9 </div>
                            <div className='six-container-box-absolute'> Box 10 </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Six