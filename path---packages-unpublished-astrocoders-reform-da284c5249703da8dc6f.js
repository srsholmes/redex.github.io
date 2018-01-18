webpackJsonp([0xeec0bac98087],{1118:function(s,a){s.exports={data:{package:{id:"unpublished/Astrocoders/reform",score:0,name:"Astrocoders/reform",version:"2.0.6",description:"Reasonably making forms sound good again",keywords:["form","react","bucklescript"],license:"MIT",updated:"2018-01-16T07:17:12.520Z",stars:25,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1 id="reformre"><a href="#reformre" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReForm.re</h1>\n<p><a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/Astrocoders/reform.svg" alt="Greenkeeper badge"></a>\n<a href="https://travis-ci.org/Astrocoders/reform"><img src="https://travis-ci.org/Astrocoders/reform.svg?branch=master" alt="Build Status"></a></p>\n<p>Reasonably making forms sound good again</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SignInFormParams</span> = </span>{\n  <span class="hljs-keyword">type</span> state = {\n    password: string,\n    email: string\n  };\n  <span class="hljs-keyword">type</span> fields = [ | `password | `email ];\n  <span class="hljs-keyword">let</span> handleChange = (action, state) =&gt;\n    <span class="hljs-keyword">switch</span> action {\n    | (`password, value) =&gt; {...state, password: value}\n    | (`email, value) =&gt; {...state, email: value}\n    };\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SignInForm</span> = <span class="hljs-title">ReForm</span>.<span class="hljs-title">Create</span>(<span class="hljs-title">SignInFormParams</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">component</span> = <span class="hljs-title">ReasonReact</span>.<span class="hljs-title">statelessComponent</span>("<span class="hljs-title">SignIn</span>");\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (~<span class="hljs-title">signInMutation</span>, <span class="hljs-title">_children</span>) =&gt; </span>{\n  ...component,\n  render: (<span class="hljs-number">_</span>) =&gt; {\n    <span class="hljs-keyword">let</span> validate: <span class="hljs-type">SignInFormParams</span>.state =&gt; option(string) = (values) =&gt; <span class="hljs-keyword">switch</span> values {\n      | { password: <span class="hljs-string">"12345"</span> } =&gt; <span class="hljs-type">Some</span>(<span class="hljs-string">"Sorry, can\'t do"</span>)\n      | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">None</span>\n    };\n\n    &lt;<span class="hljs-type">SignInForm</span>\n      initialState={password: <span class="hljs-string">""</span>, email: <span class="hljs-string">""</span>}\n      onSubmit=((values, ~setError, ~setSubmitting) =&gt; whatever(values, ~setError, ~setSubmitting))\n      validate\n    &gt;\n      ...(\n        (~form, ~handleChange, ~handleSubmit) =&gt;\n          &lt;<span class="hljs-type">FormWrapper</span>&gt;\n            &lt;<span class="hljs-type">ErrorWarn</span> error=form.error/&gt;\n            &lt;<span class="hljs-type">FieldsWrapper</span>&gt;\n              &lt;<span class="hljs-type">FormField</span>\n                fieldType=<span class="hljs-type">FormField</span>.<span class="hljs-type">TextField</span>\n                value=form.values.email\n                placeholder=<span class="hljs-string">"Email"</span>\n                style=fieldsStyle\n                placeholderTextColor=<span class="hljs-type">AppTheme</span>.<span class="hljs-type">Colors</span>.blackLight\n                <span class="hljs-comment">/* handleChange signature is (fields, string) =&gt; unit, so you can use right away with RN and React Web.\n                ** Just make an abstraction above to not give it an event and just the value\n                */</span>\n                onChangeText=handleChange(`email)\n              /&gt;\n              &lt;<span class="hljs-type">FormField</span>\n                fieldType=<span class="hljs-type">FormField</span>.<span class="hljs-type">TextField</span>\n                placeholder=<span class="hljs-string">"Password"</span>\n                onChangeText=handleChange(`password)\n                value=form.values.password\n                style=fieldsStyle\n                placeholderTextColor=<span class="hljs-type">AppTheme</span>.<span class="hljs-type">Colors</span>.blackLight\n              /&gt;\n            &lt;/<span class="hljs-type">FieldsWrapper</span>&gt;\n            &lt;<span class="hljs-type">RaisedButton</span> text=<span class="hljs-string">"Sign in"</span> onPress=handleSubmit/&gt;\n            &lt;/<span class="hljs-type">FormWrapper</span>&gt;\n      )\n    &lt;/<span class="hljs-type">SignInForm</span>&gt;\n  }\n}</code></pre>\n      </div>\n',homepageUrl:"https://github.com/Astrocoders/reform#readme",repositoryUrl:"https://github.com/Astrocoders/reform",npmUrl:null,issuesUrl:"https://github.com/Astrocoders/reform/issues",slug:"packages/unpublished/Astrocoders/reform"}},pathContext:{id:"unpublished/Astrocoders/reform"}}}});
//# sourceMappingURL=path---packages-unpublished-astrocoders-reform-da284c5249703da8dc6f.js.map