"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[813],{4126:function(n,t,e){e(2791);var r=e(501),a=e(184);t.Z=function(n){var t=n.items.map((function(n){var t=n.id,e=n.title,o=n.name;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),children:e||o})},t)}));return(0,a.jsx)("ol",{children:t})}},1813:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r=e(5861),a=e(885),o=e(7757),i=e.n(o),c=e(2791),u=e(501),s=e(8830),p=e(612),f=e(168),l=e(6444);var d,h,v,m,x=e.p+"static/media/search.f0673fb1a802a37eb1bd17ec9913ce05.svg",b=e(184),g=l.ZP.form(d||(d=(0,f.Z)(["\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  width: 300px;\n"]))),w=l.ZP.input(h||(h=(0,f.Z)(["\n  font-family: inherit;\n  width: 260px;\n  border: 0;\n  border-bottom: 2px solid black;\n  outline: 0;\n  font-size: 1.3rem;\n  color: white;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n\n  &::placeholder {\n    color: transparent;\n  }\n\n  &:placeholder-shown ~ label {\n    font-size: 1.3rem;\n    cursor: text;\n    top: 20px;\n  }\n"]))),Z=l.ZP.label(v||(v=(0,f.Z)(["\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: black;\n"]))),k=l.ZP.button(m||(m=(0,f.Z)(["\n  border: none;\n  border-radius: 5px;\n  background-color: transparent;\n  cursor: pointer;\n"]))),y=function(n){var t=n.onSubmit,e=(0,c.useState)(""),r=(0,a.Z)(e,2),o=r[0],i=r[1];return(0,b.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(o),i("")},children:[(0,b.jsx)(w,{onChange:function(n){var t=n.target.value;i(t)},type:"input",placeholder:"Name",id:"movie",required:!0,autoComplete:"off",value:o}),(0,b.jsx)(Z,{htmlFor:"movie",children:"Movie"}),(0,b.jsx)(k,{type:"submit",children:(0,b.jsx)("img",{src:x,alt:"search-icon",width:"20px",height:"20px"})})]})},j=e(4126),_=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],o=t[1],f=(0,c.useState)(!1),l=(0,a.Z)(f,2),d=l[0],h=l[1],v=(0,u.lr)(),m=(0,a.Z)(v,2),x=m[0],g=m[1],w=x.get("query");return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,s.IR)(w);case 4:t=n.sent,e=t.results,o(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();w&&n()}),[w]),d?(0,b.jsx)(p.Z,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{onSubmit:function(n){g({query:n})}}),(0,b.jsx)(j.Z,{items:e})]})}},8830:function(n,t,e){e.d(t,{IR:function(){return p},t2:function(){return f},tx:function(){return d},z5:function(){return s},zv:function(){return l}});var r=e(5861),a=e(7757),o=e.n(a),i=e(4569),c=e.n(i),u="6fa4e59bc2ff4c4e723c5e57b4e6f0ea",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("\nhttps://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(u,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},612:function(n,t,e){var r,a=e(168),o=e(5243),i=e(6444),c=e(184);t.Z=function(){return(0,c.jsx)(u,{children:(0,c.jsx)(o.BR,{height:"100",width:"100",color:"black"})})};var u=i.ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))}}]);
//# sourceMappingURL=813.6501e7b5.chunk.js.map