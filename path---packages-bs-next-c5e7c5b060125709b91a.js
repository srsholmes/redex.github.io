webpackJsonp([0xe05d9c9a9bce],{1059:function(e,t){e.exports={data:{package:{id:"bs-next",score:.5194941741452421,name:"bs-next",version:"2.0.0",description:"Reason bindings for Next.js",keywords:["reason-react","bucklescript","next.js"],license:"MIT",updated:"2017-12-31T08:20:59.173Z",stars:11,type:"published",quality:.5116174508460751,popularity:.04580642925999729,maintenance:.9999333961440589,readme:'<h1>bs-next</h1>\n<p><a href="https://reasonml.github.io">Reason</a> bindings for\n<a href="https://github.com/zeit/next.js">Next.js</a> 4.</p>\n<h2>API</h2>\n<p>Bindings are provided for the only two components provided by Next.js:</p>\n<ul>\n<li><a href="https://github.com/zeit/next.js/tree/4.1.4#populating-head"><code>Next.Head</code></a></li>\n<li><a href="https://github.com/zeit/next.js/tree/4.1.4#with-link"><code>Next.Link</code></a></li>\n</ul>\n<h2>Example</h2>\n<pre><code class="language-reason">let component = ReasonReact.statelessComponent("Index");\n\nlet make = (_children) => {\n  ...component,\n  render: (_self) =>\n    &#x3C;div>\n      &#x3C;Next.Head>\n        &#x3C;title> (ReasonReact.stringToElement("My Page Title")) &#x3C;/title>\n      &#x3C;/Next.Head>\n\n      &#x3C;Next.Link href="/about">\n        &#x3C;a> (ReasonReact.stringToElement("About")) &#x3C;/a>\n      &#x3C;/Next.Link>\n    &#x3C;/div>\n}\n</code></pre>\n',homepageUrl:"https://github.com/ulrikstrid/bs-next#readme",repositoryUrl:"https://github.com/ulrikstrid/bs-next",npmUrl:"https://www.npmjs.com/package/bs-next",issuesUrl:"https://github.com/ulrikstrid/bs-next/issues",slug:"packages/bs-next"}},pathContext:{id:"bs-next"}}}});
//# sourceMappingURL=path---packages-bs-next-c5e7c5b060125709b91a.js.map