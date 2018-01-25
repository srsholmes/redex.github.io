// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css          = require("bs-css/src/Css.js");
var Curry        = require("bs-platform/lib/js/curry.js");
var Theme        = require("../styles/Theme.js");
var React        = require("react");
var Config       = require("../Config.js");
var Helmet       = require("../bindings/gatsby/helmet.js");
var ReasonReact  = require("reason-react/src/ReasonReact.js");
var CommonStyles = require("../styles/CommonStyles.js");

var html = "\n  <h1>Getting Published</h1>\n  <h2>Step 1: Provide good documentation and metadata</h2>\n\n  <h4>Readme</h4>\n  <p>\n    Add a file named <code>README.md</code> to the root of your project. A good\n    readme should at the very least answer the following questions:\n\n  <ul>\n    <li>What is it?\n    <li>What state is it in?\n    <li>How do I install it?\n    <li>How do I use it?\n  </ul>\n\n  <p>\n    Furthermore, providing an example, a change log and explaining how to contribute\n    is a bonus. And if it is a binding, please provide a link to the bound library,\n    as it usually provides more in-depth information and documentation.\n\n  <p>\n    NOTE: The readme and other metadata together must total less than 10k bytes\n    in order to be indexed by the search engine. To avoid going over that limit, \n    please keep the contents of the readme to only the essentials, and put\n    extensive documentation and such in a separate markdown file linked to from\n    the readme. This also has the added benefit of improving search relevance.,\n    making it easier to find your package when searching for relevant terms.\n\n  <h4>Metadata</h4>\n  <p>\n    Fill out the following fields in <code>package.json</code>:\n    <ul>\n      <li><em>description</em> - A short sentence describing the package\n      <li><em>license</em> - The <a href=\"https://spdx.org/licenses/\">SPDX License ID</a> of the package license\n      <li><em>keywords</em> - A list of keywords describing the package\n      <li><em>homepage</em> - The URL of the project homepage\n      <li><em>repository</em> - The URL of the source code repository\n      <li><em>bugs</em> - The URL of the bug tracker\n    </ul>\n\n  <p>\n    Additionally, a number of other factors are taken into account when calculating\n    a score for the package, which primarily is used as part of search result\n    ranking. This data is blatantly stolen from <a href=\"https://npms.io\">npms.io</a>,\n    who are nice enough to detail the factors taken into account\n    <a href=\"https://github.com/npms-io/npms-analyzer/blob/master/docs/architecture.md#evaluators\">here</a>.\n\n\n  <h2>Step 2: Publish to NPM (optional)</h2>\n  <p>\n    Follow the documentation on <a href=\"https://docs.npmjs.com/getting-started/publishing-npm-packages\">NPM</a>\n\n  <p>\n    Publishing to NPM is not a requirement. If your project is incomplete, experimental or otherwise not yet ready for primetime,\n    it might be easier to just depend on the master branch of the source code repository. You can still submit your\n    package to redex, where it'll then be marked as unpublished. This is not only intended as a warning, but also to\n    highlight opportunities to contribute. \n\n  <h2>Step 3: Submit to redex</h2>\n  <p>\n    Submitting published and unpublished packages both follow roughly the same process: Add the package to the appropriate\n    collection in <a href=\"https://github.com/redex/data/blob/source/sources.json\">sources.json</a> and\n    submit a PR. Or just <a href=\"https://github.com/redex/data/issues/new\">submit an issue</a> with the same information.\n\n    <h3>Published package</h3>\n    <p>\n      Add an entry in the published collection with the follwoing format:\n\n<pre><code>\"&lt;npm name&gt;\": {\n  \"category\": \"binding\" | \"library\" | \"tool\" | \"boilerplate\",\n  \"platforms\": [\"browser\" | \"node\" | \"native\" | \"any\"],\n  \"keywords\": [&lt;string&gt;]\n}</code></pre>\n\n    <h3>Unpublished package</h3>\n    <p>\n      Add an entry in the published collection with the follwoing format:\n\n<pre><code>\"&lt;owner&gt;/&lt;repository&gt;\": {\n  \"repository\": \"github:&lt;owner&gt;/&lt;repository&gt;\"\n  \"category\": \"binding\" | \"library\" | \"tool\" | \"boilerplate\",\n  \"platforms\": [\"browser\" | \"node\" | \"native\" | \"any\"],\n  \"keywords\": [&lt;string&gt;]\n}</code></pre>\n\n    Submissions are checked manually (with a little help from a linter script).\n    Any remarks will be noted in the PR. There's also a CI process that checks\n    <code>sources.json</code> for syntax and trivial errors, which will quickly\n    fail if you just made a silly mistake.\n\n  <h2>Frequently Asked Questions</h2>\n  <ul>\n    <li>\n      <h4>What does the \"neglected\" flag mean?</h4>\n      <p>\n        Packages that do not meet the minimum standards for documentation and\n        metadata, according to what's described in Step 1 above, are marked as\n        neglected. These packages might still function perfectly well, which is\n        why they're listed at all, but the quallity of the packaging is also often\n        a good indicator of the quality of its contents. There are therefore two\n        for having this, and to de-emphasize flagged packages:\n        <ol>\n          <li> When there are alternatives, it makes it easier for consumers to\n          make a choice by discarding packages that present themselves poorly and\n          make unnecessarily hard to make an informed choice.\n          <li> It serves as an incentive for package authors to improve the\n          presentation.\n        </ol>\n\n    <li>\n      <h4>Which keywords can I use?</h4>\n      <p>\n        Please try to use only the keywords that are already in use, which are\n        listed on the front page. If you don't think you package fits into any of\n        these categories, you may propose a new keyword in the submission PR. \n\n    <li>\n      <h4>What does the \"any\" platform mean?</h4>\n      <p>\n        The \"any\" platform means the package is platform-independent, because it\n        avoids using platform-specific features. It's improtant to distinguish\n        a package that is platform-independent from a package that, in one way or\n        another, targets all avilable platforms. These are not equivalent since a\n        platform-independent package will automatically support any new platform.\n  </ul>\n";

var style = Curry._1(Css.merge, /* :: */[
      CommonStyles.html,
      /* :: */[
        Css.style(/* :: */[
              Css.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
              /* :: */[
                Css.unsafe("padding", "2em 4em"),
                /* :: */[
                  Css.media("(max-width: 900px)", /* :: */[
                        Css.unsafe("padding", "1em 2em"),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

var component = ReasonReact.statelessComponent("Publish");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate("Publishing Guide")], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("div", {
                      className: style,
                      dangerouslySetInnerHTML: {
                        __html: html
                      }
                    }));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.html      = html;
exports.style     = style;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* style Not a pure module */
