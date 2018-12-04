import React from 'react';
import Video from '../VideoPlayer/VideoPlayer'


function ProjectCards({ projectData, className }) {

    const projects = projectData.map((x, i) => {

        let github;
        if (x.github) {
            github = (<div className='projectCard__githubLink'>
                <a className='primaryText' href={x.github} target="_blank" rel="noopener noreferrer">github</a>
            </div>)
        }

        let collab;

        if (x.collab) {
            collab = x.collab.map((c, i) => {
                return (<a href={c.url} >{c.name}</a>)
            }

            )
            collab = (<p> Made with:{collab}</p>)
        }

        let video;
        if (x.video) {
            let key = Object.keys(x.video)
            video = (<Video src={x.video[key[0]]}/>)
        }

        return (

            <div key={i} className='projectCard__container' >
                <img className='projectCard__img' src={x.img} alt="" />
                {video}
                <div className='primaryText projectCard__title'>
                    <a href={x.url}
                        target="_blank" rel="noopener noreferrer">{x.title} </a>
                </div>

                {github}


                <p className='projectCard__subheader'> {x.technologies}</p>
                <p className='projectCard__text projectCard__text--style'> {x.body} </p>
                {collab}
            </div>
        )
    })
    return (

        <div className={className}>
            {projects}
        </div>


    )
}

export default ProjectCards;