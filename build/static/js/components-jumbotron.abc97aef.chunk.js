(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[33],{130:function(e,a,t){"use strict";t(6);var s=t(136),c=t(137),n=t(124),l=t(121),o=t(8),r=t(19);const i=e=>"/".concat(e)===o.b?Object(r.jsx)(l.a,{id:"menu.home"}):Object(r.jsx)(l.a,{id:"menu.".concat(e)}),b=(e,a)=>e.split(a)[0]+a,d=e=>{let{match:a}=e;const t=a.path.substr(1);let l=t.split("/");return l[l.length-1].indexOf(":")>-1&&(l=l.filter((e=>-1===e.indexOf(":")))),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:l.map(((e,a)=>Object(r.jsx)(c.a,{active:l.length===a+1,children:l.length!==a+1?Object(r.jsx)(n.b,{to:"/".concat(b(t,e)),children:i(e)}):i(e)},a)))})})};a.a=e=>{let{heading:a,match:t}=e;return Object(r.jsxs)(r.Fragment,{children:[a&&Object(r.jsx)("h1",{children:Object(r.jsx)(l.a,{id:a})}),Object(r.jsx)(d,{match:t})]})}},132:function(e,a,t){"use strict";var s=t(11),c=t(15),n=t(6),l=t.n(n),o=t(94),r=t.n(o),i=t(115),b=t.n(i),d=t(116),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],j={tag:d.tagPropType,inverse:r.a.bool,color:r.a.string,body:r.a.bool,outline:r.a.bool,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.color,o=e.body,r=e.inverse,i=e.outline,j=e.tag,m=e.innerRef,p=Object(c.a)(e,u),g=Object(d.mapToCssModules)(b()(a,"card",!!r&&"text-white",!!o&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return l.a.createElement(j,Object(s.a)({},p,{className:g,ref:m}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},134:function(e,a,t){"use strict";var s=t(11),c=t(15),n=t(6),l=t.n(n),o=t(94),r=t.n(o),i=t(115),b=t.n(i),d=t(116),u=["className","cssModule","innerRef","tag"],j={tag:d.tagPropType,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,o=e.tag,r=Object(c.a)(e,u),i=Object(d.mapToCssModules)(b()(a,"card-body"),t);return l.a.createElement(o,Object(s.a)({},r,{className:i,ref:n}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},136:function(e,a,t){"use strict";var s=t(11),c=t(15),n=t(6),l=t.n(n),o=t(94),r=t.n(o),i=t(115),b=t.n(i),d=t(116),u=["className","listClassName","cssModule","children","tag","listTag","aria-label"],j={tag:d.tagPropType,listTag:d.tagPropType,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},m=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,o=e.children,r=e.tag,i=e.listTag,j=e["aria-label"],m=Object(c.a)(e,u),p=Object(d.mapToCssModules)(b()(a),n),g=Object(d.mapToCssModules)(b()("breadcrumb",t),n);return l.a.createElement(r,Object(s.a)({},m,{className:p,"aria-label":j}),l.a.createElement(i,{className:g},o))};m.propTypes=j,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},137:function(e,a,t){"use strict";var s=t(11),c=t(15),n=t(6),l=t.n(n),o=t(94),r=t.n(o),i=t(115),b=t.n(i),d=t(116),u=["className","cssModule","active","tag"],j={tag:d.tagPropType,active:r.a.bool,className:r.a.string,cssModule:r.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.active,o=e.tag,r=Object(c.a)(e,u),i=Object(d.mapToCssModules)(b()(a,!!n&&"active","breadcrumb-item"),t);return l.a.createElement(o,Object(s.a)({},r,{className:i,"aria-current":n?"page":void 0}))};m.propTypes=j,m.defaultProps={tag:"li"},a.a=m},150:function(e,a,t){"use strict";var s=t(11),c=t(15),n=t(119),l=t(129),o=t(6),r=t.n(o),i=t(94),b=t.n(i),d=t(115),u=t.n(d),j=t(116),m=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],p={active:b.a.bool,"aria-label":b.a.string,block:b.a.bool,color:b.a.string,disabled:b.a.bool,outline:b.a.bool,tag:j.tagPropType,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),onClick:b.a.func,size:b.a.string,children:b.a.node,className:b.a.string,cssModule:b.a.object,close:b.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(n.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,l=e.className,o=e.close,i=e.cssModule,b=e.color,d=e.outline,p=e.size,g=e.tag,O=e.innerRef,f=Object(c.a)(e,m);o&&"undefined"===typeof f.children&&(f.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+b,v=Object(j.mapToCssModules)(u()(l,{close:o},o||"btn",o||h,!!p&&"btn-"+p,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);f.href&&"button"===g&&(g="a");var x=o?"Close":null;return r.a.createElement(g,Object(s.a)({type:"button"===g&&f.onClick?"button":void 0},f,{className:v,ref:O,onClick:this.onClick,"aria-label":t||x}))},a}(r.a.Component);g.propTypes=p,g.defaultProps={color:"secondary",tag:"button"},a.a=g},617:function(e,a,t){"use strict";var s=t(11),c=t(15),n=t(6),l=t.n(n),o=t(94),r=t.n(o),i=t(115),b=t.n(i),d=t(116),u=["className","cssModule","tag","fluid"],j={tag:d.tagPropType,fluid:r.a.bool,className:r.a.string,cssModule:r.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,o=e.fluid,r=Object(c.a)(e,u),i=Object(d.mapToCssModules)(b()(a,"jumbotron",!!o&&"jumbotron-fluid"),t);return l.a.createElement(n,Object(s.a)({},r,{className:i}))};m.propTypes=j,m.defaultProps={tag:"div"},a.a=m},960:function(e,a,t){"use strict";t.r(a);t(6);var s=t(254),c=t(132),n=t(134),l=t(617),o=t(150),r=t(121),i=t(128),b=t(130),d=t(19);a.default=e=>{let{match:a}=e;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{children:Object(d.jsxs)(i.a,{xxs:"12",children:[Object(d.jsx)(b.a,{heading:"menu.jumbotron",match:a}),Object(d.jsx)(i.b,{className:"mb-5"})]})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(i.a,{xxs:"12",className:"mb-4",children:Object(d.jsx)(c.a,{children:Object(d.jsx)(n.a,{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)("h1",{className:"display-4",children:Object(d.jsx)(r.a,{id:"jumbotron.hello-world"})}),Object(d.jsx)("p",{className:"lead",children:Object(d.jsx)(r.a,{id:"jumbotron.lead"})}),Object(d.jsx)("hr",{className:"my-4"}),Object(d.jsx)("p",{children:Object(d.jsx)(r.a,{id:"jumbotron.lead-detail"})}),Object(d.jsx)("p",{className:"lead mb-0",children:Object(d.jsx)(o.a,{color:"primary",size:"lg",children:Object(d.jsx)(r.a,{id:"jumbotron.learn-more"})})})]})})})})})]})}}}]);