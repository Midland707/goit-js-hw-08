!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n,i=document.querySelector("iframe"),o=new Vimeo.Player(i),r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,p=s||v||Function("return this")(),y=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return p.Date.now()};function h(e,t,n){var i,o,r,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function p(t){var n=i,r=o;return i=o=void 0,l=t,f=e.apply(r,n)}function y(e){return l=e,a=setTimeout(T,t),d?p(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=r}function T(){var e=g();if(h(e))return O(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?b(n,r-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?p(e):(i=o=void 0,f)}function x(){var e=g(),n=h(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return y(c);if(s)return a=setTimeout(T,t),p(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=w(t)||0,j(n)&&(d=!!n.leading,r=(s="maxWait"in n)?m(w(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},x.flush=function(){return void 0===a?f:O(g())},x}function j(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var i=c.test(e);return i||l.test(e)?d(e.slice(2),i?2:8):a.test(e)?NaN:+e}var T=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:i,maxWait:t,trailing:o})}((function(){localStorage.setItem("videoplayer-current-time",n)}),1e3);o.on("timeupdate",(function(e){n=e.seconds,T()})),o.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.b9c813c5.js.map
