// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var Tooltip = require("./Tooltip.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var VersionStyles = require("./VersionStyles.js");

var component = ReasonReact.statelessComponent("Version");

function make(version, isPublished, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "version " + VersionStyles.root(isPublished)
                }, isPublished ? Vrroom.text(version) : ReasonReact.element(/* None */0, /* None */0, Tooltip.make(React.createElement("div", {
                                className: VersionStyles.tooltip
                              }, Vrroom.text("Unpublished")), Vrroom.text(version))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* component Not a pure module */
