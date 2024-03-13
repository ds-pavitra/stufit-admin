(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[74],{1075:function(e,n,t){"use strict";t.r(n);var s=t(6),a=t(254),r=t(132),o=t(141),u=t(641),c=t(642),i=t(150),l=t(124),d=t(226),m=t(36),b=t(128),f=t(121),h=t(151),p=t(393),j=t(19);const g=e=>{let n;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(n="Invalid email address"):n="Please enter your email address",n};n.default=Object(m.b)((e=>{let{authUser:n}=e;const{forgotUserMail:t,loading:s,error:a}=n;return{forgotUserMail:t,loading:s,error:a}}),{forgotPasswordAction:h.l})((e=>{let{history:n,forgotUserMail:t,loading:m,error:h,forgotPasswordAction:O}=e;const[v]=Object(s.useState)("");Object(s.useEffect)((()=>{h?p.b.warning(h,"Forgot Password Error",3e3,null,null,""):m||"success"!==t||p.b.success("Please check your email.","Forgot Password Success",3e3,null,null,"")}),[h,t,m]);const y={email:v};return Object(j.jsx)(a.a,{className:"h-100",children:Object(j.jsx)(b.a,{xxs:"8",md:"6",className:"mx-auto my-auto",children:Object(j.jsx)(r.a,{className:"auth-card",children:Object(j.jsxs)("div",{className:"form-side",children:[Object(j.jsx)(l.b,{to:"/",className:"white",children:Object(j.jsx)("span",{className:"logo-single"})}),Object(j.jsx)(o.a,{className:"mb-4",children:Object(j.jsx)(f.a,{id:"user.forgot-password"})}),Object(j.jsx)(d.d,{initialValues:y,onSubmit:e=>{m||""!==e.email&&O(e,n)},children:e=>{let{errors:n,touched:t}=e;return Object(j.jsxs)(d.c,{className:"av-tooltip tooltip-label-bottom",children:[Object(j.jsxs)(u.a,{className:"form-group has-float-label",children:[Object(j.jsx)(c.a,{children:Object(j.jsx)(f.a,{id:"user.email"})}),Object(j.jsx)(d.b,{className:"form-control",name:"email",validate:g}),n.email&&t.email&&Object(j.jsx)("div",{className:"invalid-feedback d-block",children:n.email})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsx)(l.b,{to:"/user/forgot-password",children:Object(j.jsx)(f.a,{id:"user.forgot-password-question"})}),Object(j.jsxs)(i.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(m?"show-spinner":""),size:"lg",children:[Object(j.jsxs)("span",{className:"spinner d-inline-block",children:[Object(j.jsx)("span",{className:"bounce1"}),Object(j.jsx)("span",{className:"bounce2"}),Object(j.jsx)("span",{className:"bounce3"})]}),Object(j.jsx)("span",{className:"label",children:Object(j.jsx)(f.a,{id:"user.reset-password-button"})})]})]})]})}})]})})})})}))},121:function(e,n,t){"use strict";t(6);var s=t(396),a=t(250),r=t(19);n.a=Object(a.c)((e=>Object(r.jsx)(s.a,{...e})),{withRef:!1})},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));t(6);var s=t(253),a=t(19);const r=e=>Object(a.jsx)(s.a,{...e,widths:["xxs","xs","sm","md","lg","xl","xxl"]}),o=e=>{let{className:n}=e;return Object(a.jsx)("div",{className:"separator ".concat(n)})}},141:function(e,n,t){"use strict";var s=t(11),a=t(15),r=t(6),o=t.n(r),u=t(94),c=t.n(u),i=t(115),l=t.n(i),d=t(116),m=["className","cssModule","tag"],b={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var n=e.className,t=e.cssModule,r=e.tag,u=Object(a.a)(e,m),c=Object(d.mapToCssModules)(l()(n,"card-title"),t);return o.a.createElement(r,Object(s.a)({},u,{className:c}))};f.propTypes=b,f.defaultProps={tag:"div"},n.a=f},150:function(e,n,t){"use strict";var s=t(11),a=t(15),r=t(119),o=t(129),u=t(6),c=t.n(u),i=t(94),l=t.n(i),d=t(115),m=t.n(d),b=t(116),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:l.a.bool,"aria-label":l.a.string,block:l.a.bool,color:l.a.string,disabled:l.a.bool,outline:l.a.bool,tag:b.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),onClick:l.a.func,size:l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,close:l.a.bool},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(o.a)(n,e);var t=n.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],r=e.block,o=e.className,u=e.close,i=e.cssModule,l=e.color,d=e.outline,h=e.size,p=e.tag,j=e.innerRef,g=Object(a.a)(e,f);u&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(d?"-outline":"")+"-"+l,v=Object(b.mapToCssModules)(m()(o,{close:u},u||"btn",u||O,!!h&&"btn-"+h,!!r&&"btn-block",{active:n,disabled:this.props.disabled}),i);g.href&&"button"===p&&(p="a");var y=u?"Close":null;return c.a.createElement(p,Object(s.a)({type:"button"===p&&g.onClick?"button":void 0},g,{className:v,ref:j,onClick:this.onClick,"aria-label":t||y}))},n}(c.a.Component);p.propTypes=h,p.defaultProps={color:"secondary",tag:"button"},n.a=p},151:function(e,n,t){"use strict";t.d(n,"F",(function(){return c})),t.d(n,"a",(function(){return o})),t.d(n,"f",(function(){return r})),t.d(n,"h",(function(){return a})),t.d(n,"i",(function(){return u})),t.d(n,"g",(function(){return l})),t.d(n,"A",(function(){return d.k})),t.d(n,"l",(function(){return d.a})),t.d(n,"y",(function(){return d.g})),t.d(n,"x",(function(){return d.d})),t.d(n,"z",(function(){return d.h})),t.d(n,"d",(function(){return m.a})),t.d(n,"t",(function(){return m.d})),t.d(n,"u",(function(){return m.f})),t.d(n,"v",(function(){return m.h})),t.d(n,"w",(function(){return m.i})),t.d(n,"E",(function(){return m.j})),t.d(n,"b",(function(){return b.a})),t.d(n,"e",(function(){return b.b})),t.d(n,"j",(function(){return b.c})),t.d(n,"m",(function(){return b.d})),t.d(n,"n",(function(){return b.g})),t.d(n,"C",(function(){return b.j})),t.d(n,"c",(function(){return f.a})),t.d(n,"p",(function(){return f.d})),t.d(n,"q",(function(){return f.f})),t.d(n,"r",(function(){return f.h})),t.d(n,"s",(function(){return f.i})),t.d(n,"D",(function(){return f.j})),t.d(n,"B",(function(){return h.e})),t.d(n,"o",(function(){return h.b})),t.d(n,"k",(function(){return h.a}));var s=t(1);const a=e=>({type:s.t,payload:e}),r=e=>({type:s.s,payload:e}),o=(e,n)=>{const t=!n.indexOf(e)>-1?"".concat(n," ").concat(e):n;return{type:s.v,payload:t}},u=e=>{const n=e?e.split(" ").filter((e=>""!==e&&"sub-show-temporary"!==e)):"";let t="";return t=n.includes("main-show-temporary")?n.filter((e=>"main-show-temporary"!==e)).join(" "):"".concat(n.join(" ")," main-show-temporary"),{type:s.u,payload:{containerClassnames:t,menuClickCount:0}}},c=(e,n,t)=>{const a=n?n.split(" ").filter((e=>""!==e)):"";let r="";return t||(!a.includes("menu-default")||e%4!==0&&e%4!==3||(e=1),a.includes("menu-sub-hidden")&&e%4===2&&(e=0),!a.includes("menu-hidden")||e%4!==2&&e%4!==3||(e=0)),e%4===0?(a.includes("menu-default")&&a.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden":a.includes("menu-default")?r="menu-default":a.includes("menu-sub-hidden")?r="menu-sub-hidden":a.includes("menu-hidden")&&(r="menu-hidden"),e=0):e%4===1?a.includes("menu-default")&&a.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden main-hidden sub-hidden":a.includes("menu-default")?r="menu-default sub-hidden":a.includes("menu-sub-hidden")?r="menu-sub-hidden main-hidden sub-hidden":a.includes("menu-hidden")&&(r="menu-hidden main-show-temporary"):e%4===2?a.includes("menu-default")&&a.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden sub-hidden":a.includes("menu-default")?r="menu-default main-hidden sub-hidden":a.includes("menu-sub-hidden")?r="menu-sub-hidden sub-hidden":a.includes("menu-hidden")&&(r="menu-hidden main-show-temporary sub-show-temporary"):e%4===3&&(a.includes("menu-default")&&a.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden sub-show-temporary":a.includes("menu-default")?r="menu-default sub-hidden":a.includes("menu-sub-hidden")?r="menu-sub-hidden sub-show-temporary":a.includes("menu-hidden")&&(r="menu-hidden main-show-temporary")),a.includes("menu-mobile")&&(r+=" menu-mobile"),{type:s.w,payload:{containerClassnames:r,menuClickCount:e}}};var i=t(10);const l=e=>(Object(i.i)(e),{type:s.a,payload:e});var d=t(12),m=t(20),b=t(16),f=t(21),h=t(23)},253:function(e,n,t){"use strict";var s=t(11),a=t(15),r=t(6),o=t.n(r),u=t(94),c=t.n(u),i=t(115),l=t.n(i),d=t(116),m=["className","cssModule","widths","tag"],b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),h={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,n,t){return!0===t||""===t?e?"col":"col-"+n:"auto"===t?e?"col-auto":"col-"+n+"-auto":e?"col-"+t:"col-"+n+"-"+t},g=function(e){var n=e.className,t=e.cssModule,r=e.widths,u=e.tag,c=Object(a.a)(e,m),i=[];r.forEach((function(n,s){var a=e[n];if(delete c[n],a||""===a){var r=!s;if(Object(d.isObject)(a)){var o,u=r?"-":"-"+n+"-",m=j(r,n,a.size);i.push(Object(d.mapToCssModules)(l()(((o={})[m]=a.size||""===a.size,o["order"+u+a.order]=a.order||0===a.order,o["offset"+u+a.offset]=a.offset||0===a.offset,o)),t))}else{var b=j(r,n,a);i.push(b)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(l()(n,i),t);return o.a.createElement(u,Object(s.a)({},c,{className:b}))};g.propTypes=h,g.defaultProps=p,n.a=g},254:function(e,n,t){"use strict";var s=t(11),a=t(15),r=t(6),o=t.n(r),u=t(94),c=t.n(u),i=t(115),l=t.n(i),d=t(116),m=["className","cssModule","noGutters","tag","form","widths"],b=c.a.oneOfType([c.a.number,c.a.string]),f={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var n=e.className,t=e.cssModule,r=e.noGutters,u=e.tag,c=e.form,i=e.widths,b=Object(a.a)(e,m),f=[];i.forEach((function(n,t){var s=e[n];if(delete b[n],s){var a=!t;f.push(a?"row-cols-"+s:"row-cols-"+n+"-"+s)}}));var h=Object(d.mapToCssModules)(l()(n,r?"no-gutters":null,c?"form-row":"row",f),t);return o.a.createElement(u,Object(s.a)({},b,{className:h}))};p.propTypes=f,p.defaultProps=h,n.a=p},396:function(e,n,t){"use strict";var s=t(4),a=t(6),r=t(250),o=t(170);function u(e){var n=function(){var e=a.useContext(r.a);return Object(o.c)(e),e}(),t=n.formatMessage,s=n.textComponent,u=void 0===s?a.Fragment:s,c=e.id,i=e.description,l=e.defaultMessage,d=e.values,m=e.children,b=e.tagName,f=void 0===b?u:b,h=t({id:c,description:i,defaultMessage:l},d,{ignoreTag:e.ignoreTag});return Array.isArray(h)||(h=[h]),"function"===typeof m?m(h):f?a.createElement(f,null,a.Children.toArray(h)):a.createElement(a.Fragment,null,h)}u.displayName="FormattedMessage";var c=a.memo(u,(function(e,n){var t=e.values,a=Object(s.f)(e,["values"]),r=n.values,u=Object(s.f)(n,["values"]);return Object(o.d)(r,t)&&Object(o.d)(a,u)}));c.displayName="MemoizedFormattedMessage";n.a=c}}]);