// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Theme = require("../styles/Theme.js");

var root = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.flexDirection(/* Column */2),
        /* :: */[
          Css.minHeight(Css.vh(100)),
          /* :: */[
            Css.selector("& p", /* :: */[
                  Css.marginBottom(Css.rem(1.45)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var header = Css.style(/* :: */[
      Css.margin(Css.rem(1.45)),
      /* :: */[
        Css.selector("& > div", /* :: */[
              Css.display(/* Flex */3),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var title = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.alignItems(/* Center */2),
        /* :: */[
          Css.color(Theme.Color[/* primary */0]),
          /* :: */[
            Css.margin(Css.zero),
            /* :: */[
              Css.unsafe("fontVariant", "small-caps"),
              /* :: */[
                Css.fontSize(Css.em(1.5)),
                /* :: */[
                  Css.lineHeight(Css.em(1.1)),
                  /* :: */[
                    Css.selector("&:hover > svg", /* :: */[
                          Css.transform(Css.rotateZ(Css.deg(15))),
                          /* :: */[
                            Css.cursor(/* Pointer */5),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var logo = Css.style(/* :: */[
      Css.height(Css.em(1.5)),
      /* :: */[
        Css.width(Css.em(1.5)),
        /* :: */[
          Css.unsafe("fill", Theme.Color[/* primary */0]),
          /* :: */[
            Css.unsafe("margin", "0 1em"),
            /* :: */[
              Css.transition(/* None */0, /* None */0, /* None */0, "transform 100ms ease-in-out"),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

exports.root = root;
exports.header = header;
exports.title = title;
exports.logo = logo;
/* root Not a pure module */
