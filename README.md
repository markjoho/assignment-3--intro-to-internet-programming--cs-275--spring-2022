# Spring 2022 Intro to Internet Programming — Assignment 3

* **Do not start this project until you have read these instructions carefully.**
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖・Introduction・❖
Create a *single* web page consisting of HTML, CSS, and JavaScript that prompts the user for the size of a matrix, then prints the matrix with values from 1–user input, then prints the matrix in reverse. The cells in the matrix along the diagonal from top right to bottom left should not be moved, since this is the axis along which the matrix will be reversed, or flipped. A visual of what the matrix should look like is available [here](http://vanegas.cs.hartford.edu/uploads/videos/flipping-a-matrix-along-a-diagonal.mp4).

_You may **only** work within the confines of the included scaffold._

---

## ❖・Rules・❖
Before you begin, **update Node, NPM, ESLint, and Stylelint**

### General
* Do not include images in this project
* Do not alter the scaffold of this project, especially the `.gitignore` files
* Ensure your editor is configured to use the enclosed `.editorconfig` file

### HTML
* Place *all* your markup in `index.html`

### CSS
* No CSS libraries may be used
* Place *all* your styles in `style.css`

### JavaScript
* No JavaScript libraries may be used
* Place *all* your JavaScript in `app.js`
* No ESLint errors, except warnings for line lengths
* Use backticks exclusively for all variable interpolation and string manipulation. Should you need to defeat this rule, explain so in a comment
* No function hoisting; only arrow functions. Should you need to defeat this rule, explain so in a comment
* No variable hoisting; only `let` declarations. Should you need to defeat this rule, explain so in a comment
* Use `window.prompt` to take input in from the user
* Create a sentinel-based entry into this program that only allows integers greater than 1
* Use `parseInt` and `parseFloat` to verify integer input
* Use `Promises` to achieve a correct ordering of the callback function sequence

### Task Running with Gulp
You must employ Gulp as the task runner with workflows for development and production

* Use *only* the following Gulp modules:
* `gulp`
* `gulp-html`
* `gulp-stylelint`
* `gulp-htmlmin`
* `gulp-clean-css`
* `gulp-eslint`
* `gulp-babel`
* `gulp-uglify`
* `browser-sync`

And, of course, use `src`, `dest`, `series`, and `watch` as needed

Regarding tasks, implement the following:
```javascript
let validateHTML = () => {};
let compressHTML = () => {};
let validateCSS = () => {};
let compressCSS = () => {};
let validateJS = () => {};
let transpileJSForDev = () => {};
let transpileJSForProd = () => {};
let serve = () => {};
```

Furthermore, implement the following polling function calls in the `serve` task:
```javascript
watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
```

#### Development
* Your HTML must validate via the `gulp-html` module
* Your CSS must validate via the `gulp-stylelint` module using the enclosed `.stylelintrc.json` file
* Your JavaScript must validate via the `gulp-eslint` module using the included `.eslintrc.json` file
* Your JavaScript must transpile using `gulp-babel`, and, possibly, `@babel/core` and `babel-present-env`
* The development, or dev, track must lint/validate HTML, CSS, and JavaScript each time you save an `.html`, `.css`, or `.js` file
* Additionally, the dev track must also refresh the browser when any of these files have changed
* `gulp serve` triggers the dev track

#### Production
* The production, or prod, track must compress all the aforementioned languages. *Do not lint them*, as they have already been linted in the development track
* `gulp build` should load the entire production environment into a folder called `prod`, which must be fully self-sufficient and contain all the required files — compressed and linted — of the web page

---

## ❖・Due・❖
Saturday, 16 April 2021, at 10:00 AM

---

## ❖・Grading・❖
| Item                                                                   | Points |
|------------------------------------------------------------------------|--------|
| *Overall code quality*                                                 | `20`   |
| *Project implemented following assignment directions*                  | `10`   |
| *`.editorconfig` implemented*                                          | `10`   |
| *HTML is valid (via `gulp-html`)*                                      | `05`   |
| *CSS is valid (via `gul-stylelint`)*                                   | `05`   |
| *JavaScript, including `gulpfiles.js` is valid (via `gulp-eslint`)*    | `10`   |
| *Variables declared using only `let` (no variable hoisting)*           | `05`   |
| *Functions declared using only arrow functions (no function hoisting)* | `05`   |
| *Sentinel-based input with error-checking*                             | `05`   |
| *Promises used to implement function invocation*                       | `05`   |
| *Gulp development scaffold in place*                                   | `10`   |
| *Gulp production scaffold in place*                                    | `10`   |

---

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
