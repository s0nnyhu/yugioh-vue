(function(e){function t(t){for(var r,u,o=t[0],l=t[1],i=t[2],b=0,f=[];b<o.length;b++)u=o[b],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/yugioh-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1076:function(e,t,n){"use strict";n("faa2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,u){var o=Object(r["s"])("CardsTable");return Object(r["m"])(),Object(r["c"])(o)}var c=n("1da1"),u=(n("96cf"),n("4de4"),n("caad"),n("2532"),n("b680"),n("d3b7"),n("d4ec")),o=n("262e"),l=n("2caf"),i=n("9072"),s=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(Object(i["a"])(Error));function b(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,!(n.status>=200&&n.status<400)){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:if(404!==n.status){e.next=9;break}throw new s;case 9:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(e){var t=Object(r["p"])(!1),n=Object(r["p"])([]),a=Object(r["p"])([]),u=Object(r["p"])(!1),o=function(){var r=Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.value=!0,r.prev=1,r.next=4,b(e);case 4:a.value=r.sent,n.value=a.value,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),u.value="Aie Aie Aie :/";case 11:t.value=!1;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();return{loading:t,STATIC_DATA:n,data:a,error:u,fetchData:o}}var j={class:"filter"},O={for:"search"},d=Object(r["g"])(" Search ( "),v=Object(r["g"])(", "),h=Object(r["g"])(", "),y=Object(r["g"])(") : "),m={key:0},g={key:1},w={id:"cards-table"},x={key:0},k=Object(r["f"])("th",{class:"th-year"},"Year",-1),_=Object(r["f"])("th",{class:"th-set"},"Set",-1),C=Object(r["f"])("th",null,"Language",-1),L=Object(r["f"])("th",null,"ID",-1),T=Object(r["f"])("th",{class:"th-name"},"Name",-1),P=Object(r["f"])("th",{class:"th-rarity"},"Rarity",-1),S=Object(r["f"])("th",null,"Quantity",-1),A=Object(r["f"])("th",null,"Edition",-1),M={class:"help-cursor"},R={setup:function(e){var t=Object(r["p"])("https://raw.githubusercontent.com/s0nnyhu/yugioh/develop/data.json"),n=Object(r["p"])(""),a=Object(r["p"])(!1),u=p(t.value),o=u.loading,l=u.error,i=u.STATIC_DATA,s=u.data,b=u.fetchData;function f(e){return R.apply(this,arguments)}function R(){return R=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name="+t.card_name);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",'<img src="'.concat(r.data[0]["card_images"][0].image_url,'">'));case 7:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function z(){s.value=i.value,s.value=s.value.filter((function(e){return e.card_name.toLowerCase().includes(n.value.toLowerCase())||e.rarity.toLowerCase().includes(n.value.toLowerCase())||e.card_set.toLowerCase().includes(n.value.toLowerCase())}))}function q(e){var t=e.target.dataset.label,n=document.querySelector(".th-".concat(t));"mouseover"==e.type?n.classList.add("blink"):n.classList.remove("blink")}function D(e,t){return(e*t).toFixed(2)||0}return Object(r["l"])((function(){b(),window.addEventListener("keydown",(function(e){e.altKey&&"p"===e.key&&(a.value=!a.value)}))})),function(e,t){var c=Object(r["t"])("tooltip");return Object(r["m"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",j,[Object(r["f"])("label",O,[d,Object(r["f"])("span",{class:"help-cursor","data-label":"set",onMouseover:q,onMouseleave:q,alt:"Card Set"},"set",32),v,Object(r["f"])("span",{class:"help-cursor","data-label":"name",onMouseover:q,onMouseleave:q,alt:"Card Name"},"name",32),h,Object(r["f"])("span",{class:"help-cursor","data-label":"rarity",onMouseover:q,onMouseleave:q,alt:"Card Rarity"},"rarity",32),y]),Object(r["z"])(Object(r["f"])("input",{id:"input-search",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.value=e}),onChange:z,placeholder:"Type any set, name or rarity"},null,544),[[r["w"],n.value]])]),Object(r["v"])(l)?(Object(r["m"])(),Object(r["e"])("p",m,Object(r["u"])(Object(r["v"])(l)),1)):Object(r["d"])("",!0),Object(r["v"])(o)?(Object(r["m"])(),Object(r["e"])("p",g,"Loading...")):Object(r["d"])("",!0),Object(r["f"])("div",w,[Object(r["v"])(o)||Object(r["v"])(l)?Object(r["d"])("",!0):(Object(r["m"])(),Object(r["e"])("table",x,[Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[k,_,C,L,T,P,S,A,Object(r["z"])(Object(r["f"])("th",null,"Unique Price",512),[[r["x"],a.value]]),Object(r["z"])(Object(r["f"])("th",null,"Total Price",512),[[r["x"],a.value]])])]),Object(r["f"])("tbody",null,[(Object(r["m"])(!0),Object(r["e"])(r["a"],null,Object(r["q"])(Object(r["v"])(s),(function(e,t){return Object(r["m"])(),Object(r["e"])("tr",{key:t},[Object(r["f"])("td",null,Object(r["u"])(e.year),1),Object(r["f"])("td",null,Object(r["u"])(e.card_set),1),Object(r["f"])("td",null,Object(r["u"])(e.language),1),Object(r["f"])("td",null,Object(r["u"])(e.card_id),1),Object(r["z"])(Object(r["f"])("td",M,[Object(r["g"])(Object(r["u"])(e.card_name),1)],512),[[c,{content:function(){return f(e)},html:!0,trigger:"click",placement:"bottom-start",loadingContent:"<i>Loading...</i>"}]]),Object(r["f"])("td",null,Object(r["u"])(e.rarity),1),Object(r["f"])("td",null,Object(r["u"])(e.quantity),1),Object(r["f"])("td",null,Object(r["u"])(e.card_edition),1),Object(r["z"])(Object(r["f"])("td",null,Object(r["u"])(e.cardmarket_price)+" €",513),[[r["x"],a.value]]),Object(r["z"])(Object(r["f"])("td",null,Object(r["u"])(D(e.quantity,e.cardmarket_price))+" €",513),[[r["x"],a.value]])])})),128))])]))])],64)}}},z=(n("98bb"),R),q={name:"App",components:{CardsTable:z}};n("1076");q.render=a;var D=q,E=n("e37d"),I=(n("096e"),Object(r["b"])(D));I.directive("tooltip",E["c"]),I.directive("close-popover",E["VClosePopover"]),I.component("v-popover",E["VPopover"]),I.mount("#app")},"98bb":function(e,t,n){"use strict";n("b8c1")},b8c1:function(e,t,n){},faa2:function(e,t,n){}});
//# sourceMappingURL=app.14d95bc8.js.map