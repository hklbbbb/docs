(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{341:function(t,e,n){"use strict";n.r(e);var r={props:{article:{type:Object,default:function(){return{}}}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"block group"},[n("nuxt-link",{attrs:{to:"/articles/"+t.article.slug}},[n("div",{staticClass:"sys-article-p font-bold group-focus:underline group-hover:underline"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"sys-article-p text-warm-gray-500"},[t._v("\n      "+t._s(t.article.description)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},342:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},343:function(t,e,n){var r=n(350),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},344:function(t,e,n){var r=n(343).Symbol;t.exports=r},345:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("2e2e8bee",content,!0,{sourceMap:!1})},347:function(t,e,n){var r=n(348),o=n(342);t.exports=function(t,e,n){var c=!0,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(c="leading"in n?!!n.leading:c,l="trailing"in n?!!n.trailing:l),r(t,e,{leading:c,maxWait:e,trailing:l})}},348:function(t,e,n){var r=n(342),o=n(349),c=n(351),l=Math.max,f=Math.min;t.exports=function(t,e,n){var d,m,h,v,y,x,w=0,_=!1,C=!1,k=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(time){var e=d,n=m;return d=m=void 0,w=time,v=t.apply(n,e)}function S(time){return w=time,y=setTimeout(O,e),_?j(time):v}function T(time){var t=time-x;return void 0===x||t>=e||t<0||C&&time-w>=h}function O(){var time=o();if(T(time))return $(time);y=setTimeout(O,function(time){var t=e-(time-x);return C?f(t,h-(time-w)):t}(time))}function $(time){return y=void 0,k&&d?j(time):(d=m=void 0,v)}function A(){var time=o(),t=T(time);if(d=arguments,m=this,x=time,t){if(void 0===y)return S(x);if(C)return clearTimeout(y),y=setTimeout(O,e),j(x)}return void 0===y&&(y=setTimeout(O,e)),v}return e=c(e)||0,r(n)&&(_=!!n.leading,h=(C="maxWait"in n)?l(c(n.maxWait)||0,e):h,k="trailing"in n?!!n.trailing:k),A.cancel=function(){void 0!==y&&clearTimeout(y),w=0,d=x=m=y=void 0},A.flush=function(){return void 0===y?v:$(o())},A}},349:function(t,e,n){var r=n(343);t.exports=function(){return r.Date.now()}},350:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(28))},351:function(t,e,n){var r=n(352),o=n(342),c=n(354),l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=f.test(t);return n||d.test(t)?m(t.slice(2),n?2:8):l.test(t)?NaN:+t}},352:function(t,e,n){var r=n(353),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},353:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},354:function(t,e,n){var r=n(355),o=n(358);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},355:function(t,e,n){var r=n(344),o=n(356),c=n(357),l=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):c(t)}},356:function(t,e,n){var r=n(344),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[f]=n:delete t[f]),o}},357:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},358:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},359:function(t,e,n){"use strict";n(345)},360:function(t,e,n){var r=n(34)((function(i){return i[1]}));r.push([t.i,"header[data-v-58c17b04]{background-image:radial-gradient(rgba(87,79,74,.75),#574f4a),url(/images/website/robot.jpg)}",""]),r.locals={},t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r,o=n(6),c=(n(43),n(144),n(21),n(42),n(347)),l=n.n(c),f={asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n().only(["title","description","keywords","section","slug"]).where({hidden:!1}).sortBy("title").fetch();case 3:return t.t0=t.sent,t.abrupt("return",{articles:t.t0});case 5:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),data:function(){return{search:"",results:[],listings:[{title:"Getting Help",section:"getting-help"},{title:"Troubleshoot",section:"troubleshoot",listings:[{title:"Software Troubleshooting",section:"software-troubleshooting"},{title:"Network Troubleshooting",section:"network-troubleshooting"},{title:"Hardware Troubleshooting",section:"hardware-troubleshooting"},{title:"Repairs and Returns",section:"repairs-returns"}]},{title:"Tune",section:"tune",listings:[{title:"Software",section:"software"},{title:"Hardware",section:"hardware"},{title:"Windows",section:"windows"}]},{title:"Learn",section:"learn",listings:[{title:"Switching To Linux",section:"switching"},{title:"About Your Computer",section:"about-your-computer"},{title:"About Your Operating System",section:"about-your-os"},{title:"About Pop!_OS",section:"pop"},{title:"About Ubuntu",section:"ubuntu"},{title:"Media",section:"media"},{title:"General Hardware Information",section:"general-hardware-info"}]},{title:"Community Articles",description:"The following documents have been graciously submitted by community members. They have not been checked for accuracy, completeness, or style. Please contact the contributers through their GitHub account for any questions.",section:"community"},{title:"Case Studies",section:"case-studies"}]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.search){e.next=4;break}t.results=[],e.next=7;break;case 4:return e.next=6,t.$content().only(["title","description","slug"]).limit(10).search(t.search).fetch();case 6:t.results=e.sent;case 7:case"end":return e.stop()}}),e)})))()},computed:{articlesForSection:function(){var t=this;return function(section){return t.articles.filter((function(article){return article.section===section}))}}},methods:{debouncedFetch:l()((function(){this.$fetch()}),400)}},d=f,m=(n(359),n(26)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"bg-gray-100"},[n("header",{staticClass:"w-full bg-cover bg-center lg:pb-16"},[n("nuxt-img",{staticClass:"px-4 py-8 lg:py-10 mx-auto w-full max-w-3xl",attrs:{alt:"Buy a computer - Don't talk to one. Lifetime support from 100% real humans",height:"440",src:"/images/website/robot-type.png",width:"1207"}}),t._v(" "),n("h1",{staticClass:"hidden"},[t._v("\n      Buy a computer - Don't talk to one. Lifetime support from 100% real humans\n    ")]),t._v(" "),n("div",{staticClass:"px-4 pb-12 mx-auto max-w-4xl"},[n("div",{staticClass:"relative"},[n("form",{staticClass:"relative flex items-center pr-4 border bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500 focus-within:shadow-sm",attrs:{novalidate:"",role:"search"},on:{submit:function(e){return e.preventDefault(),t.$fetch.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"flex-auto -mr-8 appearance-none bg-transparent pl-4 pr-12 py-4 rounded-md text-md font-medium text-gray-700 focus:outline-none",attrs:{id:"search-box",type:"search","aria-autocomplete":"list",autocomplete:"off",autocorrect:"off",autocapitalize:"none",spellcheck:"false",placeholder:"Search Support Articles...","aria-label":"Search support articles","aria-expanded":""!==t.search,"aria-haspopup":"true","aria-controls":"search-results"},domProps:{value:t.search},on:{"&keyup":function(e){return t.debouncedFetch.apply(null,arguments)},"&blur":function(e){return t.debouncedFetch.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("font-awesome-icon",{attrs:{icon:"search"}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.search,expression:"search !== ''"}],staticClass:"origin-top absolute z-10 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",attrs:{id:"search-results","aria-labelledby":"search-box","aria-orientation":"vertical",role:"listbox",tabindex:"-1"}},[n("div",{staticClass:"py-1",attrs:{role:"none"}},[null!=t.$fetchState.error?n("span",{staticClass:"text-gray-400 block px-4 py-2 text-sm",attrs:{role:"option",tabindex:"-1"}},[t._v("\n              An error occured while fetching search results\n            ")]):0===t.results.length&&t.$fetchState.pending?n("span",{staticClass:"text-gray-400 block px-4 py-2 text-sm",attrs:{role:"option",tabindex:"-1"}},[t._v("\n              Loading...\n            ")]):0===t.results.length?n("span",{staticClass:"text-gray-400 block px-4 py-2 text-sm",attrs:{role:"option",tabindex:"-1"}},[t._v("\n              No Results\n            ")]):t._l(t.results,(function(article){return n("nuxt-link",{key:article.slug,staticClass:"text-gray-700 block px-4 py-2 group hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",attrs:{to:"/articles/"+article.slug,role:"option"}},[n("div",{staticClass:"text-md leading-6 font-semibold group-hover:text-gray-900 group-hover:underline group-focus:text-gray-900 group-focus:underline"},[t._v("\n                "+t._s(article.title)+"\n              ")]),t._v(" "),n("div",{staticClass:"text-sm mt-1 text-sm text-gray-400"},[t._v("\n                "+t._s(article.description)+"\n              ")])])}))],2)])])])],1),t._v(" "),n("section",{staticClass:"max-w-full mx-auto my-12 px-4 grid gap-y-6 gap-x-6 grid-cols-1 md:max-w-3xl lg:-mt-16 lg:max-w-6xl lg:grid-cols-2 lg:mb-16"},[n("div",{staticClass:"px-4 py-3 flex flex-col bg-white rounded-lg"},[t._m(0),t._v(" "),n("ul",{staticClass:"space-y-2"},[n("li",[n("nuxt-link",{staticClass:"flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500",attrs:{to:"#troubleshoot"}},[n("div",{staticClass:"flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500"},[n("font-awesome-icon",{attrs:{icon:"search"}})],1),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"font-bold text-warm-gray-800"},[t._v("\n                Troubleshoot\n              ")]),t._v(" "),n("p",{staticClass:"text-warm-gray-600"},[t._v("\n                Detailed solutions for prominent issues.\n              ")])])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500",attrs:{to:"#tune"}},[n("div",{staticClass:"flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500"},[n("font-awesome-icon",{attrs:{icon:"wrench"}})],1),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"font-bold text-warm-gray-800"},[t._v("\n                Tune\n              ")]),t._v(" "),n("p",{staticClass:"text-warm-gray-600"},[t._v("\n                Information on how to upgrade, maintain, and customize your system.\n              ")])])])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500",attrs:{to:"#learn"}},[n("div",{staticClass:"flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500"},[n("font-awesome-icon",{attrs:{icon:"graduation-cap"}})],1),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"font-bold text-warm-gray-800"},[t._v("\n                Learn\n              ")]),t._v(" "),n("p",{staticClass:"text-warm-gray-600"},[t._v("\n                A general guide for new users. Welcome!\n              ")])])])],1)])]),t._v(" "),n("div",{staticClass:"px-4 py-4 flex flex-col bg-white rounded-lg"},[t._m(1),t._v(" "),n("ul",{staticClass:"space-y-2 md:space-y-4"},[n("li",[n("a",{staticClass:"flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500",attrs:{href:"https://system76.com/my-account/support-tickets/new",target:"_blank",rel:""}},[n("div",{staticClass:"flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500"},[n("font-awesome-icon",{attrs:{icon:"ticket-alt"}})],1),t._v(" "),t._m(2)])]),t._v(" "),n("li",[n("a",{staticClass:"flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500",attrs:{href:"tel:+17202269269"}},[n("div",{staticClass:"flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500"},[n("font-awesome-icon",{attrs:{icon:"phone"}})],1),t._v(" "),t._m(3)])])])])]),t._v(" "),t._l(t.listings,(function(e){return n("section",{key:e.id,staticClass:"max-w-7xl mx-auto my-10 px-4 divide-y-2 divide-transparent sm:my-12 md:my-16 xl:my-24"},[n("div",[n("h2",{staticClass:"sys-article-h2",attrs:{id:e.section}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),e.description?n("p",{staticClass:"sys-article-p mt-4"},[t._v("\n        "+t._s(e.description)+"\n      ")]):t._e()]),t._v(" "),null!=e.section&&t.articlesForSection(e.section).length>0?n("div",{staticClass:"mt-4 sm:mt-6 md:mt-8"},[n("ul",{staticClass:"space-y-2 sm:space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 xl:gap-y-6"},t._l(t.articlesForSection(e.section),(function(article){return n("article-listing",{key:article.path,attrs:{article:article}})})),1)]):t._e(),t._v(" "),t._l(e.listings,(function(e){return n("div",{key:e.section,staticClass:"mt-4 sm:mt-6 md:mt-8 xl:mt-10"},[n("h3",{staticClass:"sys-article-h3",attrs:{id:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-4 sm:mt-6 xl:mt-8"},[n("ul",{staticClass:"space-y-2 sm:space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 xl:gap-y-6"},t._l(t.articlesForSection(e.section),(function(article){return n("article-listing",{key:article.path,attrs:{article:article}})})),1)])])}))],2)}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-4 my-4 md:min-h-[4rem]"},[n("h2",{staticClass:"sys-article-h3"},[t._v("\n          Support Articles\n        ")]),t._v(" "),n("p",{staticClass:"text-lg my-4 text-warm-gray-600"},[t._v("\n          Search helpful documentation for answers to a variety of questions or issues.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-4 my-3 md:min-h-[4rem]"},[n("h2",{staticClass:"sys-article-h3"},[t._v("\n          Contact Us\n        ")]),t._v(" "),n("p",{staticClass:"text-lg my-4 text-warm-gray-600"},[t._v("\n          Can’t find what you’re looking for in our support articles? Our team is here to help.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ml-4"},[n("p",{staticClass:"font-bold text-warm-gray-800"},[t._v("\n                Open a Support Ticket\n              ")]),t._v(" "),n("p",{staticClass:"text-warm-gray-600"},[t._v("\n                Get expert help from real support humans. Recommended for most users.\n              ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ml-4"},[n("p",{staticClass:"font-bold text-warm-gray-800"},[t._v("\n                Call (720) 226-9269\n              ")]),t._v(" "),n("p",{staticClass:"text-warm-gray-600"},[t._v("\n                We’re open 8am – 5pm MST. Response time may be limited on weekends and holidays.\n              ")])])}],!1,null,"58c17b04",null);e.default=component.exports;installComponents(component,{ArticleListing:n(341).default})}}]);