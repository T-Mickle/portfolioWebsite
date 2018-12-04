
import React from 'react';
import portrait from '../Assets/portrait/dots.jpg'


const About= () => {
    return (
        
        <div className={'about'}>
            <h1 className={'about__title modalContainer__mainHeader primaryText'}>About Section</h1>
            <img className='about__img' src={portrait} alt='Portrait  of my self, using black and white thresholds to outline break points in a source photo. That then plots dots along the outline in a pink hue.'></img>
            <p className='about__text'>I'm a front-end developer passionate about interactive and generative designs for the purpose of communicating unique and personalized experiences. I think we can create a more accessible and delightful environment that offers each of our virtual guests a personalized and hospitable digital space. No person is the same, no website should be the same.</p>
           
           
        </div>
       
    )
 }

 
export default About;