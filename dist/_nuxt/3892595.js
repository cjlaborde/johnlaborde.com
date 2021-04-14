(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{302:function(t,e,l){"use strict";l.r(e);var r=l(5),n=Object(r.b)({name:"ArticleList",props:{articles:{type:Object,required:!0}}}),o=l(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"text-gray-500 max-w-5xl mx-auto"},t._l(t.articles,(function(article){return l("li",{key:article.slug,staticClass:"mb-12 bg-white rounded shadow pl-0 pt-0 sm:pl-10 sm:pt-10"},[l("nuxt-link",{staticClass:"flex-none sm:flex",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[article.image?l("img",{staticClass:"border rounded h-80 w-full sm:w-80 object-cover",attrs:{src:article.image,alt:article.alt}}):t._e(),t._v(" "),l("div",{staticClass:"m-auto p-3"},[l("h2",{staticClass:"font-bold text-gray-900 text-2xl"},[t._v("\n          "+t._s(article.title)+"\n        ")]),t._v(" "),l("span",{staticClass:"font-semibold text-sm"},[t._v("\n          published: "+t._s(t.$dayjs(article.published).fromNow())+"\n        ")]),t._v(" "),l("p",{staticClass:"text-base mt-3"},[t._v(t._s(article.description))]),t._v(" "),l("p",{staticClass:"font-bold text-green-400 mt-2"},[t._v("\n          Read more"),l("span",{staticClass:"text-green-400"},[t._v("…")])])])]),t._v(" "),l("ul",{staticClass:"flex justify-end p-3"},t._l(article.tags,(function(e){return l("li",{key:e,staticClass:"text-center mr-2 mb-2 p-1 border border-gray-200 rounded"},[l("nuxt-link",{staticClass:"text-sm hover:text-gray-800 text-gray-500",attrs:{to:{name:"tags-tag",params:{tag:e.toLowerCase()}}}},[t._v(t._s(e))])],1)})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);