webpackJsonp([0xfda62b553f6f],{1118:function(e,n){e.exports={data:{package:{id:"unpublished/glennsl/refetch",score:0,name:"glennsl/refetch",version:"0.1.0",description:"A strongly typed and immutable API built on top of the `fetch` standard ",keywords:["http","fetch","bucklescript","ajax"],license:"MIT",updated:"2018-01-14T05:56:30.377Z",stars:12,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>re:fetch</h1>\n<p>Refetch is a strongly typed and immutable API built on top of the <code>fetch</code> standard. It is also incomplete, highly experimental and prone to change.</p>\n<p><a href=""><img src="https://img.shields.io/david/glennsl/refetch.svg" alt="Dependencies"></a>\n<a href="https://github.com/glennsl/refetch/issues"><img src="https://img.shields.io/github/issues/glennsl/refetch.svg" alt="Issues"></a>\n<a href=""><img src="https://img.shields.io/github/last-commit/glennsl/refetch.svg" alt="Last Commit"></a></p>\n<h2>Installation</h2>\n<p>Run <code>npm install --save glennsl/refetch</code> and add <code>refetch</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2>Example</h2>\n<pre><code class="language-reason">/* Simple GET */\nResync.(Refetch.(\n  get("http://httpbin.org/get")\n  |> Future.flatMap(\n     fun | Response.Ok(_, response) => Response.text(response)\n         | _ => "oops!" |> Future.from)\n  |> Future.whenResolved(Js.log)\n));\n\n/* builder functions */\nResync.(Refetch.(\n  request(`POST, "https://httpbin.org/post")\n    |> Request.header(`ContentType("application/x-www-form-urlencoded; charset=UTF-8"))\n    |> Request.payload(`String("title=foobar&#x26;body=bar&#x26;userId=1"))\n  |> fetch\n    |> Future.flatMap(\n        fun | Response.Ok(_, response) => Response.text(response)\n            | Response.Error({ reason }, _) => Future.from(reason))\n    |> Future.whenResolved(Js.log)\n));\n\n/* labeled arguments */\nResync.(Refetch.(\n  request(`POST, "https://httpbin.org/post",\n    ~headers=[`ContentType("application/x-www-form-urlencoded; charset=UTF-8")],\n    ~body=`String("title=foobar&#x26;body=bar&#x26;userId=1"))\n  |> fetch\n    |> Future.flatMap(\n        fun | Response.Ok(_, response) => Response.text(response)\n            | Response.Error({ reason }, _) => Future.from(reason))\n    |> Future.whenResolved(Js.log)\n));\n</code></pre>\n',homepageUrl:"https://github.com/glennsl/refetch#readme",repositoryUrl:"https://github.com/glennsl/refetch",npmUrl:null,issuesUrl:"https://github.com/glennsl/refetch/issues",slug:"packages/unpublished/glennsl/refetch"}},pathContext:{id:"unpublished/glennsl/refetch"}}}});
//# sourceMappingURL=path---packages-unpublished-glennsl-refetch-829e32e23b49cadc22dd.js.map