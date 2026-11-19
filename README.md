# spaCy Annotator

A web application for annotating text corpora with [spaCy](https://spacy.io) named entity annotations: ORG, PERSON, NORP, GPE, LOC and DATE.

Select text in the editor and tag it with one of the entity types; tagged text is highlighted and labelled with its type. **Detect** posts the paragraphs to an `/ent` endpoint and loads the entities it returns into the editor, and **Train** posts the paragraphs and their tags to a `/train` endpoint. The app does not run spaCy itself: both endpoints are expected on a separate server at `http://127.0.0.1:8000`, which is not included in this repository.

![The annotator with its sample Spanish text, entities highlighted and labelled by type](docs/screenshot.png)

## Getting started

* Install:
    * [Node.js](http://nodejs.org) (if you don't have it): `brew install node` on OS X
    * [Brunch](http://brunch.io), its plugins and app dependencies: `npm install`. Don't install Brunch globally: from version 5 the `brunch` package on npm is an unrelated project.
* Run:
    * `npm start` — runs `brunch watch --server`, which watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run prod` — runs `brunch build --production`, which builds minified project for production
* Test:
    * `npm test` — executes test suites

## How it's built

* React components, with Redux and react-redux for state. The single route is set up with react-router and react-router-redux.
* The editor is Slate. Each entity type is a Slate mark, and `app/util/` converts between Slate's document format and the paragraphs sent to and received from the server.
* redux-saga runs the Detect and Train requests, which are made with `fetch` (isomorphic-fetch).
* Bootstrap provides the base styles; the entity highlight styles are in `app/styles/application.css`.
* Brunch builds `app/` into `public/`, compiling with Babel and copying static files from `app/assets/`.
* Tests run on Jest, with redux-saga-test-plan for the sagas.
