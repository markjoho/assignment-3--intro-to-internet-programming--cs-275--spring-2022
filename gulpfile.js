const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    del = require(`del`),
    babel = require(`gulp-babel`),
    htmlValidator = require(`gulp-html`),
    htmlCompressor = require(`gulp-htmlmin`),
    imageCompressor = require(`gulp-image`),
    cleanCSS = require('gulp-clean-css').
    jsCompressor = require(`gulp-uglify`),
    jsLinter = require(`gulp-eslint`),
    sass = require(`gulp-sass`)(require(`sass`)),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let validateHTML = () => {
  return src(`dev/html/*.html`).pipe(htmlValidator())
  .pipe(dest(`temp`));
};

let compressHTML = () => {
  return src(`dev/html/*.html`)
  .pipe(htmlCompressor({collapseWhitespace: true}))
  .pipe(dest(`prod`));
};

let browserChoice = `default`;

let lintCSS = () => {
  return src(`dev/css/*.css`)
    .pipe(CSSLinter({
      failAfterError: false,
      reporters: [
        {formatter: `string`, console: true}
      ]
    }));
    .pipe(dest(`temp/css`));
};

let compressCSS = () => {
  return src('dev/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('prod/css'));
};

let lintJS = () => {
  return src(`dev/js/*.js`)
      .pipe(jsLinter())
      .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
  return src(`dev/js/*.js`)
    .pipe(babel())
    .pipe(jsCompressor())
    .pipe(dest(`temp/js`));
};

let transpileJSForProd = () => {
    return src(`dev/js/*.js`)
      .pipe(babel())
      .pipe(jsCompressor())
      .pipe(dest(`prod/js`));
};

let serve = () => {
  browserSync({
    notify: true,
    reloadDelay: 50,
    browser: browserChoice,
    server: {
        baseDir: `temp`
      }
    }
  )
};

    watch(`dev/js/*.js`, series(lintJS, transpileJSForDev))
      .on(`change`, reload);

    watch(`dev/css/*.css`, lintCSS)
      .on(`change`, reload);

    watch(`dev/html/*.html`, validateHTML)
      .on(`change`, reload);
};

async function brave () {
    browserChoice = `brave browser`;
}

async function chrome () {
    browserChoice = `google chrome`;
}

async function edge () {
    // In Windows, the value might need to be “microsoft-edge”. Note the dash.
    browserChoice = `microsoft edge`;
}

async function firefox () {
    browserChoice = `firefox`;
}

async function opera () {
    browserChoice = `opera`;
}

async function safari () {
    browserChoice = `safari`;
}

async function vivaldi () {
    browserChoice = `vivaldi`;
}

async function allBrowsers () {
    browserChoice = [
        `brave browser`,
        `google chrome`,
        `microsoft edge`, // Note: In Windows, this might need to be microsoft-edge
        `firefox`,
        `opera`,
        `safari`,
        `vivaldi`
    ];
}

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;

exports.serve = series(
    validateHTML,
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);

exports.build = series(
  compressHTML,
  compressCSS,
  transpileJSForProd);
