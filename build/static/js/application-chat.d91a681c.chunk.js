(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[14],{1043:function(e,t,a){"use strict";a.r(t);var s=a(6),n=a.n(s),c=a(250),r=a(36),i=a(252),l=a.n(i),o=a(254),d=a(128),b=a(151),u=a(258),m=a(456),p=a(457),j=a(187),h=a(188),f=a(124),g=a(115),v=a.n(g),x=a(121),O=a(259),N=a(19);var C=Object(c.c)(Object(r.b)((e=>{let{chatApp:t}=e;const{contacts:a,allContacts:s,conversations:n,loadingConversations:c,loadingContacts:r,currentUser:i}=t;return{contacts:a,allContacts:s,conversations:n,loadingConversations:c,loadingContacts:r,currentUser:i}}),{changeConversationAction:b.e,createConversationAction:b.j,searchContactAction:b.C})((e=>{let{intl:t,activeTab:a,toggleAppMenu:n,contacts:c,allContacts:r,conversations:i,loadingConversations:o,loadingContacts:d,currentUser:b,changeConversationAction:g,createConversationAction:C,searchContactAction:y}=e;const[T,w]=Object(s.useState)(""),k=e=>{w(e),e.length>0?("contacts"!==a&&n("contacts"),y(e)):y("")},{messages:M}=t;return Object(N.jsxs)(O.a,{children:[Object(N.jsx)(u.a,{className:"pl-0 pr-0",children:Object(N.jsxs)(m.a,{tabs:!0,className:"card-header-tabs ml-0 mr-0",children:[Object(N.jsx)(p.a,{className:"w-50 text-center",children:Object(N.jsx)(f.b,{to:"#",location:{},className:v()({active:"messages"===a,"nav-link":!0}),onClick:()=>{return a!==(e="messages")&&n(e),void("messages"===e&&k(""));var e},children:Object(N.jsx)(x.a,{id:"chat.messages"})})}),Object(N.jsx)(p.a,{className:"w-50 text-center",children:Object(N.jsx)(f.b,{to:"#",location:{},className:v()({active:"contacts"===a,"nav-link":!0}),onClick:()=>n("contacts"),children:Object(N.jsx)(x.a,{id:"chat.contacts"})})})]})}),Object(N.jsx)("div",{className:"pt-4 pr-4 pl-4 pb-0",children:Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("input",{type:"text",className:"form-control rounded",placeholder:M["menu.search"],value:T,onChange:e=>k(e.target.value)})})}),Object(N.jsxs)(j.a,{activeTab:a,className:"chat-app-tab-content",children:[Object(N.jsx)(h.a,{tabId:"messages",className:"chat-app-tab-pane",children:Object(N.jsx)(l.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:Object(N.jsx)("div",{className:"pt-2 pr-4 pl-4 pb-2",children:d&&o&&i.map(((e,t)=>{const a=r.find((t=>t.id===e.users.find((e=>e!==b.id))));return Object(N.jsx)("div",{className:"d-flex flex-row mb-1 border-bottom pb-3 mb-3",children:Object(N.jsxs)(f.b,{className:"d-flex",to:"#",location:{},onClick:e=>{return t=a.id,g(t),void k("");var t},children:[Object(N.jsx)("img",{alt:a.name,src:a.thumb,className:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"}),Object(N.jsx)("div",{className:"d-flex flex-grow-1 min-width-zero",children:Object(N.jsx)("div",{className:"pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(N.jsxs)("div",{className:"min-width-zero",children:[Object(N.jsx)("p",{className:" mb-0 truncate",children:a.name}),Object(N.jsx)("p",{className:"mb-1 text-muted text-small",children:e.lastMessageTime})]})})})]})},t)}))})})}),Object(N.jsx)(h.a,{tabId:"contacts",className:"chat-app-tab-pane",children:Object(N.jsx)(l.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:Object(N.jsx)("div",{className:"pt-2 pr-4 pl-4 pb-2",children:d&&c.filter((e=>e.id!==b.id)).map(((e,t)=>Object(N.jsx)("div",{className:"d-flex flex-row mb-3 border-bottom pb-3",children:Object(N.jsxs)(f.b,{className:"d-flex",to:"#",location:{},onClick:()=>{return t=e.id,"messages"!==a&&(n("messages"),y("")),i.find((e=>e.users.includes(b.id)&&e.users.includes(t)))||C(b.id,t,i),void g(t);var t},children:[Object(N.jsx)("img",{alt:e.name,src:e.thumb,className:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"}),Object(N.jsx)("div",{className:"d-flex flex-grow-1 min-width-zero",children:Object(N.jsx)("div",{className:"m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(N.jsx)("div",{className:"min-width-zero",children:Object(N.jsx)("p",{className:"mb-0 truncate",children:e.name})})})})]})},t)))})})})]})]})})));const y=e=>{let{name:t,thumb:a,lastSeenDate:s}=e;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"d-flex flex-row chat-heading",children:[Object(N.jsx)("div",{className:"d-flex",children:Object(N.jsx)("img",{alt:t,src:a,className:"img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small"})}),Object(N.jsx)("div",{className:" d-flex min-width-zero",children:Object(N.jsx)("div",{className:"card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(N.jsxs)("div",{className:"min-width-zero",children:[Object(N.jsx)("div",{children:Object(N.jsx)("p",{className:"list-item-heading mb-1 truncate ",children:t})}),Object(N.jsx)("p",{className:"mb-0 text-muted text-small",children:"0"===s?"-":s})]})})})]}),Object(N.jsx)("div",{className:"separator mb-5"})]})};var T=n.a.memo(y),w=a(132),k=a(134);const M=e=>{let{sender:t,item:a,currentUserid:s}=e;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(w.a,{className:"d-inline-block mb-3 float-".concat(a.sender!==s?"left":"right"),children:[Object(N.jsx)("div",{className:"position-absolute  pt-1 pr-2 r-0",children:Object(N.jsx)("span",{className:"text-extra-small text-muted",children:a.time})}),Object(N.jsxs)(k.a,{children:[Object(N.jsxs)("div",{className:"d-flex flex-row pb-1",children:[Object(N.jsx)("img",{alt:t.name,src:t.thumb,className:"img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"}),Object(N.jsx)("div",{className:" d-flex flex-grow-1 min-width-zero",children:Object(N.jsx)("div",{className:"m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(N.jsx)("div",{className:"min-width-zero",children:Object(N.jsx)("p",{className:"mb-0 truncate list-item-heading",children:t.name})})})})]}),Object(N.jsx)("div",{className:"chat-text-left",children:Object(N.jsx)("p",{className:"mb-0 text-semi-muted",children:a.text})})]})]}),Object(N.jsx)("div",{className:"clearfix"})]})};var z=n.a.memo(M),P=a(171),R=a(150);const E=e=>{let{placeholder:t,messageInput:a,handleChatInputPress:s,handleChatInputChange:n,handleSendButtonClick:c}=e;return Object(N.jsxs)("div",{className:"chat-input-container d-flex justify-content-between align-items-center",children:[Object(N.jsx)(P.a,{className:"form-control flex-grow-1",type:"text",placeholder:t,value:a,onKeyPress:e=>s(e),onChange:e=>n(e)}),Object(N.jsxs)("div",{children:[Object(N.jsx)(R.a,{outline:!0,color:"primary",className:"icon-button large ml-1",children:Object(N.jsx)("i",{className:"simple-icon-paper-clip"})}),Object(N.jsx)(R.a,{color:"primary",className:"icon-button large ml-1",onClick:()=>c(),children:Object(N.jsx)("i",{className:"simple-icon-arrow-right"})})]})]})};var A=n.a.memo(E);t.default=Object(c.c)(Object(r.b)((e=>{let{chatApp:t}=e;const{allContacts:a,conversations:s,loadingConversations:n,loadingContacts:c,currentUser:r,selectedUser:i,selectedUserId:l}=t;return{allContacts:a,conversations:s,loadingConversations:n,loadingContacts:c,currentUser:r,selectedUser:i,selectedUserId:l}}),{getContactsAction:b.m,getConversationsAction:b.n,changeConversationAction:b.e,addMessageToConversationAction:b.b})((e=>{let{intl:t,allContacts:a,conversations:n,loadingConversations:c,loadingContacts:r,currentUser:i,selectedUser:b,selectedUserId:u,getContactsAction:m,getConversationsAction:p,changeConversationAction:j,addMessageToConversationAction:h}=e;const[f,g]=Object(s.useState)("messages"),[v,x]=Object(s.useState)(""),O=Object(s.useRef)(null);Object(s.useEffect)((()=>{document.body.classList.add("no-footer");return m(),p(0),()=>{document.body.classList.remove("no-footer")}}),[m,p]);const y=()=>{setTimeout((()=>{O.current&&(O.current._ps.element.scrollTop=O.current._ps.contentHeight)}),100)};Object(s.useEffect)((()=>{c&&r&&null==b&&(j(u),y())}),[j,r,c,b,u]),Object(s.useEffect)((()=>{y()}),[u]);const{messages:w}=t,k=c&&r&&b?n.find((e=>e.users.includes(i.id)&&e.users.includes(b.id))):null;return c&&r?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.a,{className:"app-row",children:Object(N.jsxs)(d.a,{xxs:"12",className:"chat-app",children:[c&&b&&Object(N.jsx)(T,{name:b.name,thumb:b.thumb,lastSeenDate:b.lastSeenDate}),k&&Object(N.jsx)(l.a,{ref:O,options:{suppressScrollX:!0,wheelPropagation:!1},children:k.messages.map(((e,t)=>{const s=a.find((t=>t.id===e.sender));return Object(N.jsx)(z,{sender:s,item:e,currentUserid:i.id},t)}))})]})}),Object(N.jsx)(A,{placeholder:w["chat.saysomething"],messageInput:v,handleChatInputPress:e=>{"Enter"===e.key&&v.length>0&&(h(i.id,b.id,v,n),x(""),g("messages"),y())},handleChatInputChange:e=>{x(e.target.value)},handleSendButtonClick:()=>{v.length>0&&(h(i.id,b.id,v,n),x(""),g("messages"),y())}}),Object(N.jsx)(C,{activeTab:f,toggleAppMenu:g})]}):Object(N.jsx)("div",{className:"loading"})})))},132:function(e,t,a){"use strict";var s=a(11),n=a(15),c=a(6),r=a.n(c),i=a(94),l=a.n(i),o=a(115),d=a.n(o),b=a(116),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],m={tag:b.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.color,i=e.body,l=e.inverse,o=e.outline,m=e.tag,p=e.innerRef,j=Object(n.a)(e,u),h=Object(b.mapToCssModules)(d()(t,"card",!!l&&"text-white",!!i&&"card-body",!!c&&(o?"border":"bg")+"-"+c),a);return r.a.createElement(m,Object(s.a)({},j,{className:h,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},134:function(e,t,a){"use strict";var s=a(11),n=a(15),c=a(6),r=a.n(c),i=a(94),l=a.n(i),o=a(115),d=a.n(o),b=a(116),u=["className","cssModule","innerRef","tag"],m={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,i=e.tag,l=Object(n.a)(e,u),o=Object(b.mapToCssModules)(d()(t,"card-body"),a);return r.a.createElement(i,Object(s.a)({},l,{className:o,ref:c}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(6),n=a.n(s).a.createContext({})},150:function(e,t,a){"use strict";var s=a(11),n=a(15),c=a(119),r=a(129),i=a(6),l=a.n(i),o=a(94),d=a.n(o),b=a(115),u=a.n(b),m=a(116),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],j={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,r=e.className,i=e.close,o=e.cssModule,d=e.color,b=e.outline,j=e.size,h=e.tag,f=e.innerRef,g=Object(n.a)(e,p);i&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(b?"-outline":"")+"-"+d,x=Object(m.mapToCssModules)(u()(r,{close:i},i||"btn",i||v,!!j&&"btn-"+j,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),o);g.href&&"button"===h&&(h="a");var O=i?"Close":null;return l.a.createElement(h,Object(s.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:x,ref:f,onClick:this.onClick,"aria-label":a||O}))},t}(l.a.Component);h.propTypes=j,h.defaultProps={color:"secondary",tag:"button"},t.a=h},171:function(e,t,a){"use strict";var s=a(11),n=a(15),c=a(119),r=a(129),i=a(6),l=a.n(i),o=a(94),d=a.n(o),b=a(115),u=a.n(b),m=a(116),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],j={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.focus=a.focus.bind(Object(c.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.type,r=e.bsSize,i=e.valid,o=e.invalid,d=e.tag,b=e.addon,j=e.plaintext,h=e.innerRef,f=Object(n.a)(e,p),g=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),x=d||("select"===c||"textarea"===c?c:"input"),O="form-control";j?(O+="-plaintext",x=d||"input"):"file"===c?O+="-file":"range"===c?O+="-range":g&&(O=b?null:"form-check-input"),f.size&&v.test(f.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var N=Object(m.mapToCssModules)(u()(t,o&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===x||d&&"function"===typeof d)&&(f.type=c),f.children&&!j&&"select"!==c&&"string"===typeof x&&"select"!==x&&(Object(m.warnOnce)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),l.a.createElement(x,Object(s.a)({},f,{ref:h,className:N,"aria-invalid":o}))},t}(l.a.Component);h.propTypes=j,h.defaultProps={type:"text"},t.a=h},187:function(e,t,a){"use strict";var s=a(11),n=a(129),c=a(6),r=a.n(c),i=a(94),l=a.n(i),o=a(115),d=a.n(o),b=a(135),u=a(116),m={tag:u.tagPropType,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(n.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.tag,c=Object(u.omit)(this.props,Object.keys(m)),i=Object(u.mapToCssModules)(d()("tab-content",t),a);return r.a.createElement(b.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(n,Object(s.a)({},c,{className:i})))},t}(c.Component);t.a=p,p.propTypes=m,p.defaultProps={tag:"div"}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var s=a(11),n=a(15),c=a(6),r=a.n(c),i=a(94),l=a.n(i),o=a(115),d=a.n(o),b=a(135),u=a(116),m=["className","cssModule","tabId","tag"],p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function j(e){var t=e.className,a=e.cssModule,c=e.tabId,i=e.tag,l=Object(n.a)(e,m),o=function(e){return Object(u.mapToCssModules)(d()("tab-pane",t,{active:c===e}),a)};return r.a.createElement(b.a.Consumer,null,(function(e){var t=e.activeTabId;return r.a.createElement(i,Object(s.a)({},l,{className:o(t)}))}))}j.propTypes=p,j.defaultProps={tag:"div"}},239:function(e,t,a){"use strict";var s=a(11),n=a(15),c=a(119),r=a(129),i=a(6),l=a.n(i),o=a(94),d=a.n(o),b=a(115),u=a.n(b),m=a(116),p=["className","cssModule","active","tag","innerRef"],j={tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.active,r=e.tag,i=e.innerRef,o=Object(n.a)(e,p),d=Object(m.mapToCssModules)(u()(t,"nav-link",{disabled:o.disabled,active:c}),a);return l.a.createElement(r,Object(s.a)({},o,{ref:i,onClick:this.onClick,className:d}))},t}(l.a.Component);h.propTypes=j,h.defaultProps={tag:"a"},t.a=h},258:function(e,t,a){"use strict";var s=a(11),n=a(15),c=a(6),r=a.n(c),i=a(94),l=a.n(i),o=a(115),d=a.n(o),b=a(116),u=["className","cssModule","tag"],m={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(n.a)(e,u),l=Object(b.mapToCssModules)(d()(t,"card-header"),a);return r.a.createElement(c,Object(s.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},259:function(e,t,a){"use strict";var s=a(6),n=a(239),c=a(19);t.a=e=>{let{children:t}=e;const a=Object(s.useRef)(),[r,i]=Object(s.useState)(!1),l=e=>{if(r){const t=a.current;if(t.contains(e.target)||t===e.target)return;i(!1)}};return Object(s.useEffect)((()=>(["click","touchstart"].forEach((e=>document.addEventListener(e,l,!1))),()=>{["click","touchstart"].forEach((e=>document.removeEventListener(e,l,!1)))})),[r]),Object(c.jsxs)("div",{ref:a,className:"app-menu ".concat(r?"shown":""),children:[t,Object(c.jsx)(n.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:()=>i(!r),children:Object(c.jsx)("i",{className:"simple-icon-options"})})]})}}}]);