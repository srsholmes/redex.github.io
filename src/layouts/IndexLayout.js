// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Link = require("../bindings/gatsby/link.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Footer = require("../components/Footer.js");
var Helmet = require("../bindings/gatsby/helmet.js");
var SearchBox = require("../components/SearchBox.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");
var CommonStyles = require("../styles/CommonStyles.js");
var IndexLayoutStyles = require("./IndexLayoutStyles.js");

var component = ReasonReact.statelessComponent("PageLayout");

function make(children, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: TypedGlamor.toString(IndexLayoutStyles.root)
                }, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* None */0, /* None */0, /* Some */["redex"], /* None */0, /* array */[
                          React.createElement("html", {
                                lang: "en"
                              }),
                          React.createElement("meta", {
                                content: "Package index for the ReasonML/BuckleScript ecosystem",
                                name: "description"
                              })
                        ])), React.createElement("div", {
                      className: TypedGlamor.toString(IndexLayoutStyles.header)
                    }, React.createElement("div", {
                          className: TypedGlamor.toString(CommonStyles.widthContainer)
                        }, ReasonReact.element(/* None */0, /* None */0, SearchBox.make(/* None */0, /* array */[])), ReasonReact.element(/* None */0, /* None */0, Link.make("/", /* Some */[TypedGlamor.toString(IndexLayoutStyles.title)], /* None */0, /* array */[React.createElement("svg", {
                                        className: TypedGlamor.toString(IndexLayoutStyles.logo)
                                      }, React.createElement("use", {
                                            href: "/logo.svg#logo",
                                            xlinkHref: "/logo.svg#logo",
                                            xmlnsXlink: "http://www.w3.org/1999/xlink"
                                          }))])))), React.createElement("div", {
                      className: TypedGlamor.toString(CommonStyles.widthContainer)
                    }, Curry._1(children, /* () */0)), ReasonReact.element(/* None */0, /* None */0, Footer.make(/* Index */-784200974, /* array */[])));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children, /* array */[]);
      }));

var Styles = 0;

var $$__esModule = /* true */1;

exports.Styles = Styles;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.$$__esModule = $$__esModule;
/* component Not a pure module */
