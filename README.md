# Portfolio Web Site

This is code for my current protfolio website. This read me is to share the technologies used a long with keeping a report of known issues.

The website can be found hosted on heroku at: timothyrmickle.com


### Tech

This portfolio uses a number of open source projects to work properly:

* [React] - HTML enhanced for web apps!
* [p5.js] - For main background and title animation for wide screens.
* [react-p5-wrapper] - This Component lets you integrate p5 Sketches into your React App with ease.
* [video-react] -  The web video player built from the ground up for an HTML5 world using React library.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd porfolio
$ npm install -d
$ npm start
```


### Todos

    Known Issues: 
        - Mozilla experience very sluggish. Optimation needed.
        - IE (11.407) - CCS Grid non-functional
                      - Title Animation absent  
        - Edge (Microsoft Edge 42.17134.1.0) - Issue with title animation placing itself over background animation.
        - Footer icons spaced incorrectly {Flexbox}



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   
   [video-react]: <https://video-react.js.org/>
   [React]: <https://reactjs.org/>
   [p5.js]: <https://p5js.org/>
   [react-p5-wrapper]: <https://www.npmjs.com/package/react-p5-wrapper>
   [timothyrmickle.com] : <http://www.timothyrmickle.com>
