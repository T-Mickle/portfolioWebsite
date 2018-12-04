import React from 'react';
import { Player } from 'video-react';
// // import thing from '../Assets/Videos/sketches/2018-10-02 05-21-07.mov'
// import sketches from '../Projects/sketchData'

export default (props) => {
    // console.log(sketches)
  return (
    <Player  playsInline> 
     
     
      <source src={props.src} />
      </Player>
  );
};

