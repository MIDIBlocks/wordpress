(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={1:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{2:"6fb70aa4",3:"8595b31b",4:"d4d7e332",5:"995a9dd5"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;a.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);r("5319");var n=r("c973"),o=r.n(n),a=(r("573e"),r("7d6e"),r("985d"),r("0047"),r("5a21"),r("bd61"),r("2b0e")),i=r("1f91"),s=r("42d2"),u=r("b05d");a["a"].use(u["a"],{config:{dark:!0},lang:i["a"],iconSet:s["a"]});var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},c=[],p={name:"App",mounted(){window.MIDIBlocks=this}},d=p,f=r("2877"),v=Object(f["a"])(d,l,c,!1,null,null,null),h=v.exports,b=r("2f62"),m=r("2ef0");a["a"].use(b["a"]);var y=function(){const e=new b["a"].Store({state:{workspace:{code:"",interpreter:null,isRunning:!0},devices:{inputs:{},outputs:{}}},mutations:{set(e,t){Object(m["set"])(e,t[0],t[1])}}});return e},w=r("8c4f");r("e6cf");const g=[{path:"/",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"8b24"))},{path:"/code",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"622b"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"e51e"))}];var O=g;a["a"].use(w["a"]);var P=function(){const e=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"hash",base:""});return e},j=function(){return x.apply(this,arguments)};function x(){return x=o()((function*(){const e="function"===typeof y?yield y({Vue:a["a"]}):y,t="function"===typeof P?yield P({Vue:a["a"],store:e}):P;e.$router=t;const r={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:r,store:e,router:t}})),x.apply(this,arguments)}var k=r("9224");a["a"].config.ignoredElements=["field","block","category","xml","mutation","value","sep"],a["a"].prototype.$version=k.version;var S=r("c62b"),q=r.n(S);a["a"].prototype.$m=q.a;const _="";function M(){return A.apply(this,arguments)}function A(){return A=o()((function*(){const{app:e,store:t,router:r}=yield j();let n=!1;const o=e=>{n=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[void 0,void 0];for(let l=0;!1===n&&l<s.length;l++)if("function"===typeof s[l])try{yield s[l]({app:e,router:r,store:t,Vue:a["a"],ssrContext:null,redirect:o,urlPath:i,publicPath:_})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==n&&new a["a"](e)})),A.apply(this,arguments)}M()},"5a21":function(e,t,r){},9224:function(e){e.exports=JSON.parse('{"name":"midiblocks","version":"0.0.2","description":"A programmable MIDI mapper for the web","productName":"MIDIBlocks","author":"Oz <midiblocks@gmail.com>","private":true,"scripts":{"start":"quasar dev","build":"quasar build","test":"echo \\"No test specified\\" && exit 0"},"dependencies":{"@quasar/extras":"^1.0.0","blockly":"^3.20200625.2","core-js":"^3.6.5","quasar":"^1.0.0","store":"^2.0.12","sweetalert2":"^9.17.1","vue-monaco":"^1.2.1","webmidi":"^2.5.1"},"devDependencies":{"@quasar/app":"^2.0.0","copy-webpack-plugin":"^6.0.3","monaco-editor-webpack-plugin":"^1.9.0","pug":"^3.0.0","pug-plain-loader":"^1.0.0","raw-loader":"^4.0.1"},"browserslist":["last 10 Chrome versions","last 10 Firefox versions","last 4 Edge versions","last 7 Safari versions","last 8 Android versions","last 8 ChromeAndroid versions","last 8 FirefoxAndroid versions","last 10 iOS versions","last 5 Opera versions"],"engines":{"node":">= 10.18.1","npm":">= 6.13.4","yarn":">= 1.21.1"}}')},bd61:function(e,t,r){}});