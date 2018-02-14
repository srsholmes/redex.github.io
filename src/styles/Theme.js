// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");

var primary = Css.hex("dd4c39");

var darkBackground = Css.hex("ececec");

var text = Css.hex("444");

var subtleBorder = Css.hex("eee");

var bad = Css.rgba(255, 0, 0, 0.75);

var reason = Css.hex("DD4C39");

var ocaml = Css.hex("C87A27");

var javascript = Css.hex("F7E018");

var Color = /* module */[
  /* primary */primary,
  /* darkPrimary */"hsl(6.9, 65%, 50%)",
  /* background */"whiteSmoke",
  /* darkBackground */darkBackground,
  /* text */text,
  /* link */primary,
  /* subtleBorder */subtleBorder,
  /* bad */bad,
  /* reason */reason,
  /* ocaml */ocaml,
  /* javascript */javascript
];

var Color$1 = /* module */[/* background */"white"];

var Panel = /* module */[/* Color */Color$1];

var block = Css.hex("rgba(255, 255, 255, .1)");

var highlightedBlock = Css.hex("rgba(255, 255, 255, .2)");

var Color$2 = /* module */[
  /* background */primary,
  /* text */"white",
  /* block */block,
  /* highlightedBlock */highlightedBlock
];

var Inverted = /* module */[/* Color */Color$2];

var Shadow = /* module */[
  /* overlay */"1ex 1ex 1em 0 rgba(0, 0, 0, .1)",
  /* panel */"1px 1px 0 1px rgba(0, 0, 0, .05)"
];

exports.Color = Color;
exports.Panel = Panel;
exports.Inverted = Inverted;
exports.Shadow = Shadow;
/* primary Not a pure module */
