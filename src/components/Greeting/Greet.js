import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import greetingSketch from '../Sketches/greetingSketch'



function Greet(props) {
  let displayP5;
  if (props.windowWidth > 740) {
    displayP5 = 'title__p5--displayBlock'
  } else {
    displayP5 = 'title__p5--displayNone'
  }

  return (<div className='title'>
    <div className={displayP5}><P5Wrapper sketch={greetingSketch} /></div>

    {props.windowWidth > 740 ? null : <h1 className='title__text'>Greetings</h1>}

  </div>)


}


export default Greet;