import partyPhoto from '../Projects/ga-images/party3.c943242d.png'
import catVbabyphoto from '../Projects/ga-images/catvbaby.05450b9c.png'
import toma from '../Projects/ga-images/toma.PNG'
import portofolio from '../Projects/ga-images/proto-portfolio.PNG'
import blog from '../Projects/ga-images/blog.PNG'
import rest from '../Projects/ga-images/rest.PNG'

const projects = [
    {
        title: 'Party Playlist App',
        github: 'https://github.com/T-Mickle/PartyPotenchExtended',
        img: partyPhoto,
        technologies: 'REACT | EXPRESS | NODE.JS | SPOTIFY API | GOOGLE API | MONGODB',
        body: `This full stack app uses React with MongoDB as the back end for Auth. It also consumes the Spotify API, Google Map API, and Weather API for a full CRUD and RESTful app. The user can create a party event and also let guests search and add to the Spotify playlist. The user can also see the map and weather for that location.`,
        collab: [
            {name: ` Chris Chewning `,
             url: `https://github.com/ChrisChewning`} ,
             {name: ` Jessamyn McTwigan `,
             url: `https://github.com/jessamyn27`},
             {name: ` Daniel Negassi `,
             url: `https://github.com/DanielNegassi`}
        ]
    },
    {
        title: 'Cat vs Baby',
        github: 'https://github.com/jessamyn27/Cat-vs-Baby-Express-App',
        url: 'https://cat-v-baby.herokuapp.com/home',
        img: catVbabyphoto,
        technologies: 'EXPRESS | MONGODB | MONGOOSE',
        body: "It's a full Stack App with CRUD, using MVC to create an adorable game. The guest can log in, create a profile page, add photos to the game or just play! A continuation of this app would be using flexbox for photo formatting.",
        collab: [
             {name: ` Jessamyn McTwigan `,
             url: `https://github.com/jessamyn27`}
        ]
    },
    {
        title: 'Lynch-agotchi',
        github: 'https://github.com/T-Mickle/Tamagotchi',
        url: 'https://lynchagotchi.herokuapp.com/index.html',
        img: toma,
        technologies: 'JQuery',
        body: 'Lynch-agotchi is an application intended to demonstrate DOM manipulation by means of JQuery. This takes the form of simple game that mimics the bare-bones of tamagotchis.'
    }, 
    {
        title: 'Pre-Course Work: Proto-portfolio',
        github: '',
        url: 'https://codepen.io/TheDiet/pen/bQjLRK',
        img: portofolio,
        technologies: 'Basic HTML/CSS | CSS Grid',
        body: 'Pre-course assignment for GA to design a portfolio website. Attempted to use CSS grid to make a Kandinksy design for the browser. '
    },
    {
        title: 'Pre-Course Work: Proto-Blog',
        github: '',
        url: 'https://codepen.io/TheDiet/pen/YRjevx',
        img: blog,
        technologies: 'Basic HTML/CSS | CSS Grid',
        body: 'Pre-course assignment for GA to design a blog website.'
    } ,
    {
        title: 'Pre-Course Work: Proto-Blog',
        github: '',
        url: 'https://codepen.io/TheDiet/pen/GwBQBQ',
        img: rest,
        technologies: 'Basic HTML/CSS | CSS Grid',
        body: 'Pre-course assignment for GA to design a restaurant menu website.'
    }
]

export default projects