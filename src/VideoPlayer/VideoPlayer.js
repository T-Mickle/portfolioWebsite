import React from 'react';
import { Player } from 'video-react';

export default (props) => {
    
  return (
    <Player  playsInline> 
     
     
      <source src={props.src} />
      </Player>
  );
};

