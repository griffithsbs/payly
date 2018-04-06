## payly

The front-end for a web application that is concerned with paying people and getting paid by people.

payly is/will be a React-Redux single page application.

#### dependencies
- payly is written in ES6, using babel for transpilation to ES5
- webpack is used for module bundling
- eslint is used for linting

#### building and running
- to run the build (webpack + babel), execute `npm run build` at the project root
- to start the dev server, execute `npm run start:dev` at the project root. The demo page will be served up at localhost:8080/harness.

#### tests
- tests are currently run via npm: execute `npm test` at the project root
- tests are written with mocha+chai+sinon, using enzyme for testing React components

#### TODO
1. cover all non-throwaway code with tests
2. make a start on styling