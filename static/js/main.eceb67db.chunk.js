(this["webpackJsonpuse-lazyload-example"]=this["webpackJsonpuse-lazyload-example"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),u=(n(13),n(1)),i=n.n(u),s=n(2),l=n(5),f=n(3),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function b(e,t){var n,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var d={root:null,rootMargin:"0px",thresholds:[0]},h=function(e,t){void 0===t&&(t=d);var n=Object(r.useState)(null),a=n[0],o=n[1],c=Object(r.useCallback)((function(t,n){var r,a,o,c,u=t[0];return r=void 0,a=void 0,c=function(){return b(this,(function(t){switch(t.label){case 0:return u.isIntersecting?(n.unobserve(u.target),[4,e(u,n)]):[3,2];case 1:t.sent(),n.observe(u.target),t.label=2;case 2:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{i(c.next(e))}catch(n){t(n)}}function u(e){try{i(c.throw(e))}catch(n){t(n)}}function i(t){t.done?e(t.value):new o((function(e){e(t.value)})).then(n,u)}i((c=c.apply(r,a||[])).next())}))}),[]);return Object(r.useEffect)((function(){var e;return a&&(e=new IntersectionObserver(c,p({},t))).observe(a),function(){return e&&e.disconnect()}}),[a,t.root,t.thresholds,t.rootMargin,c]),[a,o]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){return setTimeout(t,e)}))},y=function(){var e=Object(r.useState)({isLoading:!1,data:[]}),t=Object(f.a)(e,2),n=t[0],o=t[1],c=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return o((function(e){return Object(l.a)({},e,{isLoading:!0})})),e.next=3,i.a.awrap(v());case 3:o((function(e){return{isLoading:!1,data:[].concat(Object(s.a)(e.data),Object(s.a)(Array(10)))}}));case 4:case"end":return e.stop()}}))},u=h((function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(c());case 2:case"end":return e.stop()}}))}),{}),p=Object(f.a)(u,2),b=(p[0],p[1]);return Object(r.useEffect)((function(){c()}),[]),n.data.length?a.a.createElement("div",{className:"container"},n.data.map((function(e,t){return a.a.createElement("div",{className:"box",key:t},t)})),a.a.createElement("div",{ref:b,className:"loading-box"},n.isLoading?"Loading!":null)):null};c.a.render(a.a.createElement(y,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.eceb67db.chunk.js.map