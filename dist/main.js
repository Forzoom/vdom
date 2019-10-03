!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.htmlDomApi={createElement:function(e){return document.createElement(e)},createElementNS:function(e,t){return document.createElementNS(e,t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType}},t.default=t.htmlDomApi},function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.class,a=t.data.class;if((i||a)&&i!==a){for(r in a=a||{},i=i||{})a[r]||o.classList.remove(r);for(r in a)(n=a[r])!==i[r]&&o.classList[n?"add":"remove"](r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.classModule={create:r,update:r},t.default=t.classModule},function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.props,a=t.data.props;if((i||a)&&i!==a){for(n in a=a||{},i=i||{})a[n]||delete o[n];for(n in a)r=a[n],i[n]===r||"value"===n&&o[n]===r||(o[n]=r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.propsModule={create:r,update:r},t.default=t.propsModule},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof window&&window.requestAnimationFrame.bind(window)||setTimeout,o=function(e){r(function(){r(e)})},i=!1;function a(e,t,n){o(function(){e[t]=n})}function l(e,t){var n,r,o=t.elm,i=e.data.style,l=t.data.style;if((i||l)&&i!==l){l=l||{};var u="delayed"in(i=i||{});for(r in i)l[r]||("-"===r[0]&&"-"===r[1]?o.style.removeProperty(r):o.style[r]="");for(r in l)if(n=l[r],"delayed"===r&&l.delayed)for(var d in l.delayed)n=l.delayed[d],u&&n===i.delayed[d]||a(o.style,d,n);else"remove"!==r&&n!==i[r]&&("-"===r[0]&&"-"===r[1]?o.style.setProperty(r,n):o.style[r]=n)}}t.styleModule={pre:function(){i=!1},create:l,update:l,destroy:function(e){var t,n,r=e.elm,o=e.data.style;if(o&&(t=o.destroy))for(n in t)r.style[n]=t[n]},remove:function(e,t){var n=e.data.style;if(n&&n.remove){i||(getComputedStyle(document.body).transform,i=!0);var r,o=e.elm,a=0,l=n.remove,u=0,d=[];for(r in l)d.push(r),o.style[r]=l[r];for(var s=getComputedStyle(o)["transition-property"].split(", ");a<s.length;++a)-1!==d.indexOf(s[a])&&u++;o.addEventListener("transitionend",function(e){e.target===o&&--u,0===u&&t()})}else t()}},t.default=t.styleModule},function(e,t,n){"use strict";function r(e,t){var n=e.type,r=t.data.on;r&&r[n]&&function e(t,n,r){if("function"==typeof t)t.call(n,r,n);else if("object"==typeof t)if("function"==typeof t[0])if(2===t.length)t[0].call(n,t[1],r,n);else{var o=t.slice(1);o.push(r),o.push(n),t[0].apply(n,o)}else for(var i=0;i<t.length;i++)e(t[i],n,r)}(r[n],t,e)}function o(e,t){var n,o=e.data.on,i=e.listener,a=e.elm,l=t&&t.data.on,u=t&&t.elm;if(o!==l){if(o&&i)if(l)for(n in o)l[n]||a.removeEventListener(n,i,!1);else for(n in o)a.removeEventListener(n,i,!1);if(l){var d=t.listener=e.listener||function e(t){r(t,e.vnode)};if(d.vnode=t,o)for(n in l)o[n]||u.addEventListener(n,d,!1);else for(n in l)u.addEventListener(n,d,!1)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.eventListenersModule={create:o,update:o,destroy:o},t.default=t.eventListenersModule},function(e,t,n){"use strict";function r(e,t,n,r,o){return{sel:e,data:t,children:n,text:r,elm:o,key:void 0===t?void 0:t.key}}n.r(t);var o=r,i=Array.isArray;function a(e){return"string"==typeof e||"number"==typeof e}var l={createElement:function(e){return document.createElement(e)},createElementNS:function(e,t){return document.createElementNS(e,t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType}};function u(e,t,n){var o,l,u,d={};if(void 0!==n?(d=t,i(n)?o=n:a(n)?l=n:n&&n.sel&&(o=[n])):void 0!==t&&(i(t)?o=t:a(t)?l=t:t&&t.sel?o=[t]:d=t),void 0!==o)for(u=0;u<o.length;++u)a(o[u])&&(o[u]=r(void 0,void 0,void 0,o[u],void 0));return"s"!==e[0]||"v"!==e[1]||"g"!==e[2]||3!==e.length&&"."!==e[3]&&"#"!==e[3]||function e(t,n,r){if(t.ns="http://www.w3.org/2000/svg","foreignObject"!==r&&void 0!==n)for(var o=0;o<n.length;++o){var i=n[o].data;void 0!==i&&e(i,n[o].children,n[o].sel)}}(d,o,e),r(e,d,o,l,void 0)}function d(e){return void 0===e}function s(e){return void 0!==e}var f=o("",{},[],void 0,void 0);function c(e,t){return e.key===t.key&&e.sel===t.sel}function m(e,t,n){var r,o,i,a={};for(r=t;r<=n;++r)null!=(i=e[r])&&void 0!==(o=i.key)&&(a[o]=r);return a}var v=["create","update","remove","destroy","pre","post"];n(1),n(2),n(3),n(4);var p=n(0),y=n.n(p);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logStore=r,this.eid=0,this.replayElm={};var o=this.eid++;t.dataset.eid=o,this.replayElm[o]=n}var t,n,r;return t=e,(n=[{key:"getReplayElm",value:function(e){if(e)return y.a.isElement(e)?this.replayElm[e.dataset.eid]:y.a.isText(e)||y.a.isComment(e)?this.replayElm[e.eid]:void 0}},{key:"createElement",value:function(e){var t=y.a.createElement(e),n=t.cloneNode(!1),r=this.eid++;return t.dataset.eid=r,this.replayElm[r]=n,this.logStore.push({type:"createElement",args:[e],elm:n}),t}},{key:"createElementNS",value:function(e,t){}},{key:"createTextNode",value:function(e){var t=y.a.createTextNode(e),n=t.cloneNode(!1),r=this.eid++;return t.eid=r,this.replayElm[r]=n,this.logStore.push({type:"createTextNode",args:[e],elm:n}),t}},{key:"createComment",value:function(e){var t=y.a.createComment(e),n=t.cloneNode(!1),r=this.eid++;return t.eid=r,this.replayElm[r]=n,this.logStore.push({type:"createComment",args:[e],elm:n}),t}},{key:"insertBefore",value:function(e,t,n){return this.logStore.push({type:"insertBefore",args:[this.getReplayElm(e),this.getReplayElm(t),this.getReplayElm(n)]}),y.a.insertBefore(e,t,n)}},{key:"removeChild",value:function(e,t){return this.logStore.push({type:"removeChild",args:[this.getReplayElm(e),this.getReplayElm(t)]}),y.a.removeChild(e,t)}},{key:"appendChild",value:function(e,t){return this.logStore.push({type:"appendChild",args:[this.getReplayElm(e),this.getReplayElm(t)]}),y.a.appendChild(e,t)}},{key:"parentNode",value:function(e){return y.a.parentNode(e)}},{key:"nextSibling",value:function(e){return y.a.nextSibling(e)}},{key:"tagName",value:function(e){return e.tagName}},{key:"setTextContent",value:function(e,t){return this.logStore.push({type:"setTextContent",args:[this.getReplayElm(e),t]}),y.a.setTextContent(e,t)}},{key:"getTextContent",value:function(e){return y.a.getTextContent(e)}},{key:"isElement",value:function(e){return y.a.isElement(e)}},{key:"isText",value:function(e){return y.a.isText(e)}},{key:"isComment",value:function(e){return y.a.isComment(e)}}])&&h(t.prototype,n),r&&h(t,r),e}(),x=document.getElementById("container"),C=document.getElementById("presentation"),E=(document.getElementById("pending"),new g(x,C,[])),T=function(e,t){var n,r,u={},p=void 0!==t?t:l;for(n=0;n<v.length;++n)for(u[v[n]]=[],r=0;r<e.length;++r){var y=e[r][v[n]];void 0!==y&&u[v[n]].push(y)}function h(e,t){return function(){if(0==--t){var n=p.parentNode(e);p.removeChild(n,e)}}}function g(e,t){var n,r=e.data;void 0!==r&&s(n=r.hook)&&s(n=n.init)&&(n(e),r=e.data);var o=e.children,l=e.sel;if("!"===l)d(e.text)&&(e.text=""),e.elm=p.createComment(e.text);else if(void 0!==l){var c=l.indexOf("#"),m=l.indexOf(".",c),v=c>0?c:l.length,y=m>0?m:l.length,h=-1!==c||-1!==m?l.slice(0,Math.min(v,y)):l,x=e.elm=s(r)&&s(n=r.ns)?p.createElementNS(n,h):p.createElement(h);for(v<y&&x.setAttribute("id",l.slice(v+1,y)),m>0&&x.setAttribute("class",l.slice(y+1).replace(/\./g," ")),n=0;n<u.create.length;++n)u.create[n](f,e);if(i(o))for(n=0;n<o.length;++n){var C=o[n];null!=C&&p.appendChild(x,g(C,t))}else a(e.text)&&p.appendChild(x,p.createTextNode(e.text));s(n=e.data.hook)&&(n.create&&n.create(f,e),n.insert&&t.push(e))}else e.elm=p.createTextNode(e.text);return e.elm}function x(e,t,n,r,o,i){for(;r<=o;++r){var a=n[r];null!=a&&p.insertBefore(e,g(a,i),t)}}function C(e){var t,n,r=e.data;if(void 0!==r){for(s(t=r.hook)&&s(t=t.destroy)&&t(e),t=0;t<u.destroy.length;++t)u.destroy[t](e);if(void 0!==e.children)for(n=0;n<e.children.length;++n)null!=(t=e.children[n])&&"string"!=typeof t&&C(t)}}function E(e,t,n,r){for(;n<=r;++n){var o=void 0,i=void 0,a=void 0,l=t[n];if(null!=l)if(s(l.sel)){for(C(l),i=u.remove.length+1,a=h(l.elm,i),o=0;o<u.remove.length;++o)u.remove[o](l,a);s(o=l.data)&&s(o=o.hook)&&s(o=o.remove)?o(l,a):a()}else p.removeChild(e,l.elm)}}function T(e,t,n){var r,o;s(r=t.data)&&s(o=r.hook)&&s(r=o.prepatch)&&r(e,t);var i=t.elm=e.elm,a=e.children,l=t.children;if(e!==t){if(void 0!==t.data){for(r=0;r<u.update.length;++r)u.update[r](e,t);s(r=t.data.hook)&&s(r=r.update)&&r(e,t)}d(t.text)?s(a)&&s(l)?a!==l&&function(e,t,n,r){for(var o,i,a,l=0,u=0,s=t.length-1,f=t[0],v=t[s],y=n.length-1,h=n[0],C=n[y];l<=s&&u<=y;)null==f?f=t[++l]:null==v?v=t[--s]:null==h?h=n[++u]:null==C?C=n[--y]:c(f,h)?(T(f,h,r),f=t[++l],h=n[++u]):c(v,C)?(T(v,C,r),v=t[--s],C=n[--y]):c(f,C)?(T(f,C,r),p.insertBefore(e,f.elm,p.nextSibling(v.elm)),f=t[++l],C=n[--y]):c(v,h)?(T(v,h,r),p.insertBefore(e,v.elm,f.elm),v=t[--s],h=n[++u]):(void 0===o&&(o=m(t,l,s)),d(i=o[h.key])?(p.insertBefore(e,g(h,r),f.elm),h=n[++u]):((a=t[i]).sel!==h.sel?p.insertBefore(e,g(h,r),f.elm):(T(a,h,r),t[i]=void 0,p.insertBefore(e,a.elm,f.elm)),h=n[++u]));(l<=s||u<=y)&&(l>s?x(e,null==n[y+1]?null:n[y+1].elm,n,u,y,r):E(e,t,l,s))}(i,a,l,n):s(l)?(s(e.text)&&p.setTextContent(i,""),x(i,null,l,0,l.length-1,n)):s(a)?E(i,a,0,a.length-1):s(e.text)&&p.setTextContent(i,""):e.text!==t.text&&(s(a)&&E(i,a,0,a.length-1),p.setTextContent(i,t.text)),s(o)&&s(r=o.postpatch)&&r(e,t)}}return function(e,t){var n,r,i,a=[];for(n=0;n<u.pre.length;++n)u.pre[n]();for(function(e){return void 0!==e.sel}(e)||(e=function(e){var t=e.id?"#"+e.id:"",n=e.className?"."+e.className.split(" ").join("."):"";return o(p.tagName(e).toLowerCase()+t+n,{},[],void 0,e)}(e)),c(e,t)?T(e,t,a):(r=e.elm,i=p.parentNode(r),g(t,a),null!==i&&(p.insertBefore(i,t.elm,p.nextSibling(r)),E(i,[e],0,0))),n=0;n<a.length;++n)a[n].data.hook.insert(a[n]);for(n=0;n<u.post.length;++n)u.post[n]();return t}}([],E),b=u("div#container",[u("div",{key:1},"1"),u("div",{key:2},"2")]);T(x,b),T(b,u("div#container",[u("div",{key:3},"3"),u("div",{key:4},"4")]));var N=E.logStore,k=0,S=setInterval(function(){if(!N[k]&&S)return clearInterval(S),void(S=null);var e=N[k];if(console.log(e.type),"createElement"===e.type)e.elm.classList.add("hidden");else if("createTextNode"===e.type);else if("appendChild"===e.type||"insertBefore"===e.type||"setTextContent"===e.type){y.a[e.type].apply(y.a,e.args);for(var t=function(t){var n=e.args[t];n&&y.a.isElement(n)&&n.classList.contains("hidden")&&window.setTimeout(function(){n.classList.remove("hidden")},10)},n=1;n<e.args.length;n++)t(n)}else if("removeChild"===e.type)for(var r=1;r<e.args.length;r++){var o=e.args[r];console.log("target1"),o&&y.a.isElement(o)&&(o.classList.add("hidden"),o.addEventListener("transitionend",function(){console.log("target2",e.args),y.a[e.type].apply(y.a,e.args)}))}k++},500)}]);