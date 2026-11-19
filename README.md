# spaCy Annotator

> This project is no longer maintained and the repository is archived. See [Status and history](#status-and-history).

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

## Status and history

This project is no longer maintained, and the repository is archived.

It is a prototype written between January and May 2017, when spaCy 1.x was current. The idea was a loop in one page: tag entities by hand, send them to a server to train a model, and ask the server to detect entities again. It did not get past the prototype: the entity types, the model name (`es`) and the server address are fixed in the code, the sample text is built in, and the server was never part of this repository.

* January 2017: first commit.
* May 2017: last change to the app.
* August 2017: Explosion, the makers of spaCy, [announced Prodigy](https://explosion.ai/blog/prodigy-annotation-tool-active-learning), their annotation tool.

This project came a few months before [Prodigy](https://prodi.gy), but it is a separate and much smaller thing. To annotate data for spaCy today, look at Prodigy or another maintained tool.

The entity highlight styles in `app/styles/application.css` come from [displaCy ENT](https://github.com/explosion/displacy-ent), Explosion's entity visualiser (MIT License, Copyright (C) 2016 ExplosionAI UG (haftungsbeschränkt)).

In November 2026 the app still built and its tests passed on Node 24. Its dependencies date from 2017 and have known vulnerabilities, so run it locally only.
