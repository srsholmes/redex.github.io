webpackJsonp([0xa625cac2f865],{123:function(e,n){"use strict";function t(e){return null===e?1:+(void 0===e)}function o(e){return null===e||void 0===e?0:[e]}function s(e){return void 0===e?0:[e]}function r(e){return null===e?0:[e]}function i(e){return e?e[0]:void 0}function a(e){return e?e[0][1]:void 0}n.is_nil_undef=t,n.null_undefined_to_opt=o,n.undefined_to_opt=s,n.null_to_opt=r,n.option_get=i,n.option_get_unwrap=a},94:function(e,n,t){"use strict";var o=t(85);o.css.insert("html {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}"),o.css.insert("body {\n  margin: 0;\n}"),o.css.insert("article,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}"),o.css.insert("h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}"),o.css.insert("figcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}"),o.css.insert("figure {\n  margin: 1em 40px;\n}"),o.css.insert("hr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}"),o.css.insert("pre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),o.css.insert("a {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}"),o.css.insert("a:active,\na:hover {\n  outline-width: 0;\n}"),o.css.insert("abbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}"),o.css.insert("b,\nstrong {\n  font-weight: inherit;\n}"),o.css.insert("b,\nstrong {\n  font-weight: bolder;\n}"),o.css.insert("code,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),o.css.insert("dfn {\n  font-style: italic;\n}"),o.css.insert("mark {\n  background-color: #ff0;\n  color: #000;\n}"),o.css.insert("small {\n  font-size: 80%;\n}"),o.css.insert("sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}"),o.css.insert("sub {\n  bottom: -0.25em;\n}"),o.css.insert("sup {\n  top: -0.5em;\n}"),o.css.insert("audio,\nvideo {\n  display: inline-block;\n}"),o.css.insert("audio:not([controls]) {\n  display: none;\n  height: 0;\n}"),o.css.insert("img {\n  border-style: none;\n}"),o.css.insert("svg:not(:root) {\n  overflow: hidden;\n}"),o.css.insert("button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}"),o.css.insert("button,\ninput { /* 1 */\n  overflow: visible;\n}"),o.css.insert("button,\nselect { /* 1 */\n  text-transform: none;\n}"),o.css.insert('button,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}'),o.css.insert('button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}'),o.css.insert('button:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}'),o.css.insert("fieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}"),o.css.insert("legend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}"),o.css.insert("progress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}"),o.css.insert("textarea {\n  overflow: auto;\n}"),o.css.insert('[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}'),o.css.insert('[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}'),o.css.insert('[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}'),o.css.insert('[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}'),o.css.insert("::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}"),o.css.insert("details, /* 1 */\nmenu {\n  display: block;\n}"),o.css.insert("summary {\n  display: list-item;\n}"),o.css.insert("canvas {\n  display: inline-block;\n}"),o.css.insert("template {\n  display: none;\n}"),o.css.insert("[hidden] {\n  display: none;\n}")},62:function(e,n,t){"use strict";var o=t(8),s=t(12),r=t(90),i=o.style([o.unsafe("label","width-container"),[o.unsafe("margin","0 auto"),[o.maxWidth(o.px(960)),[o.minWidth(o.px(359)),[o.width(o.pct(100)),0]]]]]),a=o.style([o.selector("& h1",[o.fontSize(o.rem(2.25)),[o.fontWeight(1),[o.lineHeight(o.em(1.1)),[o.marginBottom(o.rem(1.45)),0]]]]),[o.selector("& h2",[o.fontSize(o.rem(1.62671)),[o.fontWeight(1),[o.lineHeight(o.em(1.1)),[o.marginBottom(o.rem(1.45)),0]]]]),[o.selector("& h3",[o.fontSize(o.rem(1.38316)),[o.fontWeight(1),[o.lineHeight(o.em(1.1)),[o.marginBottom(o.rem(1.45)),0]]]]),[o.selector("& h1, & h2, & h3, & h4, & h5",[o.selector("& > a.anchor",[o.marginLeft(o.px(-20)),[o.paddingRight(o.px(4)),[o.selector("& > svg",[o.visibility(1),0]),0]]]),[o.hover([o.selector("& > a.anchor > svg",[o.visibility(0),0]),0]),0]]),[o.selector("& p",[o.marginBottom(o.rem(1.45)),[o.selector("& *:last-child",[o.marginBottom(o.zero),0]),0]]),[o.selector("& b, & strong",[o.fontWeight(1),0]),[o.selector("& i, & em",[o.fontStyle(1),0]),[o.selector("& ol, & ul",[o.margin(o.zero),[o.marginLeft(o.rem(1.45)),[o.marginBottom(o.rem(1.45)),[o.unsafe("listStylePosition","outside"),[o.unsafe("listStyleImage","none"),0]]]]]),[o.selector("& li",[o.marginBottom(o.rem(.725)),[o.selector("& > ol, & > ul",[o.marginLeft(o.rem(1.45)),[o.marginBottom(o.rem(.725)),[o.marginTop(o.rem(.725)),0]]]),[o.selector("& *:last-child",[o.marginBottom(o.zero),0]),[o.selector("& > p",[o.marginBottom(o.rem(.725)),0]),0]]]]),[o.selector("& ol",[o.unsafe("listStyleType","decimal"),[o.selector("& li",[o.paddingLeft(o.zero),0]),0]]),[o.selector("& ul",[o.unsafe("listStyleType","disc"),[o.selector("& li",[o.paddingLeft(o.zero),0]),0]]),[o.selector("& code",[o.unsafe("background","hsla(0, 0%, 0%, 0.04)"),[o.fontFamily("'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace"),[o.fontSize(o.rem(.85)),[o.lineHeight(o.rem(1.45)),[o.unsafe("padding",".2em 0"),0]]]]]),[o.selector("& pre",[o.marginBottom(o.rem(1.45)),[o.fontSize(o.rem(.85)),[o.lineHeight(o.rem(1.42)),[o.unsafe("background","hsla(0, 0%, 0%, 0.04)"),[o.overflow(3),[o.unsafe("wordWrap","normal"),[o.padding(o.rem(1.45)),[o.selector("& code",[o.background(0),[o.lineHeight(o.em(1.42)),0]]),0]]]]]]]]),[o.selector("& a",[o.color(s.Color[5]),[o.textDecorationLine(0),[o.selector("&:hover",[o.textDecorationLine([[0,0]]),0]),0]]]),[o.selector("& img",[o.maxWidth(o.pct(100)),0]),[o.selector("& .redex-codeblock.m-tabbed",[o.display(3),[o.position(1),[o.selector("& > ul",[o.display(3),[o.position(2),[o.flexDirection(2),[o.margin(o.zero),[o.opacity(0),[o.transition([200],[400],0,"opacity"),[o.transform(o.translateX(o.pct(-100))),[o.height(o.pct(100)),[o.selector("& > li",[o.cursor(5),[o.margin(o.zero),[o.display(11),[o.padding2(o.em(.35),o.em(.75)),[o.color(o.white),[o.textTransform(2),[o.fontVariant(1),[o.selector("&:not(.s-selected)",[o.opacity(.5),[o.unsafe("boxShadow","inset 0 -4px 2px -2px rgba(0, 0, 0, 0.1)"),[o.hover([o.opacity(1),0]),0]]]),[o.selector("&.reason",[o.backgroundColor(s.Color[8]),0]),[o.selector("&.ml",[o.backgroundColor(s.Color[9]),0]),0]]]]]]]]]]),0]]]]]]]]]),[o.hover([o.selector("& > ul",[o.opacity(1),0]),0]),[o.selector("& > .codeblock",[o.display(1),[o.flex(1),[o.maxWidth(o.pct(100)),[o.selector("&.s-selected",[o.display(0),0]),[o.selector("& > pre",[o.marginTop(o.zero),[o.selector("&.lang-reason",[o.borderLeft(o.px(2),2,s.Color[8]),0]),[o.selector("&.lang-ml",[o.borderLeft(o.px(2),2,s.Color[9]),0]),0]]]),0]]]]]),0]]]]]),0]]]]]]]]]]]]]]]]),l=r._reset,c=r._global;n._reset=l,n._global=c,n.widthContainer=i,n.html=a},90:function(e,n,t){"use strict";var o=t(8),s=t(12);t(94),o.$$global("*",[o.boxSizing(0),0]),o.$$global("*:focus",[o.outlineStyle(0),0]),o.$$global("body",[o.unsafe("lineHeight","inherit"),[o.color(s.Color[4]),0]]),o.$$global("h1, h2, h3",[o.lineHeight(o.em(1.1)),[o.fontWeight(0),0]]),o.$$global("a",[o.unsafe("color","inherit"),0]),o.$$global("button, input, select",[o.unsafe("background","none"),[o.unsafe("border","none"),[o.unsafe("font","inherit"),0]]]),o.$$global("button::-moz-focus-inner",[o.unsafe("outline","none"),0]);var r=o.$$global("ol, ul",[o.unsafe("listStyle","none"),[o.margin(o.zero),[o.padding(o.zero),0]]]);o.$$global("html",[o.fontSize(o.px(15)),[o.lineHeight(o.em(1.25)),[o.fontFamily("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"),[o.boxSizing(0),[o.overflowY(2),0]]]]]);var i=o.$$global("html, body, #___gatsby",[o.backgroundColor(s.Color[2]),[o.minHeight(o.pct(100)),0]]);n._reset=r,n._global=i},536:function(e,n,t){"use strict";function o(e,n){return s.style([s.unsafe("label","header"),[s.backgroundColor(i.Inverted[0][0]),[s.color(i.Inverted[0][1]),[s.unsafe("padding","2em 4em"),[s.unsafe("backgroundImage","unpublished"===e?i.Inverted[1]:"none"),[s.media("(max-width: 900px)",[s.unsafe("padding","1em 2em"),0]),0]]]]]])}var s=t(8),r=t(6),i=t(12),a=t(62),l=s.style([s.marginBottom(s.em(1.45)),0]),c=s.style([s.display(3),[s.justifyContent(1),[s.alignItems(4),[s.selector("& > *",[s.marginLeft(s.em(1)),0]),0]]]]),m=s.style([s.unsafe("padding","1em 0 0"),[s.display(3),[s.alignItems(4),0]]]),d=s.style([s.display(0),[s.opacity(.75),[s.fontSize(s.em(.85)),[s.unsafe("fontVariant","small-caps"),0]]]]),u=s.style([s.fontSize(s.rem(1.5)),[s.fontWeight(1),[s.textDecorationLine(0),[s.lineHeight(s.em(1.45)),[s.selector("&:hover",[s.textDecorationLine([[0,0]]),0]),0]]]]]),p=s.style(0),f=s.style([s.marginBottom(s.em(.5)),[s.unsafe("textOverflow","ellipsis"),[s.overflow(1),[s.opacity(.75),0]]]]),g=s.style([s.selector("& span",[s.fontSize(s.em(.85)),[s.backgroundColor(i.Inverted[0][2]),[s.unsafe("padding","0 1ex"),[s.opacity(1),[s.selector("&:hover",[s.backgroundColor(i.Inverted[0][3]),[s.cursor(5),0]]),0]]]]]),0]),b=s.style([s.opacity(.25),0]),h=s.style([s.textAlign(2),0]),y=s.style([s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),0]]),v=s.style([s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),[s.border(s.px(1),2,i.Inverted[0][1]),[s.unsafe("padding","0 1ex"),0]]]]),x=s.style([s.color(i.Color[7]),[s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),[s.fontWeight(1),[s.backgroundColor(i.Inverted[0][1]),[s.unsafe("padding","0 1ex"),[s.unsafe("borderRadius","1.4ex"),0]]]]]]]),k=s.style([s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),0]]),_=s.style([s.marginLeft(s.em(.25)),[s.transform(s.translateY(s.px(-1))),[s.opacity(.5),0]]]),w=s.style([s.label("links"),[s.marginTop(s.em(3)),[s.selector("& > a",[s.display(11),[s.textDecorationLine(0),[s.marginRight(s.em(2)),[s.unsafe("fontVariant","small-caps"),[s.media("(max-width: 450px)",[s.marginRight(s.em(1)),0]),[s.selector("&:hover",[s.textDecorationLine([[0,0]]),0]),[s.selector("&:not([href])",[s.textDecorationLine(0),[s.opacity(.25),0]]),0]]]]]]]),0]]]),z=r._1(s.merge,[a.html,[s.style([s.backgroundColor(i.Panel[0][0]),[s.unsafe("padding","2em 4em"),[s.media("(max-width: 900px)",[s.unsafe("padding","1em 2em"),0]),0]]]),0]]);n.root=l,n.header=o,n.props=c,n.title=m,n.owner=d,n.name=u,n.fields=p,n.description=f,n.tags=g,n.tagsIcon=b,n.right=h,n.updated=y,n.license=v,n.nolicense=x,n.stars=k,n.starIcon=_,n.links=w,n.readme=z},539:function(e,n,t){"use strict";function o(e,n){var t=x.slice();return t[4]=function(){return document.querySelectorAll(".redex-codeblock.m-tabbed").forEach(function(e){e.querySelector("li.reason").addEventListener("click",function(){e.querySelectorAll(".reason").forEach(function(e){return e.classList.add("s-selected")}),e.querySelectorAll(".ml").forEach(function(e){return e.classList.remove("s-selected")})}),e.querySelector("li.ml").addEventListener("click",function(){e.querySelectorAll(".reason").forEach(function(e){return e.classList.remove("s-selected")}),e.querySelectorAll(".ml").forEach(function(e){return e.classList.add("s-selected")})})}),0},t[9]=function(){var n=e.package,t=n.license,o={},x=y.null_undefined_to_opt(n.homepageUrl);x&&(o.href=x[0]);var k={},_=y.null_undefined_to_opt(n.repositoryUrl);_&&(k.href=_[0]);var w={},z=y.null_undefined_to_opt(n.npmUrl);z&&(w.href=z[0]);var S={},C=y.null_undefined_to_opt(n.issuesUrl);C&&(S.href=C[0]);var E={},L=y.null_undefined_to_opt(n.docsUrl);return L&&(E.href=L[0]),m.createElement("div",{className:v.root},h.element(0,0,u.make([d.titleTemplate(n.name)],0,0,0,[])),m.createElement("header",{className:v.header(n.type,n.flags)},m.createElement("div",{className:v.props},h.element(0,0,a._2(p.Control[3][1],y.null_undefined_to_opt(n.stars),function(e){return m.createElement("div",{className:v.stars},p.Helpers[0](e),h.element(0,0,r.Star[0]([v.starIcon],[])))})),h.element(0,0,c.make(n,[])),null==t?m.createElement("div",{className:v.nolicense},p.Helpers[0]("No license")):m.createElement("div",{className:v.license},p.Helpers[0](t)),m.createElement("div",{className:v.updated},h.element(0,0,f.make(n.updated,[])))),m.createElement("div",{className:v.title},h.element(0,0,i.make(n.slug,[v.name],0,[p.Helpers[0](n.name)])),h.element(0,0,g.make(n.version,+("published"===n.type),[])),h.element(0,0,b.make(n.platforms,[]))),m.createElement("div",{className:v.fields},m.createElement("div",{className:v.description},h.element(0,0,l.make(n,[1],[])),p.Helpers[0](n.description)),m.createElement("div",{className:v.tags},h.element(0,0,r.Tags[0]([v.tagsIcon],[])),h.element(0,0,s.Category[2](n.category,[])),h.element(0,0,a._3(p.Control[0][1],n.keywords,0,function(e){return h.element([e],0,s.Keyword[1](e,[]))})))),m.createElement("div",{className:v.links},m.createElement("a",o,p.Helpers[0]("homepage")),m.createElement("a",k,p.Helpers[0]("repository")),m.createElement("a",w,p.Helpers[0]("npm")),m.createElement("a",S,p.Helpers[0]("issues")),m.createElement("a",E,p.Helpers[0]("documentation")))),m.createElement("div",{className:v.readme,dangerouslySetInnerHTML:{__html:n.readme}}))},t}n.__esModule=!0;var s=t(461),r=t(55),i=t(61),a=t(6),l=t(216),c=t(218),m=t(1),d=t(81),u=t(82),p=t(15),f=t(143),g=t(462),b=t(217),h=t(7),y=t(123),v=t(536);t(621);var x=h.statelessComponent("Package"),k=h.wrapReasonForJs(x,function(e){return o(e.data,[])}),_=(n.query="** extracted graphql fragment **",0),w=0;n.Control=_,n.Styles=w,n.component=x,n.make=o,n.$$default=k,n.default=k,n.__esModule=!0},621:function(e,n){}});
//# sourceMappingURL=component---src-templates-package-js-9bb9aeb769aa239589c0.js.map