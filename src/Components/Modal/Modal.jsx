import React from 'react'
import './Modal.css'
import { motion } from 'framer-motion'

const Modal = ({ level, levelsCompleted, selectLevelUsingMap, setisMapOpen, currentLevel }) => {



    return (
        <div className='modal-container'>
            <div onClick={() => setisMapOpen(false)} className="close"></div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal">
                <div className="modal-header">
                    Choose the Level
                </div>
                <div className="level-container">
                    {level.map((x) =>
                        // <div key={x}  style={ x === currentLevel ? {background:"green"}: {} } onClick={()=>selectLevelUsingMap(x)} className="level">{x}</div>
                        <div key={x}  style={ x === currentLevel ? {background:"green"}  : (x <= levelsCompleted ? {background:"black"} : {background:"grey"} ) } onClick={()=>selectLevelUsingMap(x)} className="level remove-highlight">{x}</div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Modal