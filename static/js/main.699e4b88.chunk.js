(this.webpackJsonpappweather=this.webpackJsonpappweather||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),r=a.n(s),i=a(3),j=a.n(i),u=a(7),l=a(4),o=(a(5),a(0));var d=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Mumbai"),r=Object(l.a)(s,2),i=r[0],d=r[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=c0205dadac67608107be5e9214c85bd3"),e.next=3,fetch(t,{method:"GET"});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),500);return function(){return clearTimeout(e)}}),[i]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{type:"search",onChange:function(e){d(e.target.value)},value:i}),a?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"display",children:[Object(o.jsxs)("h2",{className:"location",children:[Object(o.jsx)("i",{className:"fas fa-street-view"}),Object(o.jsx)("p",{children:i})]}),Object(o.jsxs)("h1",{className:"temp",children:[a.temp,"\xb0Cel"]}),Object(o.jsxs)("h3",{className:"max",children:["Min: ",a.temp_min,"\xb0Cel  | Max: ",a.temp_max,"\xb0Cel"]})]}),Object(o.jsx)("div",{className:"wave -one"}),Object(o.jsx)("div",{className:"wave -two"}),Object(o.jsx)("div",{className:"wave -three"})]}):Object(o.jsx)("p",{className:"para",children:"No data found"})]})})};var h=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"head",children:"Live Temperature"}),Object(o.jsx)(d,{})]})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.querySelector("#root"))},5:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.699e4b88.chunk.js.map