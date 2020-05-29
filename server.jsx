import { opine, React, ReactDOMServer } from "./dependencies.js";

import App from "./app.jsx";

//initiate an opine server
const app = opine();
//set our port variable
const PORT = 3000
//this is where our code bundle will go
const BUNDLE = "/bundle.js";

//this is a bit hard to read but this line imports React and ReactDOM, and it renders the jsx/html onto the body in our DOM.
const react = `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.body);`;

//This block is in place of a .html file
  //it imports our bundled code and renders it to our App component.
const html =
`<html style="background-color: black;">
  <head>
    <script type="module" src="${BUNDLE}"></script>
  </head>
  <body>${
    (ReactDOMServer).renderToString(<App />)
  }</body>
  </html>`;

// This is routing so our bundle.js w/ the added imports & render function can be accessed
    //can see the bundle at localhost:3000/bundle.js
app.use(BUNDLE, (req, res, next) => {
  res.type("application/javascript").send(react);
});

//This is routing the user at the top level domain to recieve the html which calls the bundle which renders the page
app.use("/", (req, res, next) => {
  res.type("text/html").send(html);
});

//Sets the port for opine and starts the server
app.listen({ port: PORT });

console.log(`listening on port ${PORT}`);
