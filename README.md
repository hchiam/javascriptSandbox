# Learning JavaScript

Miscellaneous practice code in JS.

Just one of the things I'm learning. <https://github.com/hchiam/learning>

## How to Run .js Files Using Terminal/CommandLine:

Make sure to include console.log("output text here");

    node filename.js

## Learn about Modern ES6 JS Features

<https://stackoverflow.blog/2019/09/12/practical-ways-to-write-better-javascript>

## Bonus

### Get immediate feedback on code errors and style

To automatically re-run a [.js file](https://github.com/hchiam/learning-js/tree/master/more-like-interview-questions) and the test cases in it whenever you edit that file, copy the .js code into [`index.js`](https://github.com/hchiam/learning-eslint-google/blob/master/index.js) in my [ESLint repo](https://github.com/hchiam/learning-eslint-google) and do the setup so you can run this command just once:

    ```bash
    nodemon -x 'npm run lint; node index.js'
    ```

***Or*** `nodemon -x 'npm run lint; npm run test; node index.js'`

This works just like [`rerun` for Python](https://github.com/hchiam/learning-python/blob/master/README.md#run-code-linter).

**Alternatively:**

To set up [eslint and jest](https://github.com/hchiam/eslint-and-jest) locally inside this learning-js folder:

    ```bash
    npm install # eslint and jest-cli are already listed in package.json for you
    npm test # runs scripts test command listed in package.json
    ```

***Or*** just run this: [`jest`](https://github.com/hchiam/learning-jest).

***Or*** to run just a-specific.test.js, run this: `jest a-specific.test.js`.

### Get code Maintainability Index (MI score)

The MI combines lines of code, cyclomatic complexity, and the Halstead volume metric (i.e. number of variables, operations, decision paths, and lines of code). After you [`npm install -g plato`](https://github.com/es-analysis/plato), you can get the MI score of your code:

    ```bash
    plato -r -d report index.js
    ```

Similar to how I use [`radon`](https://github.com/hchiam/learning-python/#maintainability-index-mi-score) for Python code.

### Minify code

Install `minify`:

    ```bash
    npm i minify -g
    minify -v
    ```

Use `minify`:

    ```bash
    minify minify-this-script.js > minified-script.js
    ```
