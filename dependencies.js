//this is basically the package.json

//notice we're exporting here
export { default as React } from "https://dev.jspm.io/react@16.13.1"; //Also notice this is a URL not a local package
export { default as ReactDOMServer } from "https://dev.jspm.io/react-dom@16.13.1/server"; //MORE URLS
export { opine } from "https://deno.land/x/opine@master/mod.ts"; //opine is a deno port of ExpressJS
