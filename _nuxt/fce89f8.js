(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{346:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("05c8316d",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n(346)},362:function(t,e,n){var r=n(34)((function(i){return i[1]}));r.push([t.i,"#image[data-v-28c0aa2a]{height:600px;width:1200px}",""]),r.locals={},t.exports=r},383:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(42),{components:{SysLogo:n(198).a},layout:"empty",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.ssrContext,o=r.contentPath,c=r.contentField,e.next=4,n(o).fetch();case 4:return article=e.sent,e.abrupt("return",{article:article,field:c});case 6:case"end":return e.stop()}}),e)})))()},computed:{updatedAt:function(){return new Date(this.article.updatedAt).toLocaleDateString("en-US",{timeZone:"MST"})}}}),c=o,l=(n(361),n(26)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white text-gray-900 flex flex-col relative",attrs:{id:"image"}},[n("div",{staticClass:"flex-none px-16 pt-12"},[n("h1",{staticClass:"text-7xl font-bold leading-tight"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex-auto px-16 pt-8"},[n("p",{staticClass:"text-4xl text-gray-600 leading-snug line-clamp-3"},[t._v("\n        "+t._s(t.article.description)+"\n      ")])]),t._v(" "),n("div",{staticClass:"px-16 pt-16 pb-12"},[n("h2",{staticClass:"text-3xl text-gray-400 font-normal"},[t._v("\n        Last Updated "+t._s(t.updatedAt)+"\n      ")])]),t._v(" "),n("div",{staticClass:"h-8 bg-orange-500 flex-none"}),t._v(" "),n("div",{staticClass:"h-32 w-32 absolute right-12 bottom-16"},[n("sys-logo")],1)])])}),[],!1,null,"28c0aa2a",null);e.default=component.exports}}]);