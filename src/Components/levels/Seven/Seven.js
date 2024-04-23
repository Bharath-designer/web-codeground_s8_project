import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


import sample from '../../../assets/Seven/Seven_sample.mp4'

import './Seven.css'

import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";

const Seven = ({
    setisMapOpen,
    prevLevel,
    currentLevel,
    levelsCompleted,
    nextLevel,
    handleLevelUp,
}) => {




    const [isIcardOpen, setisIcardOpen] = useState(false);
    const [isHelpOpen, setisHelpOpen] = useState(false);


    const [html, sethtml] = useState(null)

    const [isSet, setisSet] = useState(true);





    useEffect(() => {

        let iframe = document.querySelector("iframe");


        let doc = iframe.contentWindow.document;
        doc.body.innerHTML = "";

        doc.body.innerHTML = html


        if (isSet) {

            const details = doc.querySelector("details")
            const summary = doc.querySelector("summary")
            const summaryInnerHtml = summary && summary.innerHTML
            const resFinal = html && html.includes("</details>")


            const result = details && summary && summaryInnerHtml && resFinal


            if (result) {
                setisSet(false);
                setTimeout(() => {
                    handleLevelUp(7);
                }, 1000);
            }
        }
    });





    // For OutPut
    const [empty, setempty] = useState(null);

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



    useEffect(() => {

        if (isIcardOpen) {
            try {
                document.querySelector(".seven-video").play()
            } catch (error) {
                console.log(error);
            }
        }

    }, [isIcardOpen])




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
                            className="icard seven-icard"
                        >
                            <video loop className='seven-video' src={sample}></video>

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
                            className="icard seven-icard"
                        >
                            <h2>HTML Collapsible Container</h2>
                            <br />
                            <div className="hint-content">
                                <h3>details tag</h3>

                                <div className="icard-css-props">
                                    <br />
                                    The <span className="css-prop">details</span> tag in HTML is used to create collapsible container that can open and close on demain of the user. By default, the container will be closed. We can toggle the open and close state by clicking on the container.
                                    <br /><br />
                                    We can add any type of content inside this container.
                                    <br /><br />
                                    The title of the collapsible container can be customized using the <span className="css-prop">summary</span> element.
                                    <br /><br />

                                    <b>For example : </b>

                                    <div className='sample-code'>
                                        <code>
                                            {"<details>"} <br />
                                            &emsp;&emsp;&emsp;&emsp;{"<summary>Title of the container</summary>"} <br />
                                            &emsp;&emsp;&emsp;&emsp;{"<p>Here goes the content.</p>"} <br />
                                            {"</details>"}
                                        </code>
                                    </div>
                                    <br />
                                    The above code will give the following output. Click the title to expand.
                                    <div className='code-output'>
                                        <details>
                                            <summary>Title of the container</summary>
                                            <p>Here goes the content.</p>
                                        </details>
                                    </div>
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
                                    <h4> 7 . Make a collapsible container using plain HTML. Refer the demo given in the right for clarification. </h4>
                                </div>

                                <div style={{ display: "flex", columnGap: "20px" }}>
                                    <div
                                        title="Demo"
                                        onClick={() => setisIcardOpen(true)}
                                        className="game-icard seven-help"
                                    >
                                        <BiHelpCircle />
                                    </div>

                                    <div
                                        title="Help"
                                        onClick={() => setisHelpOpen(true)}
                                        className="game-icard"
                                    >
                                        <FaExclamationCircle />
                                    </div>
                                </div>
                            </div>
                            <div className="game-input-top-row-inputs text-align-center">
                                <textarea spellCheck={false} placeholder='Write HTML here ..... ' className='seven-textarea' rows={20} onChange={(e) => {
                                    sethtml(e.target.value)
                                }} />
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
                <div className="game-output seven-game-output">
                    <div className="output-content seven-output-content">
                        <iframe className='seven-iframe'
                            style={{ border: "none", outline: "none", width: "100%" }}
                        ></iframe>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Seven