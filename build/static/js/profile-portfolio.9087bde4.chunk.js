(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[68],{130:function(e,t,s){"use strict";s(6);var a=s(136),c=s(137),i=s(124),r=s(121),o=s(8),l=s(19);const n=e=>"/".concat(e)===o.b?Object(l.jsx)(r.a,{id:"menu.home"}):Object(l.jsx)(r.a,{id:"menu.".concat(e)}),d=(e,t)=>e.split(t)[0]+t,m=e=>{let{match:t}=e;const s=t.path.substr(1);let r=s.split("/");return r[r.length-1].indexOf(":")>-1&&(r=r.filter((e=>-1===e.indexOf(":")))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:r.map(((e,t)=>Object(l.jsx)(c.a,{active:r.length===t+1,children:r.length!==t+1?Object(l.jsx)(i.b,{to:"/".concat(d(s,e)),children:n(e)}):n(e)},t)))})})};t.a=e=>{let{heading:t,match:s}=e;return Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)("h1",{children:Object(l.jsx)(r.a,{id:t})}),Object(l.jsx)(m,{match:s})]})}},135:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(6),c=s.n(a).a.createContext({})},176:function(e,t,s){"use strict";var a=s(11),c=s(15),i=s(6),r=s.n(i),o=s(94),l=s.n(o),n=s(115),d=s.n(n),m=s(116),b=["className","cssModule","color","innerRef","pill","tag"],u={color:l.a.string,pill:l.a.bool,tag:m.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,s=e.cssModule,i=e.color,o=e.innerRef,l=e.pill,n=e.tag,u=Object(c.a)(e,b),j=Object(m.mapToCssModules)(d()(t,"badge","badge-"+i,!!l&&"badge-pill"),s);return u.href&&"span"===n&&(n="a"),r.a.createElement(n,Object(a.a)({},u,{className:j,ref:o}))};j.propTypes=u,j.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=j},181:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var a=s(34),c=s(11),i=s(119),r=s(129),o=s(6),l=s.n(o),n=s(94),d=s.n(n),m=s(146),b=s(116);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}var j=["defaultOpen"],p=function(e){function t(t){var s;return(s=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},s.toggle=s.toggle.bind(Object(i.a)(s)),s}Object(r.a)(t,e);var s=t.prototype;return s.toggle=function(e){var t=this,s=!this.state.isOpen;this.setState({isOpen:s},(function(){t.props.onToggle&&t.props.onToggle(e,s)}))},s.render=function(){return l.a.createElement(m.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.omit)(this.props,j)))},t}(o.Component);p.propTypes=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(a.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({defaultOpen:d.a.bool,onToggle:d.a.func},m.a.propTypes)},187:function(e,t,s){"use strict";var a=s(11),c=s(129),i=s(6),r=s.n(i),o=s(94),l=s.n(o),n=s(115),d=s.n(n),m=s(135),b=s(116),u={tag:b.tagPropType,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},j=function(e){function t(t){var s;return(s=e.call(this,t)||this).state={activeTab:s.props.activeTab},s}return Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,s=e.cssModule,c=e.tag,i=Object(b.omit)(this.props,Object.keys(u)),o=Object(b.mapToCssModules)(d()("tab-content",t),s);return r.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(c,Object(a.a)({},i,{className:o})))},t}(i.Component);t.a=j,j.propTypes=u,j.defaultProps={tag:"div"}},188:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var a=s(11),c=s(15),i=s(6),r=s.n(i),o=s(94),l=s.n(o),n=s(115),d=s.n(n),m=s(135),b=s(116),u=["className","cssModule","tabId","tag"],j={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function p(e){var t=e.className,s=e.cssModule,i=e.tabId,o=e.tag,l=Object(c.a)(e,u),n=function(e){return Object(b.mapToCssModules)(d()("tab-pane",t,{active:i===e}),s)};return r.a.createElement(m.a.Consumer,null,(function(e){var t=e.activeTabId;return r.a.createElement(o,Object(a.a)({},l,{className:n(t)}))}))}p.propTypes=j,p.defaultProps={tag:"div"}},213:function(e,t,s){"use strict";var a=s(11),c=s(15),i=s(6),r=s.n(i),o=s(94),l=s.n(o),n=s(115),d=s.n(n),m=s(116),b=["className","cssModule","tag"],u={tag:m.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,s=e.cssModule,i=e.tag,o=Object(c.a)(e,b),l=Object(m.mapToCssModules)(d()(t,"card-subtitle"),s);return r.a.createElement(i,Object(a.a)({},o,{className:l}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j},260:function(e,t,s){"use strict";var a=s(6),c=s(124),i=s(289),r=s(19);t.a=e=>{let{thumb:t,className:s,large:o}=e;const[l,n]=Object(a.useState)(!1);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.b,{to:"#",location:{},onClick:()=>n(!0),children:Object(r.jsx)("img",{src:t,alt:"thumbnail",className:s})}),l&&Object(r.jsx)(i.a,{mainSrc:o,onCloseRequest:()=>n(!1)})]})}},365:function(e,t,s){"use strict";var a=s(6),c=s.n(a),i=s(115),r=s.n(i),o=s(19);const l=e=>{let{alt:t,src:s,className:a,rounded:c,small:i}=e;return Object(o.jsx)("img",{alt:t,src:s,className:"img-thumbnail list-thumbnail align-self-center ".concat(a,"  ").concat(r()({"rounded-circle":c,small:i}))})};t.a=c.a.memo(l)},366:function(e,t,s){"use strict";var a=s(11),c=s(15),i=s(6),r=s.n(i),o=s(94),l=s.n(o),n=s(115),d=s.n(n),m=s(116),b=["className","cssModule","tag"],u={tag:m.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,s=e.cssModule,i=e.tag,o=Object(c.a)(e,b),l=Object(m.mapToCssModules)(d()(t,"card-text"),s);return r.a.createElement(i,Object(a.a)({},o,{className:l}))};j.propTypes=u,j.defaultProps={tag:"p"},t.a=j},413:function(e,t,s){"use strict";var a=s(11),c=s(15),i=s(6),r=s.n(i),o=s(94),l=s.n(o),n=s(115),d=s.n(n),m=s(116),b=["className","cssModule","top","bottom","tag"],u={tag:m.tagPropType,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,s=e.cssModule,i=e.top,o=e.bottom,l=e.tag,n=Object(c.a)(e,b),u="card-img";i&&(u="card-img-top"),o&&(u="card-img-bottom");var j=Object(m.mapToCssModules)(d()(t,u),s);return r.a.createElement(l,Object(a.a)({},n,{className:j}))};j.propTypes=u,j.defaultProps={tag:"img"},t.a=j},489:function(e,t,s){"use strict";t.a=[{key:1,title:"Progressively Extensive Infomediaries",thumb:"/assets/img/products/magdalena-thumb.jpg",badge:"NEW"},{key:2,title:"Assertively Iterate Resource Maximizing",thumb:"/assets/img/products/marble-cake-thumb.jpg"},{key:3,title:"Manufactured Products",thumb:"/assets/img/products/salzburger-nockerl-thumb.jpg",badge:"TRENDING"},{key:4,title:"Podcasting Operational Change",thumb:"/assets/img/products/goose-breast-thumb.jpg"},{key:5,title:"Performing a Deep Dive",thumb:"/assets/img/products/petit-gateau-thumb.jpg"}]},490:function(e,t,s){"use strict";s(6);var a=s(124),c=s(250),i=s(176),r=s(19);t.a=Object(c.c)((e=>{let{data:t}=e;return Object(r.jsxs)("div",{className:"d-flex flex-row mb-3",children:[Object(r.jsxs)(a.b,{className:"d-block position-relative",to:"#",location:{},children:[Object(r.jsx)("img",{src:t.thumb,alt:"thumbnail",className:"list-thumbnail border-0"}),""!==t.badge&&Object(r.jsx)(i.a,{color:"primary",pill:!0,className:"position-absolute badge-top-left",children:t.badge})]}),Object(r.jsx)("div",{className:"pl-3 pt-2 pr-2 pb-2",children:Object(r.jsx)(a.b,{className:"d-block position-relative",to:"#",location:{},children:Object(r.jsx)("p",{className:"list-item-heading",children:t.title})})})]})}))},491:function(e,t,s){"use strict";t.a=[{id:1,title:"Marble Cake",img:"/assets/img/products/marble-cake-thumb.jpg",category:"Cakes",createDate:"02.04.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake with flowers Macarons and blueberries",sales:1647,stock:62},{id:2,title:"Fat Rascal",category:"Cupcakes",img:"/assets/img/products/fat-rascal-thumb.jpg",createDate:"01.04.2018",status:"PROCESSED",statusColor:"secondary",description:"Cheesecake with chocolate cookies and Cream biscuits",sales:1240,stock:48},{id:3,title:"Chocolate Cake",img:"/assets/img/products/chocolate-cake-thumb.jpg",category:"Cakes",createDate:"25.03.2018",status:"PROCESSED",statusColor:"secondary",description:"Homemade cheesecake with fresh berries and mint",sales:1080,stock:57},{id:4,title:"Goose Breast",img:"/assets/img/products/goose-breast-thumb.jpg",category:"Cakes",createDate:"21.03.2018",status:"PROCESSED",statusColor:"secondary",description:"Chocolate cake with berries",sales:1014,stock:41},{id:5,title:"Petit G\xe2teau",category:"Cupcakes",img:"/assets/img/products/petit-gateau-thumb.jpg",createDate:"02.06.2018",status:"ON HOLD",statusColor:"primary",description:"Chocolate cake with mascarpone",sales:985,stock:23},{id:6,title:"Salzburger Nockerl",img:"/assets/img/products/salzburger-nockerl-thumb.jpg",category:"Desserts",createDate:"14.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Wedding cake decorated with donuts and wild berries",sales:962,stock:34},{id:7,title:"Napoleonshat",img:"/assets/img/products/napoleonshat-thumb.jpg",category:"Desserts",createDate:"05.02.2018",status:"PROCESSED",statusColor:"secondary",description:"Cheesecake with fresh berries and mint for dessert",sales:921,stock:31},{id:8,title:"Cheesecake",img:"/assets/img/products/cheesecake-thumb.jpg",category:"Cakes",createDate:"18.08.2018",status:"ON HOLD",statusColor:"primary",description:"Delicious vegan chocolate cake",sales:887,stock:21},{id:9,title:"Financier",img:"/assets/img/products/financier-thumb.jpg",category:"Cakes",createDate:"15.03.2018",status:"ON HOLD",statusColor:"primary",description:"White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate",sales:865,stock:53},{id:10,title:"Genoise",img:"/assets/img/products/genoise-thumb.jpg",category:"Cupcakes",createDate:"11.06.2018",status:"PROCESSED",statusColor:"secondary",description:"Christmas fruit cake, pudding on top",sales:824,stock:55},{id:11,title:"Gingerbread",img:"/assets/img/products/gingerbread-thumb.jpg",category:"Cakes",createDate:"10.04.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake decorated with donuts and wild berries",sales:714,stock:12},{id:12,title:"Magdalena",img:"/assets/img/products/magdalena-thumb.jpg",category:"Cakes",createDate:"22.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Christmas fruit cake, pudding on top",sales:702,stock:14},{id:13,title:"Parkin",img:"/assets/img/products/parkin-thumb.jpg",category:"Cakes",createDate:"22.08.2018",status:"ON HOLD",statusColor:"primary",description:"White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate",sales:689,stock:78},{id:14,title:"Streuselkuchen",img:"/assets/img/products/streuselkuchen-thumb.jpg",category:"Cakes",createDate:"22.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Delicious vegan chocolate cake",sales:645,stock:55},{id:15,title:"Tea loaf",img:"/assets/img/products/tea-loaf-thumb.jpg",category:"Cakes",createDate:"10.09.2018",status:"ON HOLD",statusColor:"primary",description:"Cheesecake with fresh berries and mint for dessert",sales:632,stock:20},{id:16,title:"Merveilleux",img:"/assets/img/products/merveilleux-thumb.jpg",category:"Cakes",createDate:"18.02.2018",status:"ON HOLD",statusColor:"primary",description:"Chocolate cake with mascarpone",sales:621,stock:6},{id:17,title:"Fruitcake",img:"/assets/img/products/fruitcake-thumb.jpg",category:"Cakes",createDate:"12.01.2019",status:"PROCESSED",statusColor:"secondary",description:"Chocolate cake with berries",sales:595,stock:17},{id:18,title:"Bebinca",img:"/assets/img/products/bebinca-thumb.jpg",category:"Cakes",createDate:"04.02.2019",status:"PROCESSED",statusColor:"secondary",description:"Homemade cheesecake with fresh berries and mint",sales:574,stock:16},{id:19,title:"Cremeschnitte",img:"/assets/img/products/cremeschnitte-thumb.jpg",category:"Desserts",createDate:"04.03.2018",status:"ON HOLD",statusColor:"primary",description:"Cheesecake with chocolate cookies and Cream biscuits",sales:562,stock:9},{id:20,title:"Souffl\xe9",img:"/assets/img/products/souffle-thumb.jpg",category:"Cupcakes",createDate:"16.01.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake with flowers Macarons and blueberries",sales:524,stock:14}]},492:function(e,t,s){"use strict";var a=s(6),c=s.n(a),i=s(124),r=s(132),o=s(134),l=s(213),n=s(366),d=s(365),m=s(19);const b=e=>{let{link:t="#",data:s}=e;return Object(m.jsxs)(r.a,{className:"d-flex flex-row mb-4",children:[Object(m.jsx)(i.b,{to:t,className:"d-flex",children:Object(m.jsx)(d.a,{rounded:!0,small:!0,src:s.thumb,alt:"profile",className:"m-4"})}),Object(m.jsx)("div",{className:" d-flex flex-grow-1 min-width-zero",children:Object(m.jsx)(o.a,{className:" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(m.jsxs)("div",{className:"min-width-zero",children:[Object(m.jsx)(i.b,{to:t,children:Object(m.jsx)(l.a,{className:"truncate mb-1",children:s.name})}),Object(m.jsx)(n.a,{className:"text-muted text-small mb-2",children:s.status})]})})})]})};t.a=c.a.memo(b)},493:function(e,t,s){"use strict";t.a=[{name:"Mayra Sibley",status:"Working hard!",thumb:"/assets/img/profiles/l-5.jpg",large:"/assets/img/profiles/5.jpg",key:1},{name:"Philip Nelms",status:"Lead Developer",thumb:"/assets/img/profiles/l-2.jpg",large:"/assets/img/profiles/2.jpg",key:2},{name:"Kathryn Mengel",status:"Dog & Cat Person",thumb:"/assets/img/profiles/l-10.jpg",large:"/assets/img/profiles/10.jpg",key:3},{name:"Esperanza Lodge",status:"Now giving divorce advices :)",thumb:"/assets/img/profiles/l-4.jpg",large:"/assets/img/profiles/4.jpg",key:4},{name:"Ken Ballweg",status:"Hi there, I am using Gogo!",thumb:"/assets/img/profiles/l-3.jpg",large:"/assets/img/profiles/3.jpg",key:5},{name:"Rasheeda Vaquera",status:"...",thumb:"/assets/img/profiles/l-6.jpg",large:"/assets/img/profiles/6.jpg",key:6},{name:"Linn Ronning",status:"What goes around comes around",thumb:"/assets/img/profiles/l-7.jpg",large:"/assets/img/profiles/7.jpg",key:7},{name:"Marty Otte",status:"Big city life",thumb:"/assets/img/profiles/l-9.jpg",large:"/assets/img/profiles/9.jpg",key:8},{name:"Laree Munsch",status:"New Job  :)",thumb:"/assets/img/profiles/l-11.jpg",large:"/assets/img/profiles/11.jpg",key:9}]},833:function(e,t,s){"use strict";s.r(t);var a=s(6),c=s(254),i=s(181),r=s(734),o=s(675),l=s(676),n=s(456),d=s(457),m=s(187),b=s(188),u=s(132),j=s(150),p=s(134),g=s(176),h=s(141),O=s(413),x=s(213),f=s(366),y=s(124),k=s(115),N=s.n(k),v=s(130),C=s(128),w=s(121),D=s(260),P=s(489),T=s(490),S=s(491),E=s(492),M=s(493),R=s(19);const I=S.a.slice(0,15);t.default=e=>{let{match:t}=e;const[s,k]=Object(a.useState)("details");return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(c.a,{children:Object(R.jsxs)(C.a,{xxs:"12",children:[Object(R.jsx)("h1",{children:"Sarah Kortney"}),Object(R.jsx)("div",{className:"text-zero top-right-button-container",children:Object(R.jsxs)(i.a,{children:[Object(R.jsx)(r.a,{caret:!0,color:"primary",size:"lg",outline:!0,className:"top-right-button top-right-button-single",children:Object(R.jsx)(w.a,{id:"pages.actions"})}),Object(R.jsxs)(o.a,{children:[Object(R.jsx)(l.a,{header:!0,children:Object(R.jsx)(w.a,{id:"pages.header"})}),Object(R.jsx)(l.a,{disabled:!0,children:Object(R.jsx)(w.a,{id:"pages.delete"})}),Object(R.jsx)(l.a,{children:Object(R.jsx)(w.a,{id:"pages.another-action"})}),Object(R.jsx)(l.a,{divider:!0}),Object(R.jsx)(l.a,{children:Object(R.jsx)(w.a,{id:"pages.another-action"})})]})]})}),Object(R.jsx)(v.a,{match:t}),Object(R.jsxs)(n.a,{tabs:!0,className:"separator-tabs ml-0 mb-5",children:[Object(R.jsx)(d.a,{children:Object(R.jsx)(y.b,{className:N()({active:"details"===s,"nav-link":!0}),onClick:()=>{k("details")},location:{},to:"#",children:Object(R.jsx)(w.a,{id:"pages.details"})})}),Object(R.jsx)(d.a,{children:Object(R.jsx)(y.b,{className:N()({active:"followers"===s,"nav-link":!0}),onClick:()=>{k("followers")},location:{},to:"#",children:Object(R.jsx)(w.a,{id:"pages.followers"})})})]}),Object(R.jsxs)(m.a,{activeTab:s,children:[Object(R.jsx)(b.a,{tabId:"details",children:Object(R.jsxs)(c.a,{children:[Object(R.jsxs)(C.a,{xxs:"12",lg:"4",className:"mb-4 col-left",children:[Object(R.jsxs)(u.a,{className:"mb-4",children:[Object(R.jsx)("div",{className:"position-absolute card-top-buttons",children:Object(R.jsx)(j.a,{outline:!0,color:"white",className:"icon-button",children:Object(R.jsx)("i",{className:"simple-icon-pencil"})})}),Object(R.jsx)(D.a,{thumb:"/assets/img/profiles/1.jpg",large:"/assets/img/profiles/1.jpg",className:"card-img-top"}),Object(R.jsxs)(p.a,{children:[Object(R.jsx)("p",{className:"text-muted text-small mb-2",children:Object(R.jsx)(w.a,{id:"menu.about"})}),Object(R.jsx)("p",{className:"mb-3",children:"I\u2019m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well."}),Object(R.jsx)("p",{className:"text-muted text-small mb-2",children:Object(R.jsx)(w.a,{id:"pages.location"})}),Object(R.jsx)("p",{className:"mb-3",children:"Nairobi, Kenya"}),Object(R.jsx)("p",{className:"text-muted text-small mb-2",children:Object(R.jsx)(w.a,{id:"pages.responsibilities"})}),Object(R.jsxs)("p",{className:"mb-3",children:[Object(R.jsx)(g.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0,children:"FRONTEND"}),Object(R.jsx)(g.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0,children:"JAVASCRIPT"}),Object(R.jsx)(g.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0,children:"SECURITY"}),Object(R.jsx)(g.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0,children:"DESIGN"})]}),Object(R.jsx)("p",{className:"text-muted text-small mb-2",children:Object(R.jsx)(w.a,{id:"menu.contact"})}),Object(R.jsx)("div",{className:"social-icons",children:Object(R.jsxs)("ul",{className:"list-unstyled list-inline",children:[Object(R.jsx)("li",{className:"list-inline-item",children:Object(R.jsx)(y.b,{to:"#",location:{},children:Object(R.jsx)("i",{className:"simple-icon-social-facebook"})})}),Object(R.jsx)("li",{className:"list-inline-item",children:Object(R.jsx)(y.b,{to:"#",location:{},children:Object(R.jsx)("i",{className:"simple-icon-social-twitter"})})}),Object(R.jsx)("li",{className:"list-inline-item",children:Object(R.jsx)(y.b,{to:"#",location:{},children:Object(R.jsx)("i",{className:"simple-icon-social-instagram"})})})]})})]})]}),Object(R.jsx)(u.a,{className:"mb-4",children:Object(R.jsxs)(p.a,{children:[Object(R.jsx)(h.a,{children:Object(R.jsx)(w.a,{id:"pages.recent-posts"})}),Object(R.jsx)("div",{className:"remove-last-border remove-last-margin remove-last-padding",children:P.a.map((e=>Object(R.jsx)(T.a,{data:e},"recent_".concat(e.key))))})]})})]}),Object(R.jsx)(C.a,{xxs:"12",lg:"8",className:"mb-4 col-right",children:Object(R.jsx)(c.a,{children:I.map((e=>Object(R.jsx)(C.a,{xxs:"12",lg:"6",xl:"4",className:"mb-4",children:Object(R.jsxs)(u.a,{children:[Object(R.jsx)("div",{className:"position-relative",children:Object(R.jsx)(y.b,{to:"#",location:{},className:"w-40 w-sm-100",children:Object(R.jsx)(O.a,{top:!0,alt:e.title,src:e.img})})}),Object(R.jsxs)(p.a,{children:[Object(R.jsx)(y.b,{to:"#",location:{},className:"w-40 w-sm-100",children:Object(R.jsx)(x.a,{children:e.title})}),Object(R.jsx)(f.a,{className:"text-muted text-small mb-0 font-weight-light",children:e.createDate})]})]})},"product_".concat(e.id))))})})]})}),Object(R.jsx)(b.a,{tabId:"followers",children:Object(R.jsx)(c.a,{children:M.a.map((e=>Object(R.jsx)(C.a,{xxs:"12",md:"6",lg:"4",children:Object(R.jsx)(E.a,{data:e})},"frined_".concat(e.key))))})})]})]})})})}}}]);