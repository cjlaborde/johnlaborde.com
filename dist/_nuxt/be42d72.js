(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3],{302:function(t,e,r){"use strict";r.r(e);var l=r(5),n=Object(l.b)({name:"ArticleList",props:{articles:{type:Object,required:!0}}}),o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"text-gray-500 max-w-5xl mx-auto"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"mb-12 bg-white rounded shadow pl-0 pt-0 sm:pl-10 sm:pt-10"},[r("nuxt-link",{staticClass:"flex-none sm:flex",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[article.image?r("img",{staticClass:"border rounded h-80 w-full sm:w-80 object-cover",attrs:{src:article.image,alt:article.alt}}):t._e(),t._v(" "),r("div",{staticClass:"m-auto p-3"},[r("h2",{staticClass:"font-bold text-gray-900 text-2xl"},[t._v("\n          "+t._s(article.title)+"\n        ")]),t._v(" "),r("span",{staticClass:"font-semibold text-sm"},[t._v("\n          published: "+t._s(t.$dayjs(article.published).fromNow())+"\n        ")]),t._v(" "),r("p",{staticClass:"text-base mt-3"},[t._v(t._s(article.description))]),t._v(" "),r("p",{staticClass:"font-bold text-green-400 mt-2"},[t._v("\n          Read more"),r("span",{staticClass:"text-green-400"},[t._v("…")])])])]),t._v(" "),r("ul",{staticClass:"flex justify-end p-3"},t._l(article.tags,(function(e){return r("li",{key:e,staticClass:"text-center mr-2 mb-2 p-1 border border-gray-200 rounded"},[r("nuxt-link",{staticClass:"text-sm hover:text-gray-800 text-gray-500",attrs:{to:{name:"tags-tag",params:{tag:e.toLowerCase()}}}},[t._v(t._s(e))])],1)})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,r){"use strict";r.r(e);var l=r(5),n=Object(l.b)({name:"Author",props:{author:{type:Object,required:!0}}}),o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex lg:px-1/6 my-4"},[r("div",{staticClass:"w-32 min-w-max-content"},[r("NuxtLink",{attrs:{to:"/author/"+t.author.name}},[r("img",{staticClass:"h-12 w-12 md:h-16 md:w-16 rounded-full",attrs:{src:t.author.image}})])],1),t._v(" "),r("div",{staticClass:"px-3"},[r("NuxtLink",{attrs:{to:"/author/"+t.author.name}},[r("h4",{staticClass:"text-gray-500"},[t._v("Written By")]),t._v(" "),r("h3",{staticClass:"text-gray-700 font-bold text-xl"},[t._v(t._s(t.author.name))]),t._v(" "),r("p",{staticClass:"text-gray-600 font-semibold text-sm"},[t._v("\n        "+t._s(t.author.profession)+"\n      ")])]),t._v(" "),r("p",{staticClass:"py-5 pr-0 md:pr-8 text-sm md:text-base text-gray-700"},[t._v("\n      "+t._s(t.author.bio)+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var l=r(5),n=Object(l.b)({name:"Author",setup:function(){var t=Object(l.g)(),e=t.$content,r=t.route;return{articles:Object(l.f)((function(){return e("articles").where({"author.name":r.value.params.author}).without("body").sortBy("createdAt","asc").fetch()}),"m8/YWGzq8nx0B9mlDmShtQ==")}}}),o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.articles?r("div",[r("NuxtLink",{staticClass:"font-bold text-gray-800 text-xl mb-10",attrs:{to:"/articles"}},[t._v("\n    Back to All Articles\n  ")]),t._v(" "),r("Author",{staticClass:"text-left px-4 lg:px-1/4",attrs:{author:t.articles[0].author}}),t._v(" "),r("ArticleList",{attrs:{articles:t.articles}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Author:r(307).default,ArticleList:r(302).default})}}]);