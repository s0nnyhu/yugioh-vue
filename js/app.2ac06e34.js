(function(e){function t(t){for(var r,u,l=t[0],o=t[1],i=t[2],f=0,j=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&j.push(c[u][0]),c[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);b&&b(t);while(j.length)j.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var b=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1076:function(e,t,n){"use strict";n("faa2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,u){var l=Object(r["k"])("CardsTable");return Object(r["h"])(),Object(r["c"])(l)}n("4de4"),n("caad"),n("2532"),n("b680");var a=n("1da1"),u=(n("96cf"),n("d4ec")),l=n("262e"),o=n("2caf"),i=n("9072"),b=(n("d3b7"),function(e){Object(l["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(Object(i["a"])(Error)));function f(e){return j.apply(this,arguments)}function j(){return j=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,!(n.status>=200&&n.status<400)){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:if(404!==n.status){e.next=9;break}throw new b;case 9:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function O(e){var t=Object(r["i"])(!1),n=Object(r["i"])([]),c=Object(r["i"])([]),u=Object(r["i"])(!1),l=function(){var r=Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.value=!0,r.prev=1,r.next=4,f(e);case 4:c.value=r.sent,n.value=c.value,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),u.value="Aie Aie Aie :/";case 11:t.value=!1;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();return{loading:t,STATIC_DATA:n,data:c,error:u,fetchData:l}}var s={class:"filter"},d=Object(r["f"])("label",{for:"search"},"Search :",-1),p={key:0},h={key:1},v={id:"cards-table"},y={key:0},m=Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[Object(r["f"])("th",null,"Year"),Object(r["f"])("th",null,"Set"),Object(r["f"])("th",null,"Language"),Object(r["f"])("th",null,"ID"),Object(r["f"])("th",null,"Name"),Object(r["f"])("th",null,"Rarity"),Object(r["f"])("th",null,"Quantity"),Object(r["f"])("th",null,"Edition"),Object(r["f"])("th",null,"Unique Price"),Object(r["f"])("th",null,"Total Price")])],-1),g={setup:function(e){var t=Object(r["i"])("https://raw.githubusercontent.com/s0nnyhu/yugioh/develop/data.json"),n=Object(r["i"])(""),c=O(t.value),a=c.loading,u=c.error,l=c.STATIC_DATA,o=c.data,i=c.fetchData;function b(){o.value=l.value,o.value=o.value.filter((function(e){return e.card_name.toLowerCase().includes(n.value.toLowerCase())||e.rarity.toLowerCase().includes(n.value.toLowerCase())||e.card_set.toLowerCase().includes(n.value.toLowerCase())}))}function f(e,t){return(e*t).toFixed(2)||0}return Object(r["g"])((function(){i(),console.log("Hello there")})),function(e,t){return Object(r["h"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",s,[d,Object(r["o"])(Object(r["f"])("input",{id:"search",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.value=e}),onChange:b},null,544),[[r["n"],n.value]])]),Object(r["m"])(u)?(Object(r["h"])(),Object(r["e"])("p",p,Object(r["l"])(Object(r["m"])(u)),1)):Object(r["d"])("",!0),Object(r["m"])(a)?(Object(r["h"])(),Object(r["e"])("p",h,"Loading...")):Object(r["d"])("",!0),Object(r["f"])("div",v,[Object(r["m"])(a)||Object(r["m"])(u)?Object(r["d"])("",!0):(Object(r["h"])(),Object(r["e"])("table",y,[m,Object(r["f"])("tbody",null,[(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(Object(r["m"])(o),(function(e,t){return Object(r["h"])(),Object(r["e"])("tr",{key:t},[Object(r["f"])("td",null,Object(r["l"])(e.year),1),Object(r["f"])("td",null,Object(r["l"])(e.card_set),1),Object(r["f"])("td",null,Object(r["l"])(e.language),1),Object(r["f"])("td",null,Object(r["l"])(e.card_id),1),Object(r["f"])("td",null,Object(r["l"])(e.card_name),1),Object(r["f"])("td",null,Object(r["l"])(e.rarity),1),Object(r["f"])("td",null,Object(r["l"])(e.quantity),1),Object(r["f"])("td",null,Object(r["l"])(e.card_edition),1),Object(r["f"])("td",null,Object(r["l"])(e.cardmarket_price)+" €",1),Object(r["f"])("td",null,Object(r["l"])(f(e.quantity,e.cardmarket_price))+" €",1)])})),128))])]))])],64)}}},w=(n("9748"),g),x={name:"App",components:{CardsTable:w}};n("1076");x.render=c;var _=x;Object(r["b"])(_).mount("#app")},"58ed":function(e,t,n){},9748:function(e,t,n){"use strict";n("58ed")},faa2:function(e,t,n){}});
//# sourceMappingURL=app.2ac06e34.js.map