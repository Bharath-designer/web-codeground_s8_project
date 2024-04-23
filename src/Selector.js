import React from 'react'

import Ide from './Components/Editor/Ide'
import App from './App'

import { Routes, Route, useNavigate } from 'react-router-dom'


const Selector = () => {

    const navigate = useNavigate();

    const navigateToHome = () =>{
        navigate('/')
    }

    const navigateToEditor = () =>{
        navigate('/editor')
    }

  return (

        <Routes>

            <Route path='/editor'  element={<Ide navigateToHome={navigateToHome}/>}/>
            <Route path='*' element={<App navigateToEditor={navigateToEditor} />}/>

        </Routes>

  )
}

export default Selector