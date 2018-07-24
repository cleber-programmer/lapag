import React from 'react'
import logo from './logo-white.png'
import './App.css'

import Agenda from './Agenda'

export default () => (
  <div className='App'>
    <div className='App-header'>
      <h1 className='App-title'>Front-End Challenge</h1>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
    {/* <p className='App-intro'>Start the test here!</p> */}
    <Agenda />
  </div>
)
