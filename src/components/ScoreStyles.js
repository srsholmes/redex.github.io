// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");

var root = Css.style(/* :: */[
      Css.position(/* Relative */1),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.unsafe("cursor", "help"),
            /* :: */[
              Css.selector("& > .popover", /* :: */[
                    Css.display(/* Block */0),
                    /* :: */[
                      Css.position(/* Absolute */2),
                      /* :: */[
                        Css.bottom(Css.pct(100)),
                        /* :: */[
                          Css.zIndex(10),
                          /* :: */[
                            Css.backgroundColor(Css.white),
                            /* :: */[
                              Css.boxShadow(Css.shadow(/* Some */[1], /* Some */[1], /* None */0, /* None */0, Css.rgba(0, 0, 0, 0.1))),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]),
              /* :: */[
                Css.selector("&:hover > .popover", /* :: */[
                      Css.display(/* Block */0),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var icon = Css.style(/* :: */[
      Css.marginLeft(Css.em(0.25)),
      /* :: */[
        Css.transform(Css.translateY(Css.px(-1))),
        /* [] */0
      ]
    ]);

var tooltip = Css.style(/* :: */[
      Css.backgroundColor(Css.white),
      /* :: */[
        Css.boxShadow(Css.shadow(/* Some */[1], /* Some */[1], /* Some */[3], /* Some */[1], Css.rgba(0, 0, 0, 0.1))),
        /* :: */[
          Css.unsafe("padding", ".5em 1em"),
          /* :: */[
            Css.selector("& div", /* :: */[
                  Css.unsafe("whiteSpace", "nowrap"),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var factor = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.justifyContent(/* SpaceBetween */5),
        /* :: */[
          Css.selector("& > span:last-child", /* :: */[
                Css.marginLeft(Css.em(1)),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

exports.root = root;
exports.icon = icon;
exports.tooltip = tooltip;
exports.factor = factor;
/* root Not a pure module */
