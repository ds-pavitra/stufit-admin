(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[34],{130:function(e,t,c){"use strict";c(6);var a=c(136),s=c(137),j=c(124),n=c(121),l=c(8),i=c(19);const r=e=>"/".concat(e)===l.b?Object(i.jsx)(n.a,{id:"menu.home"}):Object(i.jsx)(n.a,{id:"menu.".concat(e)}),m=(e,t)=>e.split(t)[0]+t,b=e=>{let{match:t}=e;const c=t.path.substr(1);let n=c.split("/");return n[n.length-1].indexOf(":")>-1&&(n=n.filter((e=>-1===e.indexOf(":")))),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:n.map(((e,t)=>Object(i.jsx)(s.a,{active:n.length===t+1,children:n.length!==t+1?Object(i.jsx)(j.b,{to:"/".concat(m(c,e)),children:r(e)}):r(e)},t)))})})};t.a=e=>{let{heading:t,match:c}=e;return Object(i.jsxs)(i.Fragment,{children:[t&&Object(i.jsx)("h1",{children:Object(i.jsx)(n.a,{id:t})}),Object(i.jsx)(b,{match:c})]})}},961:function(e,t,c){"use strict";c.r(t);c(6);var a=c(254),s=c(132),j=c(134),n=c(141),l=c(1028),i=c(962),r=c(121),m=c(128),b=c(130),d=c(19);const x=Object(i.withScriptjs)(Object(i.withGoogleMap)((()=>Object(d.jsx)(i.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644},children:Object(d.jsx)(i.Marker,{position:{lat:-34.397,lng:150.644}})}))));t.default=e=>{let{match:t}=e;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.a,{children:Object(d.jsxs)(m.a,{xxs:"12",children:[Object(d.jsx)(b.a,{heading:"menu.maps",match:t}),Object(d.jsx)(m.b,{className:"mb-5"})]})}),Object(d.jsx)(a.a,{children:Object(d.jsxs)(m.a,{xxs:"12",children:[Object(d.jsx)(s.a,{className:"mb-4",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(n.a,{children:Object(d.jsx)(r.a,{id:"maps.google"})}),Object(d.jsx)(x,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(d.jsx)("div",{className:"map-item"}),containerElement:Object(d.jsx)("div",{className:"map-item"}),mapElement:Object(d.jsx)("div",{className:"map-item"})})]})}),Object(d.jsx)(s.a,{className:"mb-4",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(n.a,{children:Object(d.jsx)(r.a,{id:"maps.yandex"})}),Object(d.jsx)("div",{className:"map-item",children:Object(d.jsx)(l.c,{query:{lang:"en-US"},children:Object(d.jsx)(l.a,{className:"map-item",defaultState:{center:[-34.397,150.644],zoom:9},children:Object(d.jsx)(l.b,{defaultGeometry:[-34.397,150.644]})})})})]})})]})})]})}}}]);