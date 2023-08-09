!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var n={},t={},i={},a={}.hasOwnProperty,r=/^\.\.?(\/|$)/,l=function(e,n){for(var t,i=[],a=(r.test(n)?e+"/"+n:n).split("/"),l=0,s=a.length;l<s;l++)t=a[l],".."===t?i.pop():"."!==t&&""!==t&&i.push(t);return i.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},c=function(n){return function(t){var i=l(s(n),t);return e.require(i,n)}},o=function(e,n){var i=v&&v.createHot(e),a={id:e,exports:{},hot:i};return t[e]=a,n(a.exports,c(e),a),a.exports},d=function(e){return i[e]?d(i[e]):e},u=function(e,n){return d(l(s(e),n))},h=function(e,i){null==i&&(i="/");var r=d(e);if(a.call(t,r))return t[r].exports;if(a.call(n,r))return o(r,n[r]);throw new Error("Cannot find module '"+e+"' from '"+i+"'")};h.alias=function(e,n){i[n]=e};var f=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,g=function(e){if(f.test(e)){var n=e.replace(f,"");a.call(i,n)&&i[n].replace(f,"")!==n+"/index"||(i[n]=e)}if(p.test(e)){var t=e.replace(p,"");a.call(i,t)||(i[t]=e)}};h.register=h.define=function(e,i){if(e&&"object"==typeof e)for(var r in e)a.call(e,r)&&h.register(r,e[r]);else n[e]=i,delete t[e],g(e)},h.list=function(){var e=[];for(var t in n)a.call(n,t)&&e.push(t);return e};var v=e._hmr&&new e._hmr(u,h,n,t);h._cache=t,h.hmr=v&&v.wrap,h.brunch=!0,e.require=h}}(),function(){"undefined"==typeof window?this:window;require.register("init.js",function(e,n,t){!function(n,i){"object"==typeof e&&"undefined"!=typeof t?i():"function"==typeof define&&define.amd?define(i):i()}(this,function(){"use strict";function e(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}var t=n("./js/UI.js"),i=e(t);window.addEventListener("load",function(){var e=document.body.children[0],n=document.getElementById("Start").children[2],t={wrapper:n,question:n.children[0],answer:n.children[1],input:n.children[2]},a={hiragana:document.getElementById("Hiragana"),katakana:document.getElementById("Katakana")},r={hiragana:{tables:{simple:a.hiragana.children[1].children[1].children[0],"double":a.hiragana.children[1].children[1].children[1]},left:a.hiragana.children[1].children[0],right:a.hiragana.children[1].children[2],select_all:a.hiragana.children[2].children[0],reset_all:a.hiragana.children[2].children[1]},katakana:{tables:{simple:a.katakana.children[1].children[1].children[0],"double":a.katakana.children[1].children[1].children[1],extra:a.katakana.children[1].children[1].children[2]},left:a.katakana.children[1].children[0],right:a.katakana.children[1].children[2],select_all:a.katakana.children[2].children[0],reset_all:a.katakana.children[2].children[1]}};i.init_kana_tables(r);var l=i.hash_change(e),s=i.init_start(t,r);l(),s(),window.addEventListener("hashchange",l),window.addEventListener("hashchange",s)})})}),require.register("js/UI.js",function(e,n,t){!function(n,i){"object"==typeof e&&"undefined"!=typeof t?i():"function"==typeof define&&define.amd?define(i):i()}(this,function(){"use strict";function t(e,n){var t=[],i=[],a=function(e){if(e.children[0].children[0].checked)for(var n=1;n<e.children.length;n+=1){var t=e.children[n];/\w+/.test(t.title)&&i.push({kana:t.innerHTML,romaji:t.title})}},r=function(){for(var e=n.hiragana.tables.simple.children,r=n.katakana.tables.simple.children,l=0;l<e.length;l+=1)a(e[l]),a(r[l]);for(var s=n.hiragana.tables["double"].children,c=n.katakana.tables["double"].children,o=0;o<s.length;o+=1)a(s[o]),a(c[o]);for(var d=n.katakana.tables.extra.children,u=0;u<d.length;u+=1)a(d[u]);t=i.slice(0)},l=function(){if(0===i.length){if(0===t.length)return;i=t.slice(0)}var e=Math.floor(Math.random()*i.length);return i.splice(e,1)[0]},s=function(){var n=l();return void 0!==n&&(e.answer.style.visibility="hidden",e.answer.innerHTML=n.romaji,e.question.className=e.question.className.replace(/ *animate_fade_in */,""),void e.question.offsetWidth,e.question.innerHTML=n.kana,e.question.className+=" animate_fade_in",!0)},c=function(n){var t=e.answer.textContent.toLowerCase(),i=n.target.value.toLowerCase();i===t?(n.target.value="",n.target.className=n.target.className.replace(" wrong",""),s()):i.length>=t.length?/wrong/.test(n.target.className)||(n.target.className+=" wrong"):n.target.className=n.target.className.replace(" wrong","")},o=function(){e.answer.style.visibility=""};return function(){if("#Start"===location.hash){if(r(),!s())return;e.input.disabled=!1,e.input.addEventListener("input",c),e.question.addEventListener("mouseover",o)}else i.length=0,t.length=0,e.input.disabled=!0,e.answer.innerHTML="　",e.question.innerHTML="　",e.answer.style.visibility="hidden",e.input.className=e.input.className.replace(" wrong",""),e.input.removeEventListener("input",c),e.question.removeEventListener("mouseover",o)}}function i(e){return function(){for(var n=new RegExp((location.hash?location.hash:"#")+"$"),t=e.children.length,i=e.children,a=0;a<t;a+=1)i[a].className=i[a].className.replace(" selected","");for(var r=0;r<t;r+=1){var l=i[r];if(n.test(l.href)){l.className+=" selected";break}}}}function a(e){if(!/input/i.test(e.target.tagName)&&!/table/.test(e.target.className)){var n=(0,o.look_up_parent_until)(e.target,"div","column"),t=n.children[0].children[0];t.checked=!t.checked}}function r(e){for(var n=e.target.nextElementSibling,t=n.children.length,i=0;i<t;i++){var a=n.children[i];if("none"!==a.style.display){var r=a.style.display;return void(a.previousElementSibling?(a.style.display="none",a.previousElementSibling.style.display=r):(a.style.display="none",n.children[t-1].style.display=r))}}}function l(e){for(var n=e.target.previousElementSibling,t=n.children.length,i=0;i<t;i++){var a=n.children[i];if("none"!==a.style.display){var r=a.style.display;return void(a.nextElementSibling?(a.style.display="none",a.nextElementSibling.style.display=r):(a.style.display="none",n.children[0].style.display=r))}}}function s(e,n){var t=Object.keys(e),i=t.length;return function(){for(var a=0;a<i;a++){var r=e[t[a]];if("none"!==r.style.display){for(var l=r.children,s=l.length,c=0;c<s;c+=1)l[c].children[0].children[0].checked=n;break}}}}function c(e){for(var n=Object.keys(e),t=n.length,i=0;i<t;i++){var c=e[n[i]];c.tables["double"].style.display="none","extra"in c.tables&&(c.tables.extra.style.display="none",c.tables.extra.addEventListener("click",a)),c.tables.simple.addEventListener("click",a),c.tables["double"].addEventListener("click",a),c.left.addEventListener("click",r),c.right.addEventListener("click",l),c.select_all.addEventListener("click",s(c.tables,!0)),c.reset_all.addEventListener("click",s(c.tables,!1))}}Object.defineProperty(e,"__esModule",{value:!0}),e.init_start=t,e.hash_change=i,e.init_kana_tables=c;var o=n("./utils.js")})}),require.register("js/utils.js",function(e,n,t){!function(n,i){"object"==typeof e&&"undefined"!=typeof t?i():"function"==typeof define&&define.amd?define(i):i()}(this,function(){"use strict";function n(e,n,t){for(var i=new RegExp(n?n:".*","i"),a=new RegExp(t?t:".*","i"),r=e.parentElement;null!==r;r=r.parentElement)if(i.test(r.tagName)&&a.test(r.className))return r;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.look_up_parent_until=n})}),require.register("___globals___",function(e,n,t){})}(),require("___globals___"),require("init");