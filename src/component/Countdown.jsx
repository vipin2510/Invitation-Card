// CountdownComponent.js
import React, { useEffect, useState } from 'react';
import './countdown.css'

const CountdownComponent = ({type}) => {

  useEffect(() => {
    var clock;

    $(document).ready(function() {

      // Instantiate a counter
      clock = new FlipClock($('.clock'), 60, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true
      });
      
    });
  }, []);


  document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
  
    // Toggle theme
    var interval = setInterval(() => {
      let body = document.body;
      body.classList.toggle('light-theme');
      body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
      body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    }, 5000);
    
    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
  });
  

  return (
    <div className="example">
  <h1>FlipDown.js</h1>
  <p>⏰ A lightweight and performant flip styled countdown clock</p>
  <div id="flipdown" className="flipdown"></div>
  <div className="buttons">
    <p>Version: <span id="ver"></span> (&lt;11KB minified)</p>
    <a href="https://github.com/PButcher/flipdown#flipdown" target="_blank" className="button"><i className="fab fa-github"></i> <span>Get started</span></a>
  </div>
</div>
  );
};

export default CountdownComponent;
