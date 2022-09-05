(()=>{"use strict";var n={43:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},313:n=>{n.exports=function(n){return n[1]}},648:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(313),r=t.n(o),a=t(43),i=t.n(a)()(r());i.push([n.id,"body{\n    background-color: #F7F9F9;\n    margin: 0;\n}\n\nnav{\n    font-family: 'Kanit', sans-serif;\n}\n\n.logo {\n    width: 15%;\n}\n\n.logo > img {\n    width: 25%;\n}\n\nh1{\n    font-family: 'Kanit', sans-serif;\n    color: #135359;\n    font-size: 60px;\n    text-align: center;\n    margin-top: 75px;\n    font-weight: 700;\n}\n\nh2{\n    font-family: 'Kanit', sans-serif;\n    color: #135359;\n    font-weight:300;\n    font-size: 40px;\n    text-align: center;\n}\n\n#randomTitle{\n    font-family: 'Kanit', sans-serif;\n    color: #135359;\n    font-weight:500;\n    font-size: 35px;\n    text-align: center;\n}\n\nh3{\n    font-family: 'Kanit', sans-serif;\n    color: #135359;\n    font-weight:500;\n    font-size: 35px;\n    text-align: center;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n#intro{\n    font-family: 'Kanit', sans-serif;\n    font-size: 25px;\n    text-align: center;\n    font-weight: 100;\n}\n\nimg{\n    width: 200px;\n    \n}\n\nul\n{\n    font-size: 20px;\n    font-family: 'Kanit', sans-serif;\n    font-weight: 300;\n    text-align: center;\n    PADDING-RIGHT: 0px;\n    \n    FLOAT: left;\n    PADDING-BOTTOM: 0px;\n    MARGIN: 15px 0px;\n    WIDTH: 100%;\n    PADDING-TOP: 0px;\n    LIST-STYLE-TYPE: none\n}\n\nul li {\n    PADDING-RIGHT: 2px;\n    DISPLAY: inline;\n    PADDING-LEFT: 2px;\n    FLOAT: left;\n    PADDING-BOTTOM: 2px;\n    WIDTH: 30%;\n    PADDING-TOP: 2px\n}\n\n#ingredients > li{\n    font-size: 18px;\n    font-family: 'Kanit', sans-serif;\n    font-weight: 200;\n    line-height: 1;\n    WIDTH: 50%;\n}\n\n.row{\n        font-family: 'Kanit', sans-serif;\n        font-size: 20px;\n        font-weight: 300;\n}\n\nbutton{\n    margin: 10px 5px;\n}\n\n.btn-primary{\n    background-color: #135359;\n    border-color: #135359;\n}\n\n#app{\n    background-color: #E5E7E9;\n    padding: 5% 15%;\n    font-family: 'Kanit', sans-serif;\n    font-size: 20px;\n    margin-top: 20px;\n    font-weight: 200;\n    \n}\n\n#randomRecipe{\n    text-align: center;\n}\n\n#areaRecipes{\n    text-align: center;\n}\n\n#subtitulo{\n    font-size: 25px;\n    color: #135359;\n    font-weight: 500;\n    margin-top: 15px;\n}\n\n#subtitulo2{\n    font-size: 25px;\n    color: #135359;\n    font-weight: 500;\n    margin-top: 15px;\n}\n\n.recipes{\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 0.25rem;\n    margin-bottom: 10px;\n}\n\n#randomRecipe{\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 0.25rem;\n    margin-bottom: 10px;\n}\n\n.card-title{\n    color: #135359;\n}\n\n@media (max-width: 620px){\n    .navbar-text{\n        display: none;\n    }\n}\n",""]);const c=i},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(648),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t.p;var h=document.getElementById("app"),g=document.getElementById("random"),v=document.getElementById("clear"),x=document.getElementById("clear2"),b=document.getElementById("search"),y=document.getElementById("text"),E=0;function w(n){return"".concat(n.strMeal)}function T(n){return"".concat(n.strMealThumb)}function I(n){var e=document.createElement("ul");e.id="ingredients";for(var t=Object.entries(n),o=[],r=29,a=9;a<=28&&t[a][1];a++)o.push(t[a][1],t[r][1]),r++;for(var i=[],c=0,d="",s=0;s<o.length;s+=2){i[c]=document.createElement("li"),d="".concat("").concat(o.slice(s,s+2),"\n").replace(/,/g,":");var l=document.createTextNode(d);i[c].appendChild(l),c++,l="",d=""}for(var p=0,u=i;p<u.length;p++){var f=u[p];e.appendChild(f)}return console.log("en getingredients",e),e}function C(n){return"".concat(n.strInstructions)}b.addEventListener("mousedown",(function(n){var e,t;0===n.button&&(console.log(y.value),(e=y.value,t="".concat("https://www.themealdb.com/api/json/v1/1/filter.php?a","=").concat(e),fetch(t).then((function(n){return n.json()}))).then((function(n){console.log(n);var e=document.createElement("div");e.id="areaRecipes",h.appendChild(e),n.meals.forEach((function(n){var t=function(n){return"".concat(n.idMeal)}(n),o=document.createElement("div");o.className="recipes";var r=document.createElement("h3"),a=document.createTextNode(w(n)),i=document.createElement("img");i.src=T(n),i.id="img".concat(E),document.createElement("p"),e.appendChild(o),r.appendChild(a),o.appendChild(r),o.appendChild(i);var c=document.createElement("section");c.id="section".concat(E),c.style.display="none",o.appendChild(c),function(n){var e="".concat("https://www.themealdb.com/api/json/v1/1/lookup.php?i","=").concat(n);return fetch(e).then((function(n){return n.json()}))}(t).then((function(n){n.meals.forEach((function(n){var e=document.createElement("p");e.id="subtitulo";var t=document.createTextNode("Ingredients:"),o=I(n),r=document.createElement("p");r.id="subtitulo2";var a=document.createTextNode("Instructions:"),i=document.createElement("p"),d=document.createTextNode(C(n));e.appendChild(t),c.appendChild(e),c.appendChild(o),r.appendChild(a),c.appendChild(r),i.appendChild(d),c.appendChild(i)}))})),E++})),function(n){var e=[];console.log("Funcion createButtons",n);for(var t=0;t<n;t++)e.push(document.getElementById("img".concat(t))),e.push(document.getElementById("section".concat(t)));for(var o=function(n){e[n].addEventListener("mousedown",(function(t){0===t.button&&(e[n+1].style.display="block")}))},r=0;r<e.length;r+=2)o(r);n=0}(E),E=0})))})),g.addEventListener("mousedown",(function(n){0===n.button&&fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(n){return n.json()})).then((function(n){console.log(n),n.meals.forEach((function(n){var e=document.createElement("div");e.id="randomRecipe";var t=document.createElement("h2");t.id="randomTitle";var o=document.createTextNode(w(n)),r=document.createElement("img");r.src=T(n);var a=document.createElement("p");a.id="subtitulo";var i=document.createTextNode("Ingredients:"),c=I(n),d=document.createElement("p");d.id="subtitulo2";var s=document.createTextNode("Instructions:"),l=document.createElement("p"),p=document.createTextNode(C(n));h.appendChild(e),t.appendChild(o),e.appendChild(t),e.appendChild(r),a.appendChild(i),e.appendChild(a),e.appendChild(c),d.appendChild(s),e.appendChild(d),l.appendChild(p),e.appendChild(l)}))}))})),v.addEventListener("mousedown",(function(n){0===n.button&&document.getElementById("areaRecipes").remove()})),x.addEventListener("mousedown",(function(n){0===n.button&&document.getElementById("randomRecipe").remove()}))})()})();