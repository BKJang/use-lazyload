(this["webpackJsonpuse-lazyload-example"]=this["webpackJsonpuse-lazyload-example"]||[]).push([[0],{177:function(e,n,t){e.exports=t(372)},371:function(e,n,t){},372:function(e,n,t){"use strict";t.r(n);t(178),t(187);var r=t(21),a=t.n(r),o=t(175),c=t.n(o),u=(t(371),t(60)),i=t.n(u),s=t(107),l=t(176),f=t(108),p=function(){return(p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function b(e,n){var t,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=n.call(e,c)}catch(u){o=[6,u],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var d={root:null,rootMargin:"0px",thresholds:[0]},h=function(e,n){void 0===n&&(n=d);var t=Object(r.useState)(null),a=t[0],o=t[1],c=Object(r.useCallback)((function(n,t){var r,a,o,c,u=n[0];return r=void 0,a=void 0,c=function(){return b(this,(function(n){switch(n.label){case 0:return u.isIntersecting?(t.unobserve(u.target),[4,e(u,t)]):[3,2];case 1:n.sent(),t.observe(u.target),n.label=2;case 2:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function t(e){try{i(c.next(e))}catch(t){n(t)}}function u(e){try{i(c.throw(e))}catch(t){n(t)}}function i(n){n.done?e(n.value):new o((function(e){e(n.value)})).then(t,u)}i((c=c.apply(r,a||[])).next())}))}),[]);return Object(r.useEffect)((function(){var e;return a&&(e=function(e,n){return new IntersectionObserver(e,p({},n))}(c,p({},n))).observe(a),function(){return e&&e.disconnect()}}),[a,n.root,n.thresholds,n.rootMargin,c]),[a,o]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(n){return setTimeout(n,e)}))},y=function(){var e=Object(r.useState)({isLoading:!1,data:[]}),n=Object(f.a)(e,2),t=n[0],o=n[1],c=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return o((function(e){return Object(l.a)({},e,{isLoading:!0})})),e.next=3,i.a.awrap(v());case 3:o((function(e){return{isLoading:!1,data:[].concat(Object(s.a)(e.data),Object(s.a)(Array(10)))}}));case 4:case"end":return e.stop()}}))},u=h((function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(c());case 2:case"end":return e.stop()}}))}),{}),p=Object(f.a)(u,2),b=(p[0],p[1]);return Object(r.useEffect)((function(){c()}),[]),t.data.length?a.a.createElement("div",{className:"container"},t.data.map((function(e,n){return a.a.createElement("div",{className:"box",key:n},n)})),a.a.createElement("div",{ref:b,className:"loading-box"},t.isLoading?"Loading!":null)):null};c.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.75d2d3ef.chunk.js.map