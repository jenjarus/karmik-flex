(this["webpackJsonpkarmik-flex"]=this["webpackJsonpkarmik-flex"]||[]).push([[0],{414:function(e,t,c){},415:function(e,t,c){},420:function(e,t,c){"use strict";c.r(t);c(209),c(221);var n=c(5),r=c.n(n),a=c(105),i=c.n(a),s=(c(414),c(415),c(22));var o=c(4),j=function(e){var t,c,n,r=e.flag,a=Object(s.b)(),i=Object(s.c)((function(e){return e.fillerEmote})),j=Object(s.c)((function(e){return e.activeEmote}));return"filler"===r?(t=function(e){return a({type:"EDIT_FILLER_EMOTE",fillerEmote:e.target.value.trim()})},c="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c",n=i):"active"===r&&(t=function(e){return a({type:"EDIT_ACTIVE_EMOTE",activeEmote:e.target.value.trim()})},c="\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",n=j),Object(o.jsxs)("div",{className:"input-board",children:[Object(o.jsx)("label",{htmlFor:r,children:c}),Object(o.jsx)("input",{id:r,defaultValue:n,type:"text",className:"input",onChange:function(e){return t(e)}})]})},l=function(){var e=Object(s.b)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"top__block",children:[Object(o.jsx)(j,{flag:"filler"}),Object(o.jsx)(j,{flag:"active"})]}),Object(o.jsx)("div",{className:"reset__box",children:Object(o.jsx)("button",{className:"btn",onClick:function(){return e({type:"RESET_BOARD"})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})})]})},b=function(e){var t=e.id,c=Object(s.b)(),n=Object(s.c)((function(e){return e.board})),r=n[t]?" active":"";return Object(o.jsxs)(o.Fragment,{children:[t%17===0&&0!==t?Object(o.jsx)("br",{}):"",Object(o.jsx)("span",{className:"board__button"+r,onClick:function(){return c(function(e){return{type:"EDIT_ELEMENT_ARR",id:e}}(t))}})]})},u=function(){var e=function(){for(var e=[],t=0;t<=67;t++)e.push(Object(o.jsx)(b,{id:t},t));return e}();return Object(o.jsx)("div",{className:"board",children:e.map((function(e){return e}))})},d=function(e){var t=e.refs,c=Object(s.c)((function(e){return e.board})),n=Object(s.c)((function(e){return e.fillerEmote})),r=Object(s.c)((function(e){return e.activeEmote})),a=c.map((function(e){return e?r:n})).join(" ");return Object(o.jsx)("textarea",{value:a,ref:t,readOnly:!0})},O=function(){var e=Object(n.useRef)(null);return Object(o.jsxs)("div",{className:"bottom__block",children:[Object(o.jsx)("button",{className:"btn",onClick:function(){void 0!=navigator.clipboard?navigator.clipboard.writeText(e.current.value).then((function(){}),(function(e){console.error("Async: Could not copy text: ",e)})):window.clipboardData&&window.clipboardData.setData("Text",e.current.value)},children:"\u0421\u043a\u043e\u043f\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(o.jsx)(d,{refs:e})]})};var f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"title",children:["Karmik - ",Object(o.jsx)("span",{className:"red",children:"Flex"})]})})})}),Object(o.jsx)("main",{children:Object(o.jsxs)("article",{className:"container",children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{})]})}),Object(o.jsx)("footer",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"copy",children:["\xa9Jenjarus ",Object(o.jsx)("span",{className:"year",children:"2077"})]})})})})]})},m=c(208),x=c(135),v=c(31),E={fillerEmote:"kkFlex",activeEmote:"Dance",board:[!1,!0,!0,!0,!1,!0,!1,!1,!1,!1,!0,!0,!1,!0,!1,!0,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!0,!0,!1,!1,!0,!1,!1,!1,!0,!0,!0,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!0,!0,!0,!1,!1,!0,!0,!1,!0,!1,!0,!1]};var h=Object(m.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_ELEMENT_ARR":return Object(v.a)(Object(v.a)({},e),{},{board:Object(x.a)(e.board.map((function(e,c){return c===t.id?!e:e})))});case"EDIT_FILLER_EMOTE":return Object(v.a)(Object(v.a)({},e),{},{fillerEmote:t.fillerEmote});case"EDIT_ACTIVE_EMOTE":return Object(v.a)(Object(v.a)({},e),{},{activeEmote:t.activeEmote});case"RESET_BOARD":return Object(v.a)(Object(v.a)({},e),{},{board:Object(x.a)(e.board.map((function(e){return!1})))});default:return e}}));i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(s.a,{store:h,children:Object(o.jsx)(f,{})})}),document.getElementById("root"))}},[[420,1,2]]]);
//# sourceMappingURL=main.f2d6a074.chunk.js.map