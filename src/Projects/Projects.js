import React from 'react';

import ProjectCards from '../projectCards/projectCards'

import projectData from '../Projects/projectData'
import sketchData from '../Projects/sketchData'
import layoutData from '../Projects/layoutData'

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'


function Projects({match}) {
    

 
    return (
       
        
           <div className={'projectContainer'}> 
            <h1 className={'primaryText modalContainer__mainHeader'}>Topics</h1>

            <ul className={'projectLinks primaryText '} >
                <li className={'projectLinks__items '}>
                    <Link to={`${match.url}/ga`}>General Assembly Projects</Link>
                </li>
                <li className={'projectLinks__items '}>
                    <Link to={`${match.url}/sketches`}>P5.js Sketches</Link>
                </li>
                <li className={'projectLinks__items '}>
                    <Link to={`${match.url}/layouts`}>Lessons in Layouts</Link>
                </li>
            </ul>
        <Switch> 
            <Route  default path={`${match.path}/ga`} render={() =>
                <ProjectCards className={'cardContainer'} projectData={projectData} /> }
            />
            <Route path={`${match.path}/sketches`} render={() =>
                ( <div> <p className='projectLeadText'> Random sketches from my p5.js sandbox. <a target="_blank" rel="noopener noreferrer"href='https://github.com/T-Mickle/P5.js-SandBoxing'>GitHub Link </a> </p>
                <ProjectCards className={'cardContainer'} projectData={sketchData} /> </div>) }
            />
            <Route path={`${match.path}/layouts`} render={() =>
                ( <div> 
                    <p className='projectLeadText'> Right now fairly empty, but come back soon... The plan is to explore SASS and layouts by recreating magazine layouts.</p>
                <ProjectCards className={'cardContainer'} projectData={layoutData} /> </div> ) }
            />

             <Route
                exact
                path={match.path}
                render={() => <div className='projects__defaultText'>  <p>Check out projects that I am currently working on and past work.</p> 
                <p></p> 
                </div>}
            />

            </Switch>

           
            
            </div> 
            
       


    
    )
}


export default Projects;