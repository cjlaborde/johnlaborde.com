(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(t,e,l){"use strict";l.r(e);var n=l(5),r=Object(n.b)({name:"RelatedArticles",props:{relatedArticles:{type:Object,required:!0}}}),c=l(8),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.relatedArticles.length>0?l("div",[l("h3",{staticClass:"px-1/12 lg:px-1/6 bold text-gray-800 my-8 text-lg font-semibold"},[t._v("\n    Related Articles:\n  ")]),t._v(" "),t._l(t.relatedArticles,(function(article){return l("ul",{key:article.slug},[l("li",{staticClass:"flex lg:px-1/6 my-4"},[l("div",{staticClass:"min-w-max-content"},[l("NuxtLink",{attrs:{to:"/author/"+article.name}},[l("img",{staticClass:"h-12 w-12 md:h-16 md:w-16",attrs:{src:article.image}})])],1),t._v(" "),l("div",{staticClass:"px-3"},[l("NuxtLink",{attrs:{to:"/articles/"+article.slug}},[l("h3",{staticClass:"text-gray-700 font-bold text-lg"},[t._v(t._s(article.title))]),t._v(" "),l("span",{staticClass:"font-semibold text-xs text-gray-600"},[t._v("\n            published: "+t._s(t.$dayjs(article.published).fromNow())+"\n          ")]),t._v(" "),l("p",{staticClass:"text-gray-600 text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")])])],1)])])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);